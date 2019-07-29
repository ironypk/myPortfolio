import requests from 'admin/requests';

export const getAbsoluteImgPath = imgPath => {
    const baseUrl = requests.defaults.baseURL;
    return `${baseUrl}/${imgPath}` 
}