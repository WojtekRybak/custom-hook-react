import React from 'react';
import useGif from '../useGif'


const Tag = () => {
    const {gif, fetchGif} = useGif();
 
   return (
        <div className='container'>
            <h1>Random Tag</h1>
            <img src={gif} alt="Random Gif" width='500'/>
            <button onClick={fetchGif}>CLICK FOR NEW</button>
        </div>
    )
}

export default Tag;