const CenterClasses = () => {
    return (
        <div className="center-classes">
            <div className="class-tab">
                <input type="radio" id="tab1" name="class-tab"/>
                <input type="radio" id="tab2" name="class-tab"/>
                <input type="radio" id="tab3" name="class-tab"/>
                <input type="radio" id="tab4" name="class-tab"/>
                <label htmlFor="tab1">대면수업 PACKAGE</label>
                <label htmlFor="tab2">주말 수업</label>
                <label htmlFor="tab3">초급 NIVEAU A1</label>
                <label htmlFor="tab4">초중급 NIVEAU A2</label>
            </div>
            <div className="class-tab">
                <input type="radio" id="tab5" name="class-tab"/>
                <input type="radio" id="tab6" name="class-tab"/>
                <input type="radio" id="tab7" name="class-tab"/>
                <input type="radio" id="tab8" name="class-tab"/>    
                <label htmlFor="tab5">중급 NIVEAU A2</label>
                <label htmlFor="tab6">중고급<br/>NIVEAU B1 → NIVEAU B2</label>
                <label htmlFor="tab7">중고급 NIVEAU B2</label>
                <label htmlFor="tab8">자율구사단계<br/>NIVEAU B1 → NIVEAU B2</label>
            </div>


        </div>
    )
}

export default CenterClasses;
