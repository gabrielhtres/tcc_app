import DefaultListScreen from '../../Default/List';
import FloatAddButton from '../../../components/FloatAddButton';
import { getStorageData } from '../../../utils/storageService';
import api from '../../../utils/api';
import { Text } from 'react-native-paper';

function ListAnalysis({ navigation}: any) {
  const getAnalysisList = () => {
    let data: any[] = [];
    
    api.get('/analysis/1', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkdhYnJpZWwiLCJlbWFpbCI6InRlc3RlIiwiaWF0IjoxNjkzNzU1OTcyLCJleHAiOjE2OTM3NTk1NzJ9.glCaEsdezEO8NfPCbkr0NHBz5JyUWNTalrZ8RITeeko'
      }
    }).then(res => data = res.data)
    .catch(err => console.log('erro', err.message));
    
    return data;
  }

  
  
  // const token = await getStorageData('jwtToken');
  // const jwtRefreshToken = await getStorageData('jwtRefreshToken');

  // console.log('token', token);
  // console.log('refreshToken', jwtRefreshToken);

  return (
    <>
      <DefaultListScreen
        menuTitle="Bem-vindo de volta, Usuário!"
        screenTitle="Análises"
        list={getAnalysisList() || []}
      />
      <FloatAddButton onPress={() => navigation.navigate('AddEditAnalysis')} />
    </>
  );
  return <Text>teste</Text>;
}

export default ListAnalysis;
