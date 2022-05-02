import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { JournalScreem } from '../components/journal/JournalScreem';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    
    <Router>
        <div>
            <Switch>
                
                <Route path='/auth' component={ AuthRouter }></Route>
                <Route exact path='/' component={ JournalScreem }></Route>
                <Redirect to='/auth/login' />

            </Switch>
        </div>
    </Router>
    
  )
}
