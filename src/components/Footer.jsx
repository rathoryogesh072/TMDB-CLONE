const Footer = () => {
  return (
    <div className="bg-blue-800 h-60 flex text-white justify-center p-9">
        <div className="mx-5">
            <h1 className="font-bold">THE BASICS</h1>
            <ul className="py-2">
                <li>About TMDB</li>
                <li>Contact Us</li>
                <li> Support Forums</li>
                <li> API</li>
                <li>System Status</li>
            </ul>
        </div>
        <div className="mx-5">
            <h1 className="font-bold">GET INVOLVED</h1>
            <ul className="py-2">
                <li>Contribution Bible</li>
                <li>Add New Movie</li>
                <li>Add New Tv Show</li>
            </ul>
        </div>
        <div className="mx-5">
            <h1 className="font-bold">Community</h1>
            <ul className="py-2">
                <li>GuideLine</li>
                <li>Discussion</li>
                <li>LeaderBoard</li>
                <li>Twitter</li>
            </ul>
        </div>
        <div className="mx-5">
            <h1 className="font-bold">Legal</h1>
            <ul className="py-2">
                <li>Terms of Use</li>
                <li>API TERMS OF USE</li>
                <li>PRivacy Policy</li>
            </ul>
        </div>

    </div>
  )
}

export default Footer