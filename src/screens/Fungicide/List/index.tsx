import api from '../../../utils/api';
import { useCallback, useState } from 'react';
import Loader from '../../../components/Loader';
import validateUser from '../../../utils/validateUser';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderTitle } from '../../../store/slices/headerSlice';
import { setTabTitle } from '../../../store/slices/tabSlice';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import DefaultSimpleListScreen from '../../Default/SimpleList';

function ListFungicide() {
  const [fungicideList, setFungicideList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const defaultDisease = useSelector(
    (state: any) => state.parent.parents.disease,
  );

  const getFungicideList = async () => {
    // console.log('id', defaultDisease.id);
    const res = await api.get(`/fungicide/list-select/${defaultDisease.id}`);
    // console.log('res', res.data[0]);
    setFungicideList(res.data || []);
    setLoading(false);
  };

  // const handleRemove = () => {
  //   setLoading(true);
  //   getFungicideList();
  // };

  useFocusEffect(
    useCallback(() => {
      validateUser(navigation);
      dispatch(
        setHeaderTitle(`Fungicidas Recomendados para ${defaultDisease.name}`),
      );
      dispatch(setTabTitle('Fungicidas'));
      getFungicideList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation]),
  );

  return loading ? (
    <Loader />
  ) : (
    <>
      <DefaultSimpleListScreen
        list={fungicideList.map(item => {
          // console.log('item', item.id, item.tradeMark);
          return {
            ...item,
            name: item.tradeMark,
          };
        })}
        parentName="disease"
        viewScreen="DetailFungicide"
      />
    </>
  );
}

export default ListFungicide;
