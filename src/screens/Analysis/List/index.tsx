import DefaultListScreen from '../../Default/List';
import DefaultFloatButton from '../../../components/DefaultFloatButton';
import api from '../../../utils/api';
import { getStorageData } from '../../../utils/storageService';
import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';

function ListAnalysis({ navigation }: any) {
  const [analysisList, setAnalysisList] = useState<any[]>([]);
  const [username, setUsername] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const getAnalysisList = async () => {
    const name = await getStorageData('name');
    const res = await api.get('/analysis/list');
    setAnalysisList(res.data || []);
    setUsername(name || '');
    setLoading(false);
  };

  useEffect(() => {
    getAnalysisList();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <DefaultListScreen
        menuTitle={`Bem-vindo de volta, ${username}!`}
        screenTitle="Análises"
        list={analysisList}
        screen="AddEditAnalysis"
        routeDelete="/analysis"
        navigation={navigation}
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
