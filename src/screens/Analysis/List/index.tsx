import DefaultListScreen from '../../Default/List';
import api from '../../../utils/api';
import { useState, useCallback } from 'react';
import Loader from '../../../components/Loader';
import validateUser from '../../../utils/validateUser';
import { useDispatch } from 'react-redux';
import { setHeaderTitle } from '../../../store/slices/headerSlice';
import { setTabTitle } from '../../../store/slices/tabSlice';
import { useFocusEffect } from '@react-navigation/native';

function ListAnalysis({ navigation }: any) {
  const [analysisList, setAnalysisList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const getAnalysisList = async () => {
    const res = await api.get('/analysis/list');
    setAnalysisList(res.data || []);
    setLoading(false);
  };

  const handleRemove = () => {
    getAnalysisList();
  };

  useFocusEffect(
    useCallback(() => {
      validateUser(navigation);
      dispatch(setHeaderTitle('Suas Análises'));
      dispatch(setTabTitle('Análises'));
      getAnalysisList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return loading ? (
    <Loader />
  ) : (
    <>
      <DefaultListScreen
        list={analysisList}
        addEditScreen="AddEditAnalysis"
        listScreen="ListAnalysis"
        apiRoute="/analysis"
        childrenListScreen="ListPlot"
        parentName="analysis"
        navigation={navigation}
        removeFunction={handleRemove}
      />
    </>
  );
}

export default ListAnalysis;
