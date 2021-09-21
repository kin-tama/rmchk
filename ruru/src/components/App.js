import '../App.css';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import Header from './header';
import browserHistory from "../browser-history";
import { getData } from '../store/api-action' 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App(){

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData())
  })



  return (
    <BrowserRouter history={browserHistory}>
      <Switch> 
        <Route exact path="/"> 
          <Header /> 
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default connect (mapStateToProps, null)(App);
