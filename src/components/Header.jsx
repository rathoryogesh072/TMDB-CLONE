import { useState } from "react"
import Popup from "./Popup";

const Header = () => {
  const [popupState,setPopupState]=useState({
    movies:false,
    tvShows:false,
    people:false,
  });
  const [popupPosition,setPopupPosition]=useState({top:0,left:0});
  const handleMouseEnter=(e,hoveredElement)=>{
    const elementRect=e.target.getBoundingClientRect();
    setPopupPosition({
      top:elementRect.bottom,
      left:elementRect.left
    })
    setPopupState({...popupState,[hoveredElement]:true});
  }
  const handleMouseLeave=(hoveredElement)=>{
    setPopupState({...popupState,[hoveredElement]:false});
  }
  const handlePopupMouseEnter=(hoveredPopup)=>{
    setPopupState({...popupState,[hoveredPopup]:true});
  }
  const handlePopupMouseLeave=(hoveredPopup)=>{
    setPopupState({...popupState,[hoveredPopup]:false})
  }
  return (
    <div>
      <div className="bg-blue-900 h-16 flex">
        <img className="w-52 h-12 pl-32 pt-3" alt="tmdb-logo" src="https://th.bing.com/th/id/R.956586e26926adcee4b411fa2642436f?rik=zd9fOyCyxfZapw&riu=http%3a%2f%2fwww.szquanli.com%2fuploads%2fallimg%2f200415%2f2-200415092044.png&ehk=NASYMdGiVN03%2fHTcTs0GDjz%2fbj32PrYzZz4hry5Zbcc%3d&risl=&pid=ImgRaw&r=0"/>
        <ul className="flex">
            <li className="mx-8 my-4 text-white font-bold cursor-pointer" onMouseEnter={(e)=>handleMouseEnter(e,'movies')} onMouseLeave={()=>handleMouseLeave('movies')} >Movies</li>
            <li className="mx-8 my-4 text-white font-bold cursor-pointer" onMouseEnter={(e)=>handleMouseEnter(e,'tvShows')} onMouseLeave={()=>handleMouseLeave('tvShows')}>TV Shows</li>
            <li className="mx-8 my-4 text-white font-bold cursor-pointer" onMouseEnter={(e)=>handleMouseEnter(e,'people')} onMouseLeave={()=>handleMouseLeave('people')}> People</li>
        </ul>
      </div>    
        { popupState.movies && (<Popup
        top={popupPosition.top}
        left={popupPosition.left}
        content={["Popular","Now Playing","UpComing","Top Rated"]}
        popEnter={()=>handlePopupMouseEnter('movies')}
        popupLeave={()=>handlePopupMouseLeave('movies')}/>)}
        { popupState.tvShows && (<Popup
        top={popupPosition.top}
        left={popupPosition.left}
        content={["Popular","Airing Today","On Air","Top Rated"]}
        popEnter={()=>handlePopupMouseEnter('tvShows')}
        popupLeave={()=>handlePopupMouseLeave('tvShows')}/>)}
        { popupState.people && (<Popup
        top={popupPosition.top}
        left={popupPosition.left}
        content={["Popular People"]}
        popEnter={()=>handlePopupMouseEnter('people')}
        popupLeave={()=>handlePopupMouseLeave('people')}/>)}
    </div>
  )
}

export default Header