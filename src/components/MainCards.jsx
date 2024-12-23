import maincards from "../maincards.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faChalkboardUser, faCheckCircle, faSchool } from "@fortawesome/free-solid-svg-icons";


const MainCards = () => {
    return (
        <div className="w1500 main-cards">
            <h1 className="tangerine-regular">Alliance Française Séoul</h1>
            <ul>
                {maincards.map((maincard) => (
                    <li key={maincard.id}>
                        <h2>{maincard.title}</h2>
                        <h3>
                            {maincard.id === 1 && <FontAwesomeIcon icon={faUsers}/>}
                            {maincard.id === 2 && <FontAwesomeIcon icon={faChalkboardUser}/>}
                            {maincard.id === 3 && <FontAwesomeIcon icon={faCheckCircle}/>}
                            {maincard.id === 4 && <FontAwesomeIcon icon={faSchool}/>}
                        </h3>

                        <p>{maincard.description}</p>
                    </li>
                ))}


            </ul>
        </div>
    );
}

export default MainCards;
