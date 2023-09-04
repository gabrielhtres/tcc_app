import DefaultListScreen from '../../Default/List';
import DefaultFloatButton from '../../../components/DefaultFloatButton';

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
          {
            id: 11,
            title: 'Análise 1',
          },
          {
            id: 21,
            title: 'Análise 2',
          },
          {
            id: 31,
            title: 'Análise 3',
          },
          {
            id: 12,
            title: 'Análise 1',
          },
          {
            id: 22,
            title: 'Análise 2',
          },
          {
            id: 32,
            title: 'Análise 3',
          },
          {
            id: 13,
            title: 'Análise 1',
          },
          {
            id: 23,
            title: 'Análise 2',
          },
          {
            id: 33,
            title: 'Análise 3',
          },
          {
            id: 14,
            title: 'Análise 1',
          },
          {
            id: 24,
            title: 'Análise 2',
          },
          {
            id: 34,
            title: 'Análise 3',
          },
          {
            id: 15,
            title: 'Análise 1',
          },
          {
            id: 25,
            title: 'Análise 2',
          },
          {
            id: 35,
            title: 'Análise 3',
          },
        ]}
      />
      <DefaultFloatButton
        onPress={() => navigation.navigate('AddEditAnalysis')}
        type="add"
      />
    </>
  );
}

export default AddEditAnalysis;
