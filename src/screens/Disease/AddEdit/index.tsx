import DefaultAddEditScreen from '../../Default/AddEdit';
import { useEffect, useState } from 'react';
import { CommonActions, useRoute } from '@react-navigation/native';
import DefaultFloatButton from '../../../components/DefaultFloatButton';
import api from '../../../utils/api';
import { useSelector } from 'react-redux';
import SelectDropdown from 'react-native-select-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { View, ScrollView } from 'react-native';
import { Modal, Portal, RadioButton, Text, useTheme } from 'react-native-paper';
import { MyTheme } from '../../../../App';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { Slider } from '@miblanchard/react-native-slider';

import styles from './styles';

interface DefaultDiseaseType {
  id: number;
  classification: string;
  culture: string;
  scientificName: string;
  commonNames: string;
  author: string;
  description: string;
  symptoms: string;
  bioecology: string;
  control: string;
}

interface Props {
  navigation: any;
}

interface FormType {
  defaultDiseaseId?: number;
  percentage: number;
  hasIncidence: boolean;
}

function AddEditDisease({ navigation }: Props) {
  const [defaultDiseaseList, setDefaultDiseaseList] = useState<
    DefaultDiseaseType[]
  >([]);
  const [defaultDiseaseSelected, setDefaultDiseaseSelected] =
    useState<DefaultDiseaseType>();
  const [showInfo, setShowInfo] = useState<boolean>(false);
  // const [percentage, setPercentage] = useState<number>(0);
  // const [hasIncidence, setHasIncidence] = useState<boolean>(false);
  const [fieldValues, setFieldValues] = useState<FormType>({
    percentage: 0,
    hasIncidence: false,
  });

  const route = useRoute();
  const phase = useSelector((state: any) => state.parent.parents.phase);
  const theme: MyTheme = useTheme();

  const { isView, editId } = route.params as any;

  useEffect(() => {
    console.log('entrou nesse ue');

    if (!editId) {
      return;
    }

    console.log('editId', editId);

    api.get(`/disease/${editId}`).then(res => {
      console.log('data get', res.data.hasIncidence);
      const defaultDisease = defaultDiseaseList.find(item => {
        return item.id === res.data.defaultDiseaseId;
      });

      if (!defaultDisease) {
        return;
      }

      setFieldValues(res.data);
      setDefaultDiseaseSelected(defaultDisease);
    });
  }, [defaultDiseaseList, editId]);

  useEffect(() => {
    api.get('/disease/list-select').then(res => {
      // console.log(res);
      setDefaultDiseaseList(res.data);
    });
  }, []);

  const submitData = async () => {
    try {
      if (editId) {
        await api.put(`/disease/${editId}`, {
          ...fieldValues,
          defaultDiseaseId: defaultDiseaseSelected?.id,
        });
        return;
      }

      if (phase) {
        await api.post(`/disease/${phase.id}`, {
          ...fieldValues,
          defaultDiseaseId: defaultDiseaseSelected?.id,
        });
      }
    } catch (err: any) {
      console.log(err.response.data.message);
    }
  };

  return (
    <Portal>
      <DefaultAddEditScreen
        fields={
          <>
            <Text style={styles.inputLabel}>Doença</Text>
            <View style={styles.inputContainer}>
              <SelectDropdown
                data={defaultDiseaseList}
                defaultValue={defaultDiseaseSelected}
                defaultButtonText="Selecione uma doença"
                onSelect={selectedItem =>
                  setDefaultDiseaseSelected(selectedItem)
                }
                rowTextForSelection={item => item.commonNames}
                buttonTextAfterSelection={item => item.commonNames}
                buttonStyle={styles.input}
                renderDropdownIcon={() =>
                  !isView ? <FontAwesomeIcon icon={faCaretDown} /> : null
                }
                dropdownIconPosition="right"
                disabled={isView}
              />
              <GestureHandlerRootView>
                <TouchableOpacity
                  disabled={!defaultDiseaseSelected || isView}
                  onPress={() => {
                    setShowInfo(true);
                    console.log('clicado');
                  }}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    ...styles.inputIcon,
                    backgroundColor:
                      defaultDiseaseSelected && !isView
                        ? theme.colors.secondary
                        : '#d1d1d1',
                  }}>
                  <FontAwesomeIcon icon={faQuestion} size={15} color="white" />
                </TouchableOpacity>
              </GestureHandlerRootView>
            </View>
            <Text style={styles.inputLabel}>Possui Incidência?</Text>
            <RadioButton.Group
              onValueChange={newValue => {
                setFieldValues({
                  ...fieldValues,
                  hasIncidence: newValue === 'yes' ? true : false,
                  percentage: 0,
                });
              }}
              value={fieldValues.hasIncidence ? 'yes' : 'no'}>
              <View
                style={{
                  ...styles.radioContainer,
                  ...styles.inputContainerDefault,
                }}>
                <View style={styles.radioButton}>
                  <RadioButton value="yes" disabled={isView} />
                  <Text style={styles.radioLabelText}>Sim</Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton value="no" disabled={isView} />
                  <Text style={styles.radioLabelText}>Não</Text>
                </View>
              </View>
            </RadioButton.Group>
            {fieldValues.hasIncidence && (
              <>
                <Text style={styles.inputLabel}>
                  Percentual de Contaminação
                </Text>
                <Slider
                  disabled={isView}
                  minimumValue={0}
                  maximumValue={100}
                  minimumTrackTintColor={theme.colors.tertiary}
                  maximumTrackTintColor="#d1d1d1"
                  thumbTintColor={theme.colors.primary}
                  value={fieldValues.percentage}
                  // onSlidingComplete={value => setPercentage(value[0])}
                  onValueChange={value =>
                    setFieldValues({ ...fieldValues, percentage: value[0] })
                  }
                  step={1}
                  renderThumbComponent={() => (
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        ...styles.percentageThumb,
                        backgroundColor: !isView
                          ? theme.colors.primary
                          : '#d1d1d1',
                      }}>
                      <Text style={styles.textThumb}>
                        {`${fieldValues.percentage}%`}
                      </Text>
                    </View>
                  )}
                  containerStyle={{
                    ...styles.percentageContainer,
                    ...styles.inputContainerDefault,
                  }}
                />
              </>
            )}
          </>
        }
      />
      <DefaultFloatButton
        isView={isView}
        onPress={() => {
          submitData().then(() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 3,
                routes: [
                  { name: 'ListAnalysis' },
                  { name: 'ListPlot' },
                  { name: 'ListPhase' },
                  { name: 'ListDisease' },
                ],
              }),
            );
          });
        }}
        type="save"
      />
      <Modal
        visible={showInfo}
        style={styles.modalContainer}
        onDismiss={() => setShowInfo(false)}
        contentContainerStyle={styles.modalInfo}>
        <ScrollView>
          <Text style={styles.dataContainer.title}>Nome Científico</Text>
          <Text style={styles.dataContainer.text}>
            {defaultDiseaseSelected?.scientificName || '---'}
          </Text>

          <Text style={styles.dataContainer.title}>Nomes Comuns</Text>
          <Text style={styles.dataContainer.text}>
            {defaultDiseaseSelected?.commonNames || '---'}
          </Text>

          <Text style={styles.dataContainer.title}>Classificação</Text>
          <Text style={styles.dataContainer.text}>
            {defaultDiseaseSelected?.classification || '---'}
          </Text>

          <Text style={styles.dataContainer.title}>Cultura</Text>
          <Text style={styles.dataContainer.text}>
            {defaultDiseaseSelected?.culture || '---'}
          </Text>

          <Text style={styles.dataContainer.title}>Descrição</Text>
          <Text style={styles.dataContainer.text}>
            {defaultDiseaseSelected?.description || '---'}
          </Text>

          <Text style={styles.dataContainer.title}>Bioecologia</Text>
          <Text style={styles.dataContainer.text}>
            {defaultDiseaseSelected?.bioecology || '---'}
          </Text>

          <Text style={styles.dataContainer.title}>Sintomas</Text>
          <Text style={styles.dataContainer.text}>
            {defaultDiseaseSelected?.symptoms || '---'}
          </Text>
        </ScrollView>
      </Modal>
    </Portal>
  );
}

export default AddEditDisease;
