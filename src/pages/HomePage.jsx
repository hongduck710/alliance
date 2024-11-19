import ClassSchedules from "../components/ClassSchedules";
import MainBanner from "../components/MainBanner";
import MainCards from "../components/MainCards";
import MainIntro from "../components/MainIntro";
import VideoListings from "../components/VideoListings";

const HomePage = () => {
    return (
        <>
            <MainBanner />
            <MainCards />
            <MainIntro />
            <ClassSchedules />
            <VideoListings />
        </>
    );
};

export default HomePage;