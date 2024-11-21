import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock,  faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
        <footer>
            <section className="w1350">
                <h1 className="logo"><img src="https://afseoul.com/wp-content/uploads/2021/07/af-w-v.svg" alt="로고" /></h1>
                <address>
                    <p>
                        ㈜알리앙스프랑세즈<br/>
                        주소: 서울 마포구 시리우스로123길 폴룩스 빌딩<br/>
                        대표번호: 02-555-1125<br/>
                        이메일 : supercommi@afseoul.com
                    </p>
                    <br/>
               
                    <p>
                        ALLIANCE FRANÇAISE SEOUL<br/>
                        Address: 123, Pollux building Sirius-gil,<br/>
                        Mapo-gu, Seoul, Republic of Korea<br/>
                        Tel: +82 2-555-1125<br/>
                        e-mail: supercommi@afseoul.com
                    </p>

                </address>
                <div className="hours-location">
                        <dl className="hours">
                            <dt><FontAwesomeIcon icon={ faClock } /> 운영시간</dt>
                            <dd>월 - 금: 09:00 - 22:00</dd>
                            <dd>토: 09:00 - 18:00</dd>
                            <dd>일요일, 공휴일 휴뮤</dd>
                        </dl>
                        <dl className="location">
                            <dt><FontAwesomeIcon icon={ faLocationDot } /> 오시는 길</dt>
                            <dd>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33859098.7177726!2d-12.32858730000005!3d-58.80400019999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb09dff882a7809e1%3A0xb08d0a385dc8c7c7!2z64Ko6re5!5e0!3m2!1sko!2skr!4v1732088638100!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </dd>
                        </dl>
                </div>
            </section>    
        </footer>
        <footer className="footer-bottom">
            <section className="w1350">
                <address>㈜알리앙스프랑세즈 서울센터 │ 사업자번호 : 123 - 456- 7890  |  대표자: 요정컴미</address>
                <ul>
                    <li><Link>개인정보취급방침</Link></li>
                    <li><Link>이용약관</Link></li>
                    <li><Link>환불규정</Link></li>
                </ul>
            </section>
        </footer>
    </>    
    )
}

export default Footer;