

const Join = () => {
    return (
        <div className="join-page">
            <div className="page-headline">
                <h1><span>A</span>lliance <span>F</span>rançaise</h1>
                <h2>회원가입</h2>
            </div>
            <div className="form-wrap">
                <form>
                    <input type="text" placeholder="아이디" required/>
                    <input type="password" placeholder="비밀번호"required />
                    <input type="password" placeholder="비밀번호 확인"required/>
                    <input type="text" placeholder="이름" required/>
                    <input type="email" placeholder="이메일" required/>
                    <input type="tel" placeholder="연락처" required/>
                    <input type="text" placeholder="생년월일(예:19701113)" required/>

                    <div className="address-wrap">
                        <div className="btn-wrap">
                            <input type="text" className="postcode" placeholder="우편번호" />
                            <button className="search-address" type="button">주소검색</button>
                        </div>
                        <input type="text" placeholder="주소"/>
                        <input type="text" placeholder="상세주소"/>
                    </div>
                    <button type="button" className="join-btn">회원가입</button>
                </form>
            </div>
        </div>
    )
}
export default Join;