import DefaultListScreen from '../../Default/List';
import api from '../../../utils/api';
import { useCallback, useState } from 'react';
import Loader from '../../../components/Loader';
import validateUser from '../../../utils/validateUser';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderTitle } from '../../../store/slices/headerSlice';
import { setTabTitle } from '../../../store/slices/tabSlice';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

function ListPlot() {
  const [plotList, setPlotList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const analysis = useSelector((state: any) => state.parent.parents.analysis);
  // console.log('analysis', analysis);

  const getPlotList = async () => {
    const res = await api.get(`/plot/list/${analysis.id}`);
    setPlotList(res.data || []);
    setLoading(false);
  };

  const handleRemove = () => {
    setLoading(true);
    getPlotList();
  };

  useFocusEffect(
    useCallback(() => {
      validateUser(navigation);
      dispatch(setHeaderTitle(`Talhões de ${analysis.name}`));
      dispatch(setTabTitle('Talhões'));
      getPlotList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation]),
  );

  return loading ? (
    <Loader />
  ) : (
    <>
      <DefaultListScreen
        list={plotList}
        addEditScreen="AddEditPlot"
        listScreen="ListPlot"
        apiRoute="/plot"
        childrenListScreen="ListPhase"
        parentName="plot"
        removeFunction={handleRemove}
      />
    </>
  );
}

export default ListPlot;
