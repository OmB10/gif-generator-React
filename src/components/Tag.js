import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {

    const [tag, setTag] = useState("")

    const { gif, loading, fetchData } = useGif(tag);


    return (
        <div className='w-1/2 bg-blue-300 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-3 mb-4'>
            <h1 className='text-2xl underline font-bold uppercase mt-2'>Random {tag} Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} alt="gif" />)
            }

            <input
                type="text"
                className='w-9/12 bg-white rounded-lg text-lg mb-1 text-center'
                onChange={(event) => setTag(event.target.value)}
                placeholder='Type here...'
            />


            <button onClick={() => fetchData(tag)}
                className='w-9/12 bg-yellow-100 rounded-lg text-lg mb-5'>Generate</button>
        </div>
    )
}

export default Tag