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

            <ul className="class-info">
                <li><span>강의명<br/>COURS</span>Vocabulaire par thème et production orale B2
                    <br/>고급 주제별 어휘와 말하기
                </li>
                <li><span>강사명<br/>PROF</span>VICTOR</li>
                <li><span>수강코드<br/>CODE</span>#111000</li>
                <li><span>레벨<br/>NIVEAU</span>B2</li>
                <li><span>진도<br/>PARTIE</span>1 / 4</li>
                <li><span>요일<br/>JOUR(S)</span>월요일, 화요일</li>
                <li><span>시간<br/>HORAIRES</span>14:00~16:00</li>
                <li><span>수강료<br/>TARIF</span>\240,000</li>
                <li><span>커리큘럼</span><a href="">확인하기</a></li>
                <li><a href="">수강 신청하기</a></li>
            </ul>
        </div>
    )
}

export default CenterClasses;
