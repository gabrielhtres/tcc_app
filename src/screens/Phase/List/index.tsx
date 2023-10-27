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

function ListPhase({ navigation }: Props) {
  const [phaseList, setPhaseList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();
  const plot = useSelector((state: any) => state.parent.parents.plot);
  // console.log('plot', plot);

  const getPhaseList = async () => {
    const res = await api.get(`/phase/list/${plot.id}`);
    setPhaseList(res.data || []);
    setLoading(false);
  };

  const handleRemove = () => {
    setLoading(true);
    getPhaseList();
  };

  useFocusEffect(
    useCallback(() => {
      validateUser(navigation);
      dispatch(setHeaderTitle(`Fases de ${plot.name}`));
      dispatch(setTabTitle('Fases'));
      getPhaseList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation]),
  );

  return loading ? (
    <Loader />
  ) : (
    <>
      <DefaultListScreen
        list={phaseList}
        addEditScreen="AddEditPhase"
        listScreen="ListPhase"
        apiRoute="/phase"
        navigation={navigation}
        childrenListScreen="ListDisease"
        parentName="phase"
        removeFunction={handleRemove}
      />
    </>
  );
}

export default ListPhase;
