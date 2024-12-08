import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeadphones,faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons";
const ClassInfo = () => {
    return (
        <div className="class-info">
            <dl>
                <dt>수강신청 문의</dt>
                <dd><span><FontAwesomeIcon icon={faPhone}/> 전화 문의</span><a href="">010-2345-6789</a></dd>
                <dd><span><FontAwesomeIcon icon={faEnvelope}/> 이메일 문의</span><a href="">allianceseoul@mail.net</a></dd>
                <dd><span><FontAwesomeIcon icon={faHeadphones}/> 1:1 문의</span><a href="">문의하기 </a></dd>
            </dl>
            <dl>
                    <dt>수강료 결제 안내</dt>
                    <dd>
                        <p>
                        1) 계좌 이체로 결제를 희망하시는 경우, 아래 계좌로 수강료를 납부 해주세요.
                        우리은행 1234-567-89101 (주)알리앙스프랑세즈
                        <br/>
                        2) 카드 결제를 희망하시는 경우, 아래 시간표에 있는 결제 링크를 클릭하셔서 
                        수강료를 납부 해주세요.
                            2024년 10월 21일 (월) ~ 10월 27일 (일) 사전 등록 기간에 결제하시면 5% 할인된 
                        수강료로 등록하실 수 있습니다. 결제하기 버튼을 누르시면 할인된 수강료를 
                        확인하실 수 있습니다. 
                        (일부 대면 수업, Zoom 수업, 테마별 아틀리에/원데이 클래스 수업은 할인 적용되지 않으며, 
                        또한 패키지 10% 할인과 중복 적용되지 않습니다.)
                        </p>
                    </dd>
            </dl>
        </div>
    )    
}

export default ClassInfo;