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
  headerName: string;
  parentId: number;
}

interface Props {
  navigation: any;
}

function ListPlot({ navigation }: Props) {
  const [plotList, setPlotList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const route = useRoute();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle(''));
    dispatch(setTabTitle('Análises'));
  }, [dispatch]);

  const { parentId } = route?.params as RouteParams;

  const getPlotList = async () => {
    console.log('analysisId da buceta do get plot list', parentId);

    const res = await api.get(`/plot/list/${parentId}`);

    setPlotList(res.data || []);
    setLoading(false);
  };

  useEffect(() => {
    validateUser(navigation);
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
        childrenListScreen="PhaseList"
        apiRoute="/plot"
        navigation={navigation}
        parentId={parentId}
      />
    </>
  );
}

export default ListPlot;
