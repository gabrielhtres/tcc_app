import api from "./api";
import { getStorageData } from "./storageService";

async function validateUser(navigation: any) {
    api.post('/validate').catch(() => {
        // const refreshToken = getStorageData('jwtRefreshToken');

        // if (!refreshToken) {
            navigation.replace('SignIn');
        //     return;
        // }

        

    });
}

export default validateUser;