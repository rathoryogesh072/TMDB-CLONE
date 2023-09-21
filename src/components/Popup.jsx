const Popup = ({top,left,content,popEnter,popupLeave}) => {
  return (
    <div 
            onMouseEnter={popEnter} 
            onMouseLeave={popupLeave}
            className="cursor-pointer"
            style={{
            position: 'absolute',
            top: top + 'px',
            left: left + 'px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '10px',
          }}
          >
          <ul className="pl-8">
            {content.map((item,index)=><li key={index}>{item}</li>)}
          </ul>
        </div>
  )
}

export default Popup