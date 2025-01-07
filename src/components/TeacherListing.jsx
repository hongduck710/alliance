import teachers from "../teachers.json";

const TeacherListing = () => {
    return (
        <>
            {teachers.map((teacher)=>(
                <li key={teacher.id}>
                    <h1>{teacher.name}</h1>
                    <section>
                        <div className="teacher-wrap">
                            <div className="teacher-img">    
                                <img src={teacher.imgUrl} alt={teacher.name} />               
                            </div>
                            
                            <div>
                                <h3><strong>강의레벨</strong><span>{teacher.classLevel}</span></h3>
                                <h3><strong>전공</strong><span>{teacher.major}</span></h3>
                                <h3><strong>수업언어</strong><span>{teacher.language}</span></h3>
                            </div>
                        </div>
                        <div className="teacher-description">
                            <div>
                                <h3><strong>경력</strong><span>{teacher.qualification}</span></h3>
                            </div>
                            <div>
                                <h3><strong>소개</strong></h3>
                                <p>
                                    {teacher.description}
                                </p>
                            </div>
                        </div> 
                    </section>
 
                </li>
            ))}
        </>
    );
}

export default TeacherListing;