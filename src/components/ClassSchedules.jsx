import schedules from"../schedules.json";

const ClassSchedules = () => {
    return (
        <section className="w1400">
            <h2>Nos cours régulier</h2>
            <h1>이달의 수강 스케줄</h1>
            <ul>
                {schedules.map((schedule, idx)=>(
                    <li key={idx}>{schedule.title}</li>      
                ))}
            </ul>
        </section>
    );
}

export default ClassSchedules;