import ClassHeadline from "../components/ClassHeadline";
import Calendar from "../components/Calendar";
import ClassInfo from "../components/ClassInfo";

const CenterClass = () => {


    return (
        <section className="w1400 center-class">
            <ClassHeadline />
            <ClassInfo />
            <Calendar />
        </section>
    );
}

export default CenterClass;