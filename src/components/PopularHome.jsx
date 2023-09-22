import { useState } from "react";
import Carousel from "./Carousel";
import { useSelector } from "react-redux";

const PopularHome = () => {
    const [dataCategory,setDataCategory]=useState('movie');
    const moviePopular=useSelector((store)=>store.popular.moviePopular);
    const tvPopular=useSelector((store)=>store.popular.tvPopular);
  return (
    <div>
        <div className="flex mx-40 my-10 justify-between">
            <div className="font-bold text-xl">Popular</div>
            <div className="font-bold text-xl border-2 border-blue-900 rounded-full ">
                <button className={`mx-2 ${
              dataCategory==='movie' ? 'bg-blue-900 text-white' : ''
            }`}                
                onClick={()=>setDataCategory('movie')}>Movies</button>
                <button className={`mx-2 ${
              dataCategory==='tv' ? 'bg-blue-900 text-white' : ''
            }`}  
                onClick={()=>setDataCategory('tv')}>TV Shows</button>
            </div> 
        </div>
        {dataCategory==='movie'?<Carousel displayData={moviePopular}/>:<Carousel displayData={tvPopular}/>}
    </div>
  )
}

export default PopularHome