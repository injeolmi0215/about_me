import React from 'react';
import styled from 'styled-components';


const About = styled.div`
    padding-top : 60px;
    padding-left :10px;
`;

const AboutMe = () => {
    return (<About>
        <div><b>NAME</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;김제운</div><br></br>
        <div><b>EMAIL</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;injeolmi0215@gmail.com</div><br></br>
        <div><b>EDUCATION</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;창원대학교 - 제어계측공학 학사 </div><br></br>
        <div><b>CAREER</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017~2018 모람씨앤티</div><br></br>
        <div><b>SKILLS</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> <br></br>
        <div>- jsp</div>
        <div>- reactjs</div>
        <div>- nodejs</div>
        <div>- mariadb</div>
        <br></br>
        <div><b>PROJECTS</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> <br></br>
        <div>- lixing</div>
        <div>- eagon-store</div>
        <div>- e-inco</div>
        <div>- koreataxi</div>
    </About>)
}


export default AboutMe;