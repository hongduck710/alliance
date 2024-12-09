import ClassHeadline from "../components/ClassHeadline";
import Calendar from "../components/Calendar";
import ClassInfo from "../components/ClassInfo";
import LevelsNotice from "../components/LevelsNotice";

const CenterClass = () => {


    return (
        <section className="w1400 center-class">
            <ClassHeadline />
            <div className="class-schedule-wrap">
                <ClassInfo />
                <Calendar />
            </div>
            <LevelsNotice />
        </section>
    );
}

export default CenterClass;