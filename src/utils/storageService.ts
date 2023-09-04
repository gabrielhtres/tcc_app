import AsyncStorage from '@react-native-async-storage/async-storage';

const saveStorageData = async (key: string, data: string) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.error('Erro ao salvar o dado no storafe:', error);
  }
};

const getStorageData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    // console.log('data', data)
    return data;
  } catch (error) {
    console.error('Erro ao recuperar o dado do storage:', error);
    return null;
  }
};

const removeStorageData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Erro ao remover o dado do storage:', error);
  }
};

export { saveStorageData, getStorageData, removeStorageData };