import DefaultListScreen from '../../Default/List';
import FloatAddButton from '../../../components/FloatAddButton';

function AddEditAnalysis({ navigation }: any) {
  return (
    <>
      <DefaultListScreen
        menuTitle="Bem-vindo de volta, Usuário!"
        screenTitle="Análises"
        list={[
          {
            id: 1,
            title: 'Análise 1',
          },
          {
            id: 2,
            title: 'Análise 2',
          },
          {
            id: 3,
            title: 'Análise 3',
          },
        ]}
      />
      <FloatAddButton onPress={() => navigation.navigate('AddEditAnalysis')} />
    </>
  );
}

export default AddEditAnalysis;
