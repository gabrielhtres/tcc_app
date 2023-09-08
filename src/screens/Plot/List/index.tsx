import DefaultListScreen from '../../Default/List';
import DefaultFloatButton from '../../../components/DefaultFloatButton';
import api from '../../../utils/api';
import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';
import validateUser from '../../../utils/validateUser';
import { useRoute } from '@react-navigation/native';
// import validateUser from '../../../utils/validateUser';

interface RouteParams {
  headerName: string;
  analysisId: number;
}

interface Props {
  navigation: any;
}

function ListPlot({ navigation }: Props) {
  const [plotList, setPlotList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const route = useRoute();

  const { headerName, analysisId } = route?.params as RouteParams;

  const getPlotList = async () => {
    const res = await api.get(`/plot/list/${analysisId}`);

    setPlotList(res.data || []);
    setLoading(false);
  };

  useEffect(() => {
    validateUser(navigation);
    getPlotList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <DefaultListScreen
        menuTitle={`Talhões de ${headerName || ''}`}
        screenTitle="Talhões"
        list={plotList}
        screen="AddEditPlot"
        routeDelete="/plot"
        navigation={navigation}
      />
      <DefaultFloatButton
        onPress={() => navigation.navigate('AddEditPlot', { isView: false })}
        type="add"
      />
    </>
  );
}

export default ListPlot;
