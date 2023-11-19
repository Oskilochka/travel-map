import axios from "axios";

export const getMarkers = async () => {
    try {
        const data = await axios.get('/markers');
        debugger
        return data;
    } catch (e) {
        console.error(e)
    }
}
