import api from '../../../utils/api';
import { useCallback, useState } from 'react';
import Loader from '../../../components/Loader';
import validateUser from '../../../utils/validateUser';
import { useDispatch } from 'react-redux';
import { setHeaderTitle } from '../../../store/slices/headerSlice';
import { setTabTitle } from '../../../store/slices/tabSlice';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import DefaultSimpleListScreen from '../../Default/SimpleList';

function ListScale() {
  const [scaleList, setScaleList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getFungicideList = async () => {
    const res = await api.get('/scale/list');
    setScaleList(res.data || []);
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      validateUser(navigation);
      dispatch(setHeaderTitle('Listagem de Escalas'));
      dispatch(setTabTitle('Escalas'));
      getFungicideList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation]),
  );

  return loading ? (
    <Loader />
  ) : (
    <>
      <DefaultSimpleListScreen list={scaleList} viewScreen="DetailScale" />
    </>
  );
}

export default ListScale;
