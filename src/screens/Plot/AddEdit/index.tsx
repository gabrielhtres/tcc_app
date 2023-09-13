import DefaultAddEditScreen from '../../Default/AddEdit';
import { TextInput } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { CommonActions, useRoute } from '@react-navigation/native';
import DefaultFloatButton from '../../../components/DefaultFloatButton';
import api from '../../../utils/api';
import styles from './styles';

interface Props {
  navigation: any;
}

interface FormType {
  name: string;
  description: string;
  xCoordinate?: number;
  yCoordinate?: number;
}

function AddEditPlot({ navigation }: Props) {
  const [fieldValues, setFieldValues] = useState<FormType>({
    name: '',
    description: '',
    xCoordinate: undefined,
    yCoordinate: undefined,
  });

  const route = useRoute();

  const { isView } = route.params as any;

  useEffect(() => {
    if (route.params) {
      const { editId } = route.params as any;

      if (!editId) {
        return;
      }

      api.get(`/plot/${editId}`).then(res => {
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
          await api.put(`/plot/${editId}`, fieldValues);
          return;
        }
      }

      await api.post('/plot', fieldValues);
    } catch (err: any) {
      console.log(err.response.data.message);
    }
  };

  return (
    <>
      <DefaultAddEditScreen
        menuTitle={route.params ? 'Editar Talhão' : 'Adicionar Talhão'}
        screenTitle="Talhões"
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
              style={styles.input}
              value={fieldValues.description}
              onChangeText={text => {
                setFieldValues({ ...fieldValues, description: text });
              }}
            />
            <TextInput
              editable={!isView}
              mode="outlined"
              label="Coordenada X"
              style={styles.input}
              keyboardType="numeric"
              value={fieldValues.xCoordinate?.toString()}
              onChangeText={text => {
                setFieldValues({ ...fieldValues, xCoordinate: Number(text) });
              }}
            />
            <TextInput
              editable={!isView}
              mode="outlined"
              label="Coordenada Y"
              style={styles.input}
              keyboardType="numeric"
              value={fieldValues.yCoordinate?.toString()}
              onChangeText={text => {
                setFieldValues({ ...fieldValues, yCoordinate: Number(text) });
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
                routes: [{ name: 'ListPlot' }],
              }),
            );
          });
        }}
        type="save"
      />
    </>
  );
}

export default AddEditPlot;
