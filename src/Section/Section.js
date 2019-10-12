import React from 'react';
import styled from 'styled-components';
import AboutMe from '../Components/AboutMe/AboutMe';
import Portfolio from '../Components/PortFolio/PortFolio';
import { Route,Switch } from 'react-router-dom';
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
                <Switch>
                    <Route exact path="/about_me" component={AboutMe} />
                    <Route path="/about_me/aboutme" component={AboutMe} />
                    <Route path="/about_me/portfolio" component={Portfolio} />
                </Switch>
            </Article>
        </Sec>
    )
}

export default Section;