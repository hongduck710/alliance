
import { Link } from "react-router-dom";
import videos from "../videos.json";
import arrowIcon from "../img/arrow-right-solid.svg"

const VideoListings = () => {
    return (
        <section className="w1400 video-class">
            <h2>Nos cours en ligne</h2>
            <h1>알리앙스 프랑세즈 온라인 클래스<Link to="/" className="view-all">더 보기 <img src={arrowIcon} alt="👉" width="14"/></Link></h1>
            
            <ul>
                    {videos.map((video, idx)=>(
                            <li key={ idx }>
                                        <div className="thumbnail-wrap"><img src={ video.thumbnail } /></div>
                                        <h1>{ video.title }</h1>
                            </li>
                    ))}
             </ul>   
        </section>
    );
}

export default VideoListings;
