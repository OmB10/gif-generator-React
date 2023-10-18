import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {

    const { gif, loading, fetchData } = useGif();

    return (
        <div className='w-1/2 bg-green-300 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-3'>
            <h1 className='text-2xl underline font-bold uppercase mt-2'>A Random Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} alt="gif" />)
            }

            <button onClick={() => fetchData()}
                className='w-9/12 bg-yellow-100 rounded-lg text-lg mb-5'>Generate</button>
        </div>
    )
}

export default Random