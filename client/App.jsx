import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header.component';
import Homepage from './pages/homepage.component';
import SignupAndLogin from './pages/signup-and-login.component';

const App = () => {
  const [isAuth, setisAuth] = useState(null);

  const signOut = () => {
    setisAuth(null)
  }

  const signIn = (userID) => {
    setisAuth(userID)
  }

  return (
    <div>
      <Header isAuth={isAuth} signOut={signOut}/>
      <Switch>
        <Route exact path='/' render={() => <Homepage isAuth={isAuth} signIn={signIn} />}></Route>
        <Route path='/signin' render={() => isAuth ? (<Redirect to='/'/>) : (<SignupAndLogin isAuth={isAuth} signIn={signIn}/>)}></Route>
      </Switch>
    </div>
  );
};
export default App;
