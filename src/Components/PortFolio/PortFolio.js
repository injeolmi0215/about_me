import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    padding-top : 60px;
    padding-left :10px;
    display:relative;
    padding-bottom:100px;

    @media (max-width: 700px) {
        border-bottom:1px solid #bcbcbc;
    }
`

const DivOne = styled.div`
    border-right:1px solid #bcbcbc;
    width:25%;
    float:left;
    @media (max-width: 700px) {
        width:100%;
        border-right:0px solid #bcbcbc;
        margin-bottom:30px;
    }
`;

const Clear = styled.div`
    clear:left;
`;
const Title = styled.div`
    font-size:25px;
    margin-bottom:5px;
    font-weight:bold;
`;

const Period = styled.div`
    font-size:15px;
    color:#bcbcbc;
    margin-bottom:10px;
`;

const DivTwo = styled.div`
    width:75%;
    padding-left:100px;
    float:left;
    @media (max-width: 700px) {
        padding-left:0px;
        width:100%;
        border-right:0px solid #bcbcbc;
    }

`;

const Desc = styled.div`
    font-size:20px;
    font-weight:bold;
    margin-bottom:20px;
`;

const Work = styled.div`
    color: #393c42;
    padding-left:10px;
`



const PortFolio = () => {
    return (
        <React.Fragment>

            <MainDiv>
                <DivOne>
                    <Title>koreataxi</Title>
                    <Period>2018</Period>
                    <a href="http://koreataxi.kr" target="_blank">http://koreataxi.kr</a>
                </DivOne>
                <DivTwo>
                    <Desc>외국인 택시 예약 시스템</Desc>
                    <Work>- 전반적인 개발</Work>
                    <Work>- 서버세팅</Work>
                </DivTwo>
                <Clear></Clear>
            </MainDiv>

            <MainDiv>
                <DivOne>
                    <Title>이건스토어</Title>
                    <Period>2017~2018</Period>
                    <a href="http://www.eagonstore.com" target="_blank">http://www.eagonstore.com</a>
                </DivOne>
                <DivTwo>
                    <Desc>이건창호의 쇼핑몰 </Desc>
                    <Work>- 상품 리스트 및 상품상세 페이지 개발</Work>
                    <Work>- 상품 관리 개발</Work>
                    <Work>- 결제 시스템 개발</Work>
                </DivTwo>
                <Clear></Clear>
            </MainDiv>

            <MainDiv>
                <DivOne>
                    <Title>인코</Title>
                    <Period>2017~2018</Period>
                    <a href="http://www.e-inco.com" target="_blank">http://www.e-inco.com</a>
                </DivOne>
                <DivTwo>
                    <Desc>인테리어 매칭 사이트</Desc>
                    <Work>- 시공 사진 리스트 페이지 개발</Work>
                    <Work>- 시공 관리 개발</Work>
                    <Work>- 견적 매칭 개발</Work>
                </DivTwo>
                <Clear></Clear>
            </MainDiv>

            <MainDiv>
                <DivOne>
                    <Title>lixing</Title>
                    <Period>2017~2018</Period>
                </DivOne>
                <DivTwo>
                    <Desc>중국 여행객들을 위한 서비스</Desc>
                    <Work>- 리싱 결제 시스템 개발 </Work>
                    <Work>- 인터페이스 협의 및 개발</Work>
                </DivTwo>
                <Clear></Clear>
            </MainDiv>
            
        </React.Fragment>
    )
}

export default PortFolio;