import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359'
    },
    headers: {
        'X-RapidAPI-Key': 'a3075a8e65msh5caab5ce060a0d0p196870jsn7bc11cde41f1',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};
//
// axios.request(options).then((response) => {
//     console.log(response.data)
// }).catch((e) => console.error(e))

export const getPlaceInfo = async () => {
    try {
        const {data: {data}} = await axios.get(URL, options);
        return data;
    } catch (e) {
        console.error(e)
    }
}
