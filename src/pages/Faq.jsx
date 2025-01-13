import FaqListings from "../components/FaqListings";
import PageBg from "../components/PageBg";

const Faq = () => {
    return (
        <>
            <PageBg />
            <div className="faq-page">
                
                <div className="page-headline faq">
                    <h1>FAQ</h1>
                    <h2>자주묻는 질문</h2>
                </div>
                <FaqListings />
            </div>
        </>
    )
}

export default Faq;