import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <nav>
            <ul className="color-deco">
                <li className="blue"></li>
                <li className="white"></li>
                <li className="red"></li>
            </ul>
            <div className="w1500">
                <div className="logo">
                    <NavLink to="/"><span>A</span>llIANCE <span>F</span>RANÇAISE</NavLink>
                </div>
                <div className="menus">
                <NavLink>소개</NavLink>
                <NavLink>수강신청</NavLink>
                <NavLink>시험안내</NavLink>
                <NavLink>교재 구매</NavLink>
                <NavLink>번역</NavLink>
                <NavLink>공지</NavLink>
                <NavLink>자주묻는 질문</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;