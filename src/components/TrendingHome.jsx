import { useState } from "react";
import Carousel from "./Carousel";
import { useSelector } from "react-redux";

const TrendingHome = () => {
    const [dataCategory,setDataCategory]=useState('day');
    const dayTrending=useSelector((store)=>store.trending.dayTrending);
    const weekTrending=useSelector((store)=>store.trending.weekTrending);
  return (
    <div>
        <div className="flex mx-40 my-10 justify-between">
            <div className="font-bold text-xl">Trending</div>
            <div className="font-bold text-xl border-2 border-blue-900 rounded-full ">
                <button className={`mx-2 ${
              dataCategory==='day' ? 'bg-blue-900 text-white' : ''
            }`}                
                onClick={()=>setDataCategory('day')}>Today</button>
                <button className={`mx-2 ${
              dataCategory==='week' ? 'bg-blue-900 text-white' : ''
            }`}  
                onClick={()=>setDataCategory('week')}>This Week</button>
            </div> 
        </div>
        {dataCategory==='day'?<Carousel displayData={dayTrending}/>:<Carousel displayData={weekTrending}/>}
    </div>
  )
}

export default TrendingHome