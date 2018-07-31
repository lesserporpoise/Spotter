import React from 'react'
import Library from './components/library/Library'
import MyLoads from './components/myloads/MyLoads'
import {Switch, Route} from 'react-router-dom'

export default(
<Switch>
    <Route path='/library' component={Library}/>
    <Route path='/myloads' component={MyLoads}/>
</Switch>
)