
const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=da9431f5160f2ab450e00fbf7d37402c&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}