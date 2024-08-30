import {api} from "../api";

export const count_total_busses = async () => {
    try{
        const response = await axios.get(`${api}/bus/total`);
        setTotalBusses(response.data);
    }catch(e){
        return setError(e.message);
    }
    finally{
        setLoading(false);
    }
}