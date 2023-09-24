import api from '../../../utils/api';
import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';
import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import DefaultDetailScreen from '../../Default/Detail';

import styles from './styles';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

// interface Props {
//   navigation: any;
// }

interface RouteProps {
  viewId: number;
}

interface FungicideType {
  id: number;
  tradeMark: string;
  patentHolder: string;
  toxicologyClassification: string;
  ambientalClassification: string;
  registerNumber: string;
  cnpj: string;
  actionMethod: string;
  applicationMethod: string;
  compatibility: string;
  packaging: string;
  activeIngredients: {
    name: string;
    concentration: string;
  }[];
}

function DetailFungicide() {
  const [fungicide, setFungicide] = useState<FungicideType>();
  const [loading, setLoading] = useState<boolean>(true);

  //   const dispatch = useDispatch();
  const route = useRoute();

  //   const defaultDisease = useSelector(
  //     (state: any) => state.parent.parents.disease,
  //   );

  const { viewId } = route.params as RouteProps;

  useEffect(() => {
    if (!viewId) {
      return;
    }

    console.log('veio até aq');

    api
      .get(`/fungicide/${viewId}`)
      .then(res => {
        console.log('res', res.data);
        setFungicide(res.data);
      })
      .finally(() => setLoading(false));
  }, [viewId]);

  //   useFocusEffect(
  //     useCallback(() => {
  //       validateUser(navigation);
  //       dispatch(
  //         setHeaderTitle(`Fungicidas Recomendados para ${defaultDisease.name}`),
  //       );
  //       dispatch(setTabTitle('Fungicidas'));
  //       getFungicideList();
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  //     }, [navigation]),
  //   );

  return loading ? (
    <Loader />
  ) : (
    <DefaultDetailScreen
      fields={
        <GestureHandlerRootView>
          <ScrollView style={styles.container}>
            <Text style={styles.title}>Marca Comercial</Text>
            <Text style={styles.text}>{fungicide?.tradeMark || '---'}</Text>

            <Text style={styles.title}>Titular do Registro</Text>
            <Text style={styles.text}>{fungicide?.patentHolder || '---'}</Text>

            <Text style={styles.title}>CNPJ do Registro</Text>
            <Text style={styles.text}>{fungicide?.cnpj || '---'}</Text>

            <Text style={styles.title}>Número do Registro</Text>
            <Text style={styles.text}>
              {fungicide?.registerNumber || '---'}
            </Text>

            <Text style={styles.title}>Classificação Toxicológica</Text>
            <Text style={styles.text}>
              {fungicide?.toxicologyClassification || '---'}
            </Text>

            <Text style={styles.title}>Classificação Ambiental</Text>
            <Text style={styles.text}>
              {fungicide?.ambientalClassification || '---'}
            </Text>

            <Text style={styles.title}>Modo de Ação</Text>
            <Text style={styles.text}>{fungicide?.actionMethod || '---'}</Text>

            <Text style={styles.title}>Método de Aplicação</Text>
            <Text style={styles.text}>
              {fungicide?.applicationMethod || '---'}
            </Text>

            <Text style={styles.title}>Compatibilidade</Text>
            <Text style={styles.text}>{fungicide?.compatibility || '---'}</Text>

            <Text style={styles.title}>Ingredientes Ativos</Text>
            <Text style={styles.text}>
              {fungicide?.activeIngredients.map(item => {
                return (
                  <>
                    <Text
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{ fontWeight: 'bold' }}>{`${item.name}:`}</Text>
                    <Text>{`${item.concentration}\n`}</Text>
                  </>
                );
              }) || '---'}
            </Text>

            <Text style={styles.title}>Embalagem(ens)</Text>
            <Text style={styles.text}>{fungicide?.packaging || '---'}</Text>
          </ScrollView>
        </GestureHandlerRootView>
      }
    />
  );
}

export default DetailFungicide;
