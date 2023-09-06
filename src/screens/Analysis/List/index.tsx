import DefaultListScreen from '../../Default/List';
import DefaultFloatButton from '../../../components/DefaultFloatButton';
import api from '../../../utils/api';
import { getStorageData } from '../../../utils/storageService';
import { useEffect, useState } from 'react';

function ListAnalysis({ navigation }: any) {
  const [analysisList, setAnalysisList] = useState<any[]>([]);
  const [username, setUsername] = useState<string>('');

  const getAnalysisList = async () => {
    const name = await getStorageData('name');
    const res = await api.get('/analysis/list');
    setAnalysisList(res.data || []);
    setUsername(name || '');
  };

  useEffect(() => {
    getAnalysisList();
  }, []);

  return (
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
        onPress={() => navigation.navigate('AddEditAnalysis')}
        type="add"
      />
    </>
  );
}

export default ListAnalysis;
