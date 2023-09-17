import DefaultListScreen from '../../Default/List';
import api from '../../../utils/api';
import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';
import validateUser from '../../../utils/validateUser';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setHeaderTitle } from '../../../store/slices/headerSlice';
import { setTabTitle } from '../../../store/slices/tabSlice';
// import validateUser from '../../../utils/validateUser';

interface RouteParams {
  parentId: number;
  parentName: string;
}

interface Props {
  navigation: any;
}

function ListPlot({ navigation }: Props) {
  const [plotList, setPlotList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const route = useRoute();
  const dispatch = useDispatch();

  const getPlotList = async () => {
    const { parentId } = route?.params as RouteParams;

    const res = await api.get(`/plot/list/${parentId}`);

    setPlotList(res.data || []);
    dispatch(setHeaderTitle(`Talhões de ${(route?.params as RouteParams)?.parentName}`));
    dispatch(setTabTitle('Talhões'));
    setLoading(false);
  };
  
  const handleRemove = () => {
    getPlotList();
  }

  useEffect(() => {
    validateUser(navigation);
    console.log('veio no ue do get');
    getPlotList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <DefaultListScreen
        list={plotList}
        addEditScreen="AddEditPlot"
        listScreen="ListPlot"
        apiRoute="/plot"
        navigation={navigation}
        childrenListScreen="PhaseList"
        parentId={(route?.params as RouteParams)?.parentId}
        removeFunction={handleRemove}
      />
    </>
  );
}

export default ListPlot;
