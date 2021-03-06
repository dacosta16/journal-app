import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { JournalScreem } from '../components/journal/JournalScreem';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async(user) => {
      
      if(user?.uid) {
        dispatch( login(user.uid, user.displayName) );
        setIsLoggedIn(true);

        dispatch( startLoadingNotes( user.uid ) )

      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    
    } )
  }, [dispatch, setChecking, setIsLoggedIn])

  if( checking ) {
    return (
      <h1>Please wait...</h1>
    )
  }
  

  return (
    
    <Router>
        <div>
            <Switch>
                
                <PublicRoute path='/auth' component={ AuthRouter } isAuthenticated={ isLoggedIn } />
                <PrivateRoute exact isAuthenticated={ isLoggedIn } path='/' component={ JournalScreem } />
                <Redirect to='/auth/login' />

            </Switch>
        </div>
    </Router>
    
  )
}
