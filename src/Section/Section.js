import React from 'react';
import styled from 'styled-components';
import AboutMe from '../Components/AboutMe/AboutMe';
import Portfolio from '../Components/PortFolio/PortFolio';
import { Route } from 'react-router-dom';
const Sec = styled.section`
    position: relative;
    max-width: 1180px;
    margin : 0 auto;

`
const Article = styled.article`

`;

const Section = () => {
    return (
        <Sec>
            <Article>
                <Route exact path="/" component={AboutMe} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/portfolio" component={Portfolio} />
            </Article>
        </Sec>
    )
}

export default Section;