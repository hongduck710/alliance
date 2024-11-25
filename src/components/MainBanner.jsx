import mainBanner from "../img/main.jpg"

const MainBanner = () => {
    return (
    <div className="slider">
        <div className="slides">
            <div className="slide"><img src={mainBanner} alt="슬라이드 이미지" /></div>
        </div>
    </div>
    );
}

export default MainBanner;