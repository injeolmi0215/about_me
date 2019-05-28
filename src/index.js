import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Section from './Section/Section';
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
   *{
      margin:0px;
      padding:0px;
      box-sizing: border-box; 
      -ms-overflow-style: none;
      ::-webkit-scrollbar {

         display:none;
         
      } 
   }
   
   body{
      padding:0px 40px;
      a:link {text-decoration: none; color: #bcbcbc;}
      a:visited {text-decoration: none; color: #bcbcbc;}
      a:active {text-decoration: none; color: #bcbcbc;}
      a:hover {text-decoration: underline; color: gray;}
   }
`


const App = () => {
   return(  <React.Fragment>
               <GlobalStyle />
               <Header>
               </Header>
               <Section></Section>
            </React.Fragment>)
}

const mountNode = document.getElementById("root");
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,mountNode);