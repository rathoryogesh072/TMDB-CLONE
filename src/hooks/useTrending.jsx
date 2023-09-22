import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { adddayTrending, addweekTrending } from "../utils/trendingSlice";


const useTrending = () => {
  const dispatch=useDispatch();
  const dayTrending=useSelector((store)=>store.trending.dayTrending);
  const weekTrending=useSelector((store)=>store.trending.weekTrending);

  const getTrending=async ()=>{
    const data=await fetch(
    `https://api.themoviedb.org/3/trending/all/day`,
    API_OPTIONS
    );
    const json=await data.json();
    dispatch(adddayTrending(json.results))
    const data2=await fetch(
      `https://api.themoviedb.org/3/trending/all/week`,
      API_OPTIONS
      );
      const json2=await data2.json();
      dispatch(addweekTrending(json2.results));
  }
  useEffect(()=>{
    if(dayTrending===null && weekTrending===null){
    getTrending()
    }
  },[]);
}

export default useTrending