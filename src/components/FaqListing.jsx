import {useRef}  from "react";
import faq from "../faq.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const FaqListing = () => {

    
    const faqRef = useRef();


   const onClick = e => {
        e.preventDefault();
        faqRef.classList.toggle("open");
   }

    return (
    <>
        {faq.map((faq) => (

                <li ref={faqRef} key={faq.id} onClick={onClick}>
                    <h1>{faq.title}<FontAwesomeIcon icon={faPlus} /></h1>
                    <div>{faq.contents}</div>

                </li>

        ))}
    </>
    )
}

export default FaqListing;