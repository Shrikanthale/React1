import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Greeting from './jsxandjs/Greeting';
//import Myfile from './componet/Myfile';
//import Contact from './ContactCard/Contact';
import Formmain from './form/Formmain';
import Count from './HOOKS/Count';
import Color from './setState/Color';
import Onclick from './setState/Onclick';
import Form from './state/form';
import FormA from './state/form1';
import FormB from './state/form2';
import FormC from './state/Form3';
import Form3 from './state/Form3';
import Set from './STATEA/set';
import F1 from './Context/F1'
import P1 from './Context2/P1';
//import Main from './componet/Main';
//import ShowDate from './jsxandjs/ShowDate';
//import Form from './App';
import { Route,Link,BrowserRouter,Switch } from 'react-router-dom'

import App from './Routes/App'
import About from './Routes/About'
import ContactUs from './Routes/ContactUs'

import StudentList from './Routes1.js/StudentList';
import Name from './Routes1.js/Name';
import ContactTo from './Routes1.js/ContactTo';
import NotFound from './Routes1.js/NotFound';
import Mounting from './LifeCycle/Mounting';
import Mounting1 from './LifeCycle1/Mounting1';

const routing = (
    <BrowserRouter>
    <div>
        <ul>
            <li>
                <Link to = "/" > HOME </Link>
            </li>
            <li>
                <Link to = "/About" > ABOUT </Link>
            </li>
            <li>
                <Link to = "/ContactUS" > CONTACT </Link>
            </li>
        </ul>
        <Route exact path = "/" component={App}/>
        <Route path = "/About" component={About}/>
        <Route path = "/ContactUs" component={ContactUs}/>
    </div>
    </BrowserRouter>
)

const routing1 = (
    <BrowserRouter> 
    <div>
    <ul>
            <li>
                <Link to = "/" > List </Link>
            </li>
            <li>
                <Link to = "/Name" > Name </Link>
            </li>
            <li>
                <Link to = "/ContactTo" > Contact </Link>
            </li>
        </ul>
        <Switch>
        <Route exact path = "/" component = {StudentList}/>
        <Route path="/Name" component = {Name}/>
        <Route path="/ContactTo" component = {ContactTo}/>
        <Route component = {NotFound}/>
        </Switch>
    </div>
    </BrowserRouter>
)

ReactDOM.render(<Mounting1 Hotel = "Shahi house" />,document.getElementById('root'));


// function Deatils(){
//     return(
//         <div>
//             <h1>hi shri</h1>
//         </div>
//     )
// }


