import MovieCard from "./MovieCard";


const Carousel = ({displayData}) => {
  // console.log(displayData);
  if(displayData===null){
    return;
  }
  return (
    <div className="mx-40 flex overflow-x-scroll mb-10">
      <div className="flex">
        {displayData.map((item)=><MovieCard key={item.id} poster={item.poster_path} name={item.title || item.name} date={item.release_date || item.first_air_date} rating={item.vote_average}/>)}
      </div>
    </div>
  )
}

export default Carousel