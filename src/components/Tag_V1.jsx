import React, {useEffect, useState} from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;


const Random = () => { 
    const [tag, setTag] = useState('dog')
    const [gif, setGif] = useState('');
    useEffect(() => { 
        fetchGif(tag)
    },[tag]);
    const fetchGif = async (tag) => {
            const url = `https://api.giphy.com/v1/gifs/random?api_key=LM6SOAW0MOpIxCpGZP2qDh9TMNEJzI2q&tag=${tag}`;
            const { data } = await axios.get(url)  //promise 
            const imageSrc = data.data.images.downsized_large.url;
            setGif(imageSrc)
        }
    const handleClick = () => {
        fetchGif(tag);
    }

    return (
        <div className='container'>
            <h1>Random {tag} Tag</h1>
            <img src={gif} alt="Random Gif" width='500'/>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value) }/>
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    )
}

export default Random;