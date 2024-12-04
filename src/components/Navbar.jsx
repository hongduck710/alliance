import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useRef} from "react";



const Navbar = () => {
    const mBtnRef = useRef();
    const menusRef = useRef();
    const onClick = e => {
        e.preventDefault();
        menusRef.current.classList.toggle("open-menus");
    }

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
                        <NavLink to="/"><span>A</span>LLIANCE <span>F</span>RANÇAISE</NavLink>
                    </div>
                    <button onClick={onClick} ref={mBtnRef} className="m-hamburger-btn"><FontAwesomeIcon icon={faBars} /></button>
                    <div className="menus" ref={menusRef}>
                        <NavLink className="main-menu" to="/about">소개</NavLink>
                        <NavLink className="main-menu">
                            수강신청
                            <div className="sub-menu">
                                <NavLink to="center-class">센터강의</NavLink>
                                <NavLink>온라인수업</NavLink>
                                <NavLink>영상강의</NavLink>
                                <NavLink>시험준비</NavLink>
                            </div>
                        </NavLink>
                        <NavLink className="main-menu">시험안내</NavLink>
                        <NavLink className="main-menu">교재 구매</NavLink>
                        <NavLink className="main-menu">번역</NavLink>
                        <NavLink className="main-menu">공지</NavLink>
                        <NavLink className="main-menu">자주묻는 질문</NavLink>
                    </div>
                </div>

                
            </nav>
        </header>
    );
};

export default Navbar;