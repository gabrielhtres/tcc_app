import { Text } from 'react-native-paper';
import DefaultAddEditScreen from '../../Default/AddEdit';
import SaveButton from '../../../components/SaveButton';

function ListAnalysis({ navigation }: any) {
  return (
    <>
      <DefaultAddEditScreen
        menuTitle="Adicionar Talhão na Análise 1"
        screenTitle="Análises"
        fields={
          <>
            <Text>Input 1</Text>
            <Text>Input 1</Text>
          </>
        }
        edit="edit"
      />
      <SaveButton onPress={() => navigation.navigate('ListAnalysis')} />
    </>
  );
}

export default ListAnalysis;
