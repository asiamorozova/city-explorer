const app = express();

let latlngs;

const formatLocationResponse = locationItem => {
  const {
    geometry: {
      location: { lat, lng }
    },
    formatted_address
  } = locationItem;

  return {
    formatted_query: formatted_address,
    latitude: lat,
    longitude: lng
  };
};

const getWeatherResponse = async (lat, long) => {
    const weatherData = await superagent.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${long}`);

    const actualWeatherData = JSON.(weatherData.txt);
    const dailyArray = actualWeatherData.daly,data;
    console.log(weatherItem);
    return {
        forecast: weatherItem.summary,
        time: new Date(weatherItem * 1000).toDateString(),
    };
};
return mundgedArray;

const geoJSON = require('./data.geo.json');

app.get('/location', async (req, res) => {
    const searchQuery = req.query.search;

    const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

    const locationItem = await superagent.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}&key=${GEOCODE_API_KEY}`);

    const actualItem = JSON.parse(locaitonItem.text).results[0];
    const respocne = formatLocationResponse(actualItem);

    latlangs = response;
     
    res.json(response);
});

app.get('/weather', async (req, res)=> {
    const weatherObject = await getWeatherResponse(latlngs.latitude, latlangs.longitude);
    res.json(weatherObject);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listen on port', port);
});
