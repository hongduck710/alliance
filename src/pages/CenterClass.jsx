const CenterClass = () => {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    console.log(currentMonth);

    return (
        <section className="w1400">
            <h1>Alliance Française</h1>
            <h2>알리앙스 프랑세즈 정규과정 - { currentMonth }월</h2>
            
        </section>
    );
}

export default CenterClass;