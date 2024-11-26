import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <header>
             <ul className="color-deco">
                <li className="blue"></li>
                <li className="white"></li>
                <li className="red"></li>
            </ul>           
            <nav>
                <div className="w1500">
                    <div className="logo">
                        <NavLink to="/"><span>A</span>llIANCE <span>F</span>RANÇAISE</NavLink>
                    </div>
                    <div className="menus">
                    <NavLink className="menu" to="/about">소개</NavLink>
                    <NavLink className="menu">수강신청</NavLink>
                    <NavLink className="menu">시험안내</NavLink>
                    <NavLink className="menu">교재 구매</NavLink>
                    <NavLink className="menu">번역</NavLink>
                    <NavLink className="menu">공지</NavLink>
                    <NavLink className="menu">자주묻는 질문</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;