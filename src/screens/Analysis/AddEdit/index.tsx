import DefaultAddEditScreen from '../../Default/AddEdit';
import { TextInput } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { CommonActions, useRoute } from '@react-navigation/native';
import styles from './styles';
import DefaultFloatButton from '../../../components/DefaultFloatButton';
import api from '../../../utils/api';

interface Props {
  navigation: any;
}

interface FormType {
  name: string;
  description: string;
}

function AddEditAnalysis({ navigation }: Props) {
  const [fieldValues, setFieldValues] = useState<FormType>({
    name: '',
    description: '',
  });

  const route = useRoute();

  const { isView } = route.params as any;

  useEffect(() => {
    if (route.params) {
      const { editId } = route.params as any;

      if (!editId) {
        return;
      }

      api.get(`/analysis/${editId}`).then(res => {
        setFieldValues(res.data);
      });
    }
  }, [route.params]);

  const submitData = async () => {
    console.log('veio no submit');

    try {
      if (route.params) {
        const { editId } = route.params as any;

        if (editId) {
          await api.put(`/analysis/${editId}`, fieldValues);
          return;
        }
      }

      await api.post('/analysis', fieldValues);
    } catch (err: any) {
      console.log(err.response.data.message);
    }
  };

  return (
    <>
      <DefaultAddEditScreen
        menuTitle={route.params ? 'Editar Análise' : 'Adicionar Análise'}
        screenTitle="Análises"
        fields={
          <>
            <TextInput
              editable={!isView}
              mode="outlined"
              label="Título"
              style={styles.input}
              value={fieldValues.name}
              onChangeText={text => {
                setFieldValues({ ...fieldValues, name: text });
              }}
            />
            <TextInput
              editable={!isView}
              mode="outlined"
              label="Descrição"
              multiline
              numberOfLines={7}
              value={fieldValues.description}
              onChangeText={text => {
                setFieldValues({ ...fieldValues, description: text });
              }}
            />
          </>
        }
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
        isView={isView}
        onPress={() => {
          submitData().then(() => {
            navigation.dispatch(
              CommonActions.reset({
                routes: [{ name: 'ListAnalysis' }],
              }),
            );
          });
        }}
        type="save"
      />
    </>
  );
}

export default AddEditAnalysis;
