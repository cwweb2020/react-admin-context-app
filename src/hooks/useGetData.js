import { useEffect, useState } from 'react';
import  AxiosInstance  from '../axios/index';



const useGetData = (category) => {
    const [data, setData] =useState([]);
    
    const getData = async () => {
        try {
            const res = await AxiosInstance.get(`${category}`);
            setData(res.data);
        } catch (error) {
            console.log(error); 
        }
    }


    useEffect(() => {
        getData();
        console.log(data);
    }, [category]);

    return data;
    
}

export default useGetData;

