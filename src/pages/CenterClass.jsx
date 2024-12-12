import ClassHeadline from "../components/ClassHeadline";
import Calendar from "../components/Calendar";
import ClassInfo from "../components/ClassInfo";
import LevelsNotice from "../components/LevelsNotice";
import CenterClasses from "../components/CenterClasses";
import Curriculums from "../components/Curriculums";

const CenterClass = () => {


    return (
        <section className="w1400 center-class">
            <ClassHeadline />
            <div className="class-schedule-wrap">
                <ClassInfo />
                <Calendar />
            </div>
            <LevelsNotice />
            <CenterClasses />
            <Curriculums />
        </section>
    );
}

export default CenterClass;