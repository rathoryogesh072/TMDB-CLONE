import usePopular from "../hooks/usePopular";
import useTrending from "../hooks/useTrending"
import PopularHome from "./PopularHome";
import TrendingHome from "./TrendingHome";
// import Carousel from "./Carousel"

const Home = () => {
  useTrending();
  usePopular();
  return (
    <div>
        <div className=" relative flex justify-center">
            <img className="h-96 w-9/12" alt="search-background" src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/npD65vPa4vvn1ZHpp3o05A5vdKT.jpg"/>
            <div className="absolute font-bold text-5xl text-white top-20  ">Welcome.</div>
            <div className="absolute font-bold text-2xl text-white top-32">Millions of movies,TV Shows and people to discover.Explore now</div>
            <div className="absolute top-48 left-[250px] ">
                <input className="w-[60rem] rounded-l-full"/>
                <button className="w-20 text-white bg-blue-950 rounded-r-full">Search</button>
            </div>
        </div>
        <div>
          <TrendingHome/>
          <PopularHome/>
        </div>
    </div>
  )
}

export default Home