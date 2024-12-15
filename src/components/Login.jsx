const Login = () => {
    return (
        <div className="login-page">
            <div className="page-headline">
                <h1><span>A</span>lliance <span>F</span>rançaise</h1>
                <h2>로그인</h2>
            </div>
            <div className="form-wrap">
                <form>
                    <input type="text" placeholder="로그인"/>
                    <input type="password" placeholder="비밀번호"/>
                    <input type="checkbox" />
                    <button>로그인</button>
                </form>
            </div>
        </div>
    )
}
export default Login;