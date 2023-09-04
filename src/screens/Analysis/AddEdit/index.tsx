import DefaultAddEditScreen from '../../Default/AddEdit';
import { TextInput } from 'react-native-paper';
import { useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import styles from './styles';
import DefaultFloatButton from '../../../components/DefaultFloatButton';

function AddEditAnalysis({ navigation }: any) {
  useEffect(() => {
    console.log('veio aq');
  }, []);

  return (
    <>
      <DefaultAddEditScreen
        menuTitle="Adicionar Análise"
        screenTitle="Análises"
        fields={
          <>
            <TextInput mode="outlined" label="Título" style={styles.input} />
            <TextInput
              mode="outlined"
              label="Descrição"
              multiline
              numberOfLines={7}
              style={styles.input}
            />
          </>
        }
        edit="edit"
      />
      {/* <SaveButton
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'ListAnalysis' }],
            }),
          )
        }
      /> */}
      <DefaultFloatButton
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'ListAnalysis' }],
            }),
          )
        }
        type="save"
      />
    </>
  );
}

export default AddEditAnalysis;
