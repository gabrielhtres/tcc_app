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
// import styles from './styles';
import { useSelector } from 'react-redux';

interface FormType {
  name: string;
}

function AddEditPhase() {
  const [fieldValues, setFieldValues] = useState<FormType>({
    name: '',
  });

  const route = useRoute();
  const navigation = useNavigation();
  const plot = useSelector((state: any) => state.parent.parents.plot);

  const { isView, editId } = route.params as any;

  useEffect(() => {
    if (!editId) {
      return;
    }

    api.get(`/phase/${editId}`).then(res => {
      setFieldValues(res.data);
    });
  }, [editId]);

  const submitData = async () => {
    try {
      if (editId) {
        await api.put(`/phase/${editId}`, fieldValues);
        return;
      }

      if (plot) {
        await api.post(`/phase/${plot.id}`, fieldValues);
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
              // style={styles.input}
              value={fieldValues.name}
              onChangeText={text => {
                setFieldValues({ ...fieldValues, name: text });
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
                index: 2,
                routes: [
                  { name: 'ListAnalysis' },
                  { name: 'ListPlot' },
                  { name: 'ListPhase' },
                ],
              }),
            );
          });
        }}
        type="save"
      />
    </>
  );
}

export default AddEditPhase;
