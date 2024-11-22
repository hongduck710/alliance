import { Link } from "react-router-dom";
import schedules from"../schedules.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";

const ClassSchedules = () => {
    return (
        <section className="w1400 class-schedules">
            <h2>Nos cours régulier</h2>
            <h1>이달의 수강 스케줄</h1>
            <ul>
                {schedules.map((schedule, idx)=>(
                    <li key={idx}>
                        <Link to="">
                            <h3>
                                { schedule.id === "1" && <FontAwesomeIcon icon={faPlaneUp} /> }
                                { schedule.id === "2" && <FontAwesomeIcon icon={faGlobe} /> }
                                { schedule.id === "3" && <FontAwesomeIcon icon={faBookOpen} /> }
                                { schedule.id === "4" && <FontAwesomeIcon icon={faIdBadge} /> }                                    

                                {schedule.title.split("\n").map((line,idx)=>(
                                <p key={idx}>{line}</p>
                                ))}
                            </h3>
                            <h4><strong>신청하기</strong><span><FontAwesomeIcon icon={faArrowRight} /></span></h4>
                        </Link>
                    </li> 
                ))}
            </ul>
        </section>
    );
}

export default ClassSchedules;