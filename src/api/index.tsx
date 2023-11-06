import axios from "axios";

const URL = "https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation"

const options = {
    // params: {
    //     bl_latitude: '11.847676',
    //     tr_latitude: '12.838442',
    //     bl_longitude: '109.095887',
    //     tr_longitude: '109.149359'
    // },
    params: {
        query: 'new',
        languagecode: 'en-us'
    },
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
};

export const getPlaceInfo = async () => {
    try {
        const data = await axios.get(URL, options);
        debugger
        return data;
    } catch (e) {
        console.error(e)
    }
}
