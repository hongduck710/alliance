import TeacherListings from "../components/TeacherListings";

const AboutTeacher = () => {
    return (
        <div className="about-teacher-page">
            <div className="page-headline">
                <h1><span>A</span>lliance <span>F</span>rançaise</h1>
                <h2>강사진 소개</h2>
            </div>
            <TeacherListings />
        </div>
    );
}

export default AboutTeacher;