import DefaultAddEditScreen from '../../Default/AddEdit';
import { TextInput } from 'react-native-paper';
import { useEffect, useState } from 'react';
import {
  CommonActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import DefaultFloatButton from '../../../components/DefaultFloatButton';
import api from '../../../utils/api';
import styles from './styles';
import { useSelector } from 'react-redux';

interface FormType {
  name: string;
  description: string;
  xCoordinate: string;
  yCoordinate: string;
}

function AddEditPlot() {
  const [fieldValues, setFieldValues] = useState<FormType>({
    name: '',
    description: '',
    xCoordinate: '',
    yCoordinate: '',
  });

  const route = useRoute();
  const navigation = useNavigation();
  const analysis = useSelector((state: any) => state.parent.parents.analysis);

  const { isView, editId } = route.params as any;

  useEffect(() => {
    console.log('editId', editId);
    if (!editId) {
      return;
    }

    api.get(`/plot/${editId}`).then(res => {
      setFieldValues(res.data);
    });
  }, [editId]);

  const submitData = async () => {
    try {
      if (editId) {
        await api.put(`/plot/${editId}`, fieldValues);
        return;
      }

      if (analysis) {
        await api.post(`/plot/${analysis.id}`, fieldValues);
      }
    } catch (err: any) {
      console.log(err.response.data.message);
    }
  };

  return (
    <>
      <DefaultAddEditScreen
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
              value={fieldValues.xCoordinate?.toString()}
              onChangeText={text => {
                setFieldValues({ ...fieldValues, xCoordinate: text });
              }}
            />
            <TextInput
              editable={!isView}
              mode="outlined"
              label="Coordenada Y"
              style={styles.input}
              value={fieldValues.yCoordinate?.toString()}
              onChangeText={text => {
                setFieldValues({ ...fieldValues, yCoordinate: text });
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
                routes: [{ name: 'ListAnalysis' }, { name: 'ListPlot' }],
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
