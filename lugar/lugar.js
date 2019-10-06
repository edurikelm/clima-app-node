const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodedURL = encodeURI(dir);
    // console.log(encodedURL);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {'x-rapidapi-key': '8fe27c50a5mshd06284c5ab4906ap169bcfjsnbca55ce65656'}
      });
    
    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}