import levelCurriculums from "../levelCurriculums.json";

const LevelsNotice = () => {
    return (
    <ul className="level-curriculums">
        {levelCurriculums.map((curriculum) => (
            <li key={curriculum.id}>
                <h1>{curriculum.level}</h1>
                <div><h2>{curriculum.id}</h2></div>
                <p>{curriculum.description}</p>
            </li>
        ))}
    </ul>
    )
}

export default LevelsNotice;