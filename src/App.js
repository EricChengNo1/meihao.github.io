import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import NavAndBrand from './Components/NavAndBrand';
import LabelBottomNavigation from './Components/BottomNavigation'

import Home from './Page/Home/Home';
import GoIntoMeiHao from './Page/GoIntoMeiHao';
import JoinMeiHao from './Page/JoinMeiHao';
import News from './Page/News';
import Distribution from './Page/Distribution';
// import Test from './Page/Test';

function App() {
  return (
    <div>
        <Router>
            <NavAndBrand />
            <div style={{marginTop: "65px", marginBottom: "70px"}}>
                <Switch>
                    <Route  path="/home" component={Home}/>
                    <Route path="/goIntoMeiHao" component={GoIntoMeiHao}></Route>
                    <Route path="/joinMeiHao" component={JoinMeiHao}></Route>
                    <Route path="/news" component={News}></Route>
                    <Route path="/distribution" component={Distribution}></Route>
                    {/*<Route path="/test" component={Test} />*/}
                    <Redirect from="/*" exact to="/home"></Redirect>
                </Switch>
            </div>

            <LabelBottomNavigation />
        </Router>
    </div>
  );
}

export default App;
