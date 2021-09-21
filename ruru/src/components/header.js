import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import  '../styles/header.css';
import api from "../api/api";


const Header = () => {
  const dispatch = useDispatch();  
  
  const [resp, getResp] = useState(''); 

    const [clicks, getclick] = useState(500);

    function clickHandler(evt){
        evt.preventDefault();
        getclick(clicks + 1)
    };

    const tickers = ['APPL', 'AMZN', 'YHOO', 'GOOGL']

    const options = tickers.map((tick, i)=>(<option key={i}>{tick}</option>))

    return (
      <div className="App">
        <header className="header">
          <div> Yahoo finance app</div>
          <form className="headerForm">
              <div>Select the ticker you are looking for: </div>
              <select>
                  {options}
              </select>    
              <button 
                  className="clicker"
                  onClick={clickHandler}
                  >
                  click on me to see what's happen
              </button>    
          </form>            
          <div>you have made {clicks} clicks</div> 
        </header>
      </div>
    );
  // return <div>Hello World</div>


}

export default Header;
