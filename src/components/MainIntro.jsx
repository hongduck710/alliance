import starIcon from "../img/star-icon.svg"

const MainIntro = () => {
    return (
        <section className="main-intro">
            <div className="w1500">
                <div className="intro-contents">
                    <h1>1883 년부터 구축된 세계적 네트워크
                    <p><img src={ starIcon } alt="✨" width="21" /></p>
                    </h1>
                    <p>알리앙스프랑세즈는 1883년 파리에 창설된 공익재단으로, 
    프랑스어 및 프랑스 문화교육을 위해 전 세계 132개국, 
    830여개의 네트워크를 자랑하는 자타공인 세계 제1의 프랑스어 교육기관입니다.
    서울 알리앙스프랑세즈는 1965년 한국과 프랑스 양국 정부가 체결한 문화협정에 
    근간을 두고 설립되었으며, 강남센터와 회현센터가 있습니다.
    <br/>서울 알리앙스프랑세즈는 파리 알리앙스프랑세즈 재단의 라벨 인증을 받았으며, 
    주한프랑스대사관/프랑스문화원과 업무협약을 맺고 긴밀히 협력하고 있습니다.
                    </p>
                </div>
                <div className="youtube-video">
                    <h2><iframe  src="https://www.youtube.com/embed/djz69yXs49I?si=woifnnIlL88yiZCO" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe></h2>
                </div>
            </div>
        </section>
    );
};

export default MainIntro;