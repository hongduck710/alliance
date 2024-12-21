import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from"@fortawesome/free-solid-svg-icons";

const Login = () => {
    return (
        <div className="login-page">
            <div className="page-headline">
                <h1><span>A</span>lliance <span>F</span>rançaise</h1>
                <h2>로그인</h2>
            </div>
            <div className="form-wrap">
                <form>
                    <input type="text" placeholder="아이디"/>
                    <input type="password" placeholder="비밀번호"/>
                    <div className="maintain-login-wrap">
                        <input type="checkbox" id="maintain-login" />
                        <label htmlFor="maintain-login"><FontAwesomeIcon icon={faCheck}/></label>
                        <span>로그인 상태 유지</span>
                    </div>
                    <button type="button" className="login-btn">로그인</button>
                    <div className="find-wrap">
                        <Link className="find-account">아이디 찾기</Link><Link className="find-password">비밀번호 찾기</Link>
                    </div>
                    <Link to="/join" className="to-join">회원가입 <FontAwesomeIcon icon={faArrowRight}/></Link>
                </form>
            </div>
        </div>
    )
}
export default Login;