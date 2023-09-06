import DefaultAddEditScreen from '../../Default/AddEdit';
import { TextInput } from 'react-native-paper';
import { Fragment, FunctionComponent, useEffect, useState } from 'react';
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

  useEffect(() => {
    if (route.params) {
      const { editId } = route.params as any;
      api.get(`/analysis/${editId}`).then(res => {
        setFieldValues(res.data);
      });
    }
  }, [route.params]);

  const submitData = async () => {
    if (route.params) {
      const { editId } = route.params as any;
      await api.put(`/analysis/${editId}`, fieldValues);
      return;
    }
    await api.post('/analysis', fieldValues);
  };

  return (
    <Fragment>
      <DefaultAddEditScreen
        menuTitle={route.params ? 'Editar Análise' : 'Adicionar Análise'}
        screenTitle="Análises"
        fields={
          <>
            <TextInput
              mode="outlined"
              label="Título"
              style={styles.input}
              value={fieldValues.name}
              onChangeText={text => {
                setFieldValues({ ...fieldValues, name: text });
              }}
            />
            <TextInput
              mode="outlined"
              label="Descrição"
              multiline
              numberOfLines={7}
              style={styles.input}
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
        onPress={() => {
          submitData();
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'ListAnalysis' }],
            }),
          );
        }}
        type="save"
      />
    </Fragment>
  ) as unknown as FunctionComponent;
}

export default AddEditAnalysis;
