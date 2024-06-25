import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@tasks', jsonValue);
    } catch (e) {
        console.error('Error storing data: ', e);
    }
};

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@tasks');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.error('Error getting item:', e);
        return null;
    }
};