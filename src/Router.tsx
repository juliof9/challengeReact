import { Redirect, Route, Switch } from 'react-router-dom'

import Gif from './pages/Gif'
import GifDetail from './pages/GifDetail'

const Router = () => (
  
    <Switch>
        <Route exact path="/" component={Gif}/>
        <Route path="/gif/:id?" component={GifDetail}/>
        <Redirect to="/" />
    </Switch>

)

export default Router