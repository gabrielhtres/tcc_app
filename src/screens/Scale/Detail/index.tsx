import { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import api from '../../../utils/api';
import { useRoute } from '@react-navigation/native';
import DefaultDetailScreen from '../../Default/Detail';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import styles from './styles';
import Loader from '../../../components/Loader';

async function getImageSizeAsync(uri: string): Promise<number[]> {
  return new Promise((resolve, reject) => {
    Image.getSize(
      uri,
      (width, height) => {
        resolve([width, height]);
      },
      error => {
        reject(error);
      },
    );
  });
}

function DetailScale() {
  const [partsList, setPartsList] = useState<any[]>([]);
  const [imageSizes, setImageSizes] = useState<{ [key: string]: number[] }>({});
  const [loading, setLoading] = useState<boolean>(true);

  const theme = useTheme();
  const route = useRoute();

  const { viewId } = route.params as any;

  useEffect(() => {
    console.log('viewId', viewId);
    api.get(`/scale/part/list/${viewId}`).then(res => {
      setPartsList(res.data || []);
      setLoading(false);
    });
  }, [viewId]);

  useEffect(() => {
    const fetchImageSizes = async () => {
      const sizes: { [key: string]: number[] } = {};

      await Promise.all(
        partsList.map(async item => {
          try {
            const size = await getImageSizeAsync(
              `http://192.168.0.102:3030/file/${item.image}`,
            );
            sizes[item.image] = size;
          } catch (error) {
            console.error('Erro ao obter dimensões da imagem:', error);
          }
        }),
      );

      setImageSizes(sizes);
    };

    fetchImageSizes();
  }, [partsList]);

  return loading ? (
    <Loader />
  ) : (
    <DefaultDetailScreen
      fields={
        <GestureHandlerRootView>
          <ScrollView style={styles.containerScroll}>
            {partsList.map(item => {
              return (
                <View key={item.id} style={styles.container}>
                  <Text
                    style={{
                      ...styles.text,
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.primaryText,
                    }}>{`${item.percentage}%`}</Text>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{
                        uri: `http://192.168.0.102:3030/file/${item.image}`,
                      }}
                      style={{
                        ...styles.image,
                        width: imageSizes[item.image]?.[0],
                        height: imageSizes[item.image]?.[1],
                      }}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </GestureHandlerRootView>
      }
    />
  );
}

export default DetailScale;
