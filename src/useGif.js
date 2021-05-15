import {useEffect, useState} from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;


const useGif = (tag) => { 
    const [gif, setGif] = useState('');

    useEffect(() => { 
        fetchGif(tag)
    },[tag]);

    const fetchGif = async (tag) => {
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
            const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url)  //promise 
            const imageSrc = data.data.images.downsized_large.url;
            setGif(imageSrc)
        }

    return { gif, fetchGif }

}

export default useGif;