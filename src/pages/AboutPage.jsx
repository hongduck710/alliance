import aboutImage from "../img/eiffel-tower.jpg";

const AboutPage = () => {
    return (
    <section className="w1400 about">
        <h1>Alliance Française Séoul</h1>
        <div className="intro-wrap">
            <img src={aboutImage} alt="소개페이지 이미지" />
            <p className="gowun-batang-regular">
            Bienvenue! 프랑스어 학원에 오신 것을 환영합니다!<br/>
            <br/>

            저희 학원은 프랑스어를 배우고자 하는 모든 분들을 위해 최고의 교육 환경과 맞춤형 학습 프로그램을 제공합니다. <br/>
            프랑스어를 처음 시작하는 초보자부터 언어 능력을 한층 더 발전시키고 싶은 고급 학습자까지, 저희 학원의 전문 강사진은 <br/>
            학생 개개인의 학습 목표와 수준에 맞춘 커리큘럼으로 체계적이고 효과적인 수업을 진행합니다.<br/>
            <br/>

            저희 학원의 수업은 실생활에서 바로 활용할 수 있는 회화 실력을 키우는 데 중점을 두고 있으며, 언어뿐만 아니라 <br/>
            프랑스 문화와 전통에 대한 이해도 함께 제공합니다. 풍부한 경험을 지닌 강사들이 다양한 멀티미디어 자료와 <br/>
            실습을 활용하여 학습에 재미와 생동감을 더해 드립니다.<br/>
            <br/>

            저희 학원에서 프랑스어 실력과 더불어 새로운 문화와의 만남을 경험해 보세요. 여러분의 프랑스어 여정을 언제나 응원하겠습니다!
            </p>
        </div>
        <div className="location">
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33859098.7177726!2d-12.32858730000005!3d-58.80400019999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb09dff882a7809e1%3A0xb08d0a385dc8c7c7!2z64Ko6re5!5e0!3m2!1sko!2skr!4v1732088638100!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="route-guide">
                <dl>
                    <dt>오시는 길</dt>
                    <dd>
                        마포구청 역에서 하차 후, 오른쪽으로 100M 직진 후 
                         왼쪽 방향으로 좌회전 후 50M 직진 
                    </dd>
                    <dd>
                        마포구청 역에서 하차 후, 
                        오른쪽으로 100M 직진 후 왼쪽 방향으로 
                        좌회전 후 50M 직진 
                    </dd>
                    
                </dl>

            </div>
        </div> 
        
    </section>
    );
}
export default AboutPage;