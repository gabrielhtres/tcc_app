import DefaultListScreen from '../../Default/List';
import DefaultFloatButton from '../../../components/DefaultFloatButton';
import api from '../../../utils/api';
import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';
import validateUser from '../../../utils/validateUser';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderTitle } from '../../../store/slices/headerSlice';
import { setTabTitle } from '../../../store/slices/tabSlice';

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
  }

  useEffect(() => {
    dispatch(setHeaderTitle(`Suas Análises`));
    dispatch(setTabTitle('Análises'));
  })

  useEffect(() => {
    validateUser(navigation);
    getAnalysisList();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <DefaultListScreen
        list={analysisList}
        addEditScreen="AddEditAnalysis"
        listScreen="ListAnalysis"
        apiRoute="/analysis"
        navigation={navigation}
        childrenListScreen="ListPlot"
        removeFunction={handleRemove}
      />
    </>
  );
}

export default ListAnalysis;
