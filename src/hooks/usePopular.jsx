import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import { addMoviePopular, addtvPopular } from '../utils/popularSlice';

const usePopular = () => {
    const dispatch=useDispatch();
    const moviePopular=useSelector((store)=>store.popular.moviePopular);
    const tvPopular=useSelector((store)=>store.popular.tvPopular);

    const getPopular=async ()=>{
        const data=await fetch(
            'https://api.themoviedb.org/3/movie/popular',
            API_OPTIONS
        )
        const json=await data.json();
        dispatch(addMoviePopular(json.results));
        const data1=await fetch(
            'https://api.themoviedb.org/3/tv/popular',
            API_OPTIONS
        )
        const json1=await data1.json();
        dispatch(addtvPopular(json1.results));

    }
    useEffect(()=>{
        if(moviePopular===null && tvPopular===null){
            getPopular()
        }
    },[])
}

export default usePopular