import Headline from "../components/Headline";
import Calendar from "../components/Calendar";
import ClassInfo from "../components/ClassInfo";
import LevelsNotice from "../components/LevelsNotice";
import CenterClasses from "../components/CenterClasses";
import Curriculums from "../components/Curriculums";

const CenterClass = () => {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    console.log(currentMonth);

    return (
        <section className="w1400 center-class">
            
            <Headline />
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