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

  const { isView, parentId, editId } = route.params as any;

  useEffect(() => {
    if (route.params) {
      if (!editId) {
        return;
      }

      api.get(`/plot/${editId}`).then(res => {
        setFieldValues(res.data);
      });
    }
  }, [route.params]);

  useEffect(() => {
    console.log(route.params);
  }, [route.params]);

  const submitData = async () => {
    try {
      if (route.params) {
        console.log('editId', editId);
        console.log('parentId', parentId);
        
        if (editId) {
          await api.put(`/plot/${editId}`, fieldValues);
          return;
        }

        if (parentId) {
          await api.post(`/plot/${parentId}`, fieldValues);
        }
      }
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
      <DefaultFloatButton
        isView={isView}
        onPress={() => {
          submitData().then(() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: 'ListAnalysis' }, { name: 'ListPlot', params: { parentId } }],
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
