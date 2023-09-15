import DefaultListScreen from '../../Default/List';
import DefaultFloatButton from '../../../components/DefaultFloatButton';
import api from '../../../utils/api';
import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';
import validateUser from '../../../utils/validateUser';
import { useDispatch } from 'react-redux';
import { setHeaderTitle } from '../../../store/slices/headerSlice';
import { setTabTitle } from '../../../store/slices/tabSlice';
// import validateUser from '../../../utils/validateUser';

function ListAnalysis({ navigation }: any) {
  const [analysisList, setAnalysisList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle('Bem-vindo de volta, Usuário!'));
    dispatch(setTabTitle('Análises'));
  }, [dispatch]);

  const getAnalysisList = async () => {
    const res = await api.get('/analysis/list');
    console.log('res', res.data);

    setAnalysisList(res.data || []);
    setLoading(false);
  };

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
      />
      <DefaultFloatButton
        onPress={() =>
          navigation.navigate('AddEditAnalysis', { isView: false })
        }
        type="add"
      />
    </>
  );
}

export default ListAnalysis;
