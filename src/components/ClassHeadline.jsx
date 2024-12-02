const ClassHeadline = () => {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    console.log(currentMonth);
    return (
        <div className="class-headline">
        <h1><span>A</span>lliance <span>F</span>rançaise</h1>
        <h2>알리앙스 프랑세즈 정규과정 - { currentMonth }월</h2>
        </div>
    )
}

export default ClassHeadline;