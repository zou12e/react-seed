import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import A from './A'
import B from './B'
import C from './C'
import MLink from './MLink'
import Err from './Error'


import Index from './page/Index'


let Routes = () => (
   <div>
        <div>
          <ul>
            <li><MLink to="/" exact >A</MLink></li>
            <li><MLink to="/b" >B</MLink></li>
            <li><MLink to="/c" >C</MLink></li>
          </ul>
          <hr/>
          <Route path="/" component={A}/>
          <Route path="/b"  component={B}/>
          <Route path="/c"   component={C}/>
        </div>
    </div>
)

Routes = ({ match }) => (

  <div>
      <Route path="/" exact component={Err} />
      <Route path="/:openid" component={Index} />
  </div>
)



export default Routes;

