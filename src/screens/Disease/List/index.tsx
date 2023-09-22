import DefaultListScreen from '../../Default/List';
import api from '../../../utils/api';
import { useCallback, useState } from 'react';
import Loader from '../../../components/Loader';
import validateUser from '../../../utils/validateUser';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderTitle } from '../../../store/slices/headerSlice';
import { setTabTitle } from '../../../store/slices/tabSlice';
import { useFocusEffect } from '@react-navigation/native';

interface Props {
  navigation: any;
}

function ListDisease({ navigation }: Props) {
  const [diseaseList, setDiseaseList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();
  const phase = useSelector((state: any) => state.parent.parents.phase);
  console.log('phase', phase);

  const getDiseaseList = async () => {
    const res = await api.get(`/disease/list/${phase.id}`);
    setDiseaseList(res.data || []);
    setLoading(false);
  };

  const handleRemove = () => {
    setLoading(true);
    getDiseaseList();
  };

  useFocusEffect(
    useCallback(() => {
      validateUser(navigation);
      dispatch(setHeaderTitle(`Doenças de ${phase.name}`));
      dispatch(setTabTitle('Doenças'));
      getDiseaseList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation]),
  );

  return loading ? (
    <Loader />
  ) : (
    <>
      <DefaultListScreen
        list={diseaseList.map(item => {
          return {
            ...item,
            name: item.defaultDisease.commonNames,
            defaultId: item.defaultDisease.id,
          };
        })}
        addEditScreen="AddEditDisease"
        listScreen="ListDisease"
        apiRoute="/disease"
        navigation={navigation}
        childrenListScreen="ListFungicide"
        parentName="disease"
        removeFunction={handleRemove}
        fungicideList
      />
    </>
  );
}

export default ListDisease;
