import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';

const App = () => {
   return(  <React.Fragment>
               <Header>
                  <div>Hello</div>
               </Header>
            </React.Fragment>)
}

const mountNode = document.getElementById("root");
ReactDOM.render(<App />,mountNode);