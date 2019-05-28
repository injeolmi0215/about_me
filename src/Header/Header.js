import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HeaderStyle = styled.header`
    position: relative;
    max-width: 1180px;
    margin : 0 auto;
`;

const Top = styled.div`
    height:210px;
`;

const Logo = styled.div`
    margin-top:80px;
    float:left;
`
const Main = styled.div`
    font-size:30px;
    font-weight:bold;
`
const Sub = styled.div`
    font-size:15px;
    color:#bcbcbc;
`

const Ul= styled.ul`
    margin-top:60px;
    display: inline-block;
    padding-top: 10px;
    padding-left: 150px;
    color: #bcbcbc;
    float:right;
`
const Li= styled.li`
    margin:10px;
    list-style:circle;
`
const Header  = () => {
    return (
        <HeaderStyle>
            <Top>
                <Logo>
                    <Main>Kim Je Un</Main>
                    <Sub>WEB DEVELOPER</Sub>
                </Logo>
                <Ul>
                    <Li><Link to="/aboutme">ABOUT ME</Link></Li>
                    <Li><Link to="/portfolio">PORTFOLIO</Link></Li>
                </Ul>
            </Top>
        </HeaderStyle>
    )
}

export default Header;