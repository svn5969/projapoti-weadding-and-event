import React, { useEffect, useState } from 'react';
import './App.css';
// import RiseLoader from "react-spinners/RiseLoader";
// import PropagateLoader from "react-spinners/PropagateLoader";
// import PacmanLoader from 'react-spinners/PacmanLoader';
import RingLoader from 'react-spinners/RingLoader';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 8000);
  }, [])
  return (
    <>
      {
        loading ?
          <div className="loading">
            {/* <RiseLoader

            className="App"
            size={15}
            color={"#800080"}
            loading={loading}

          /> */}
            {/* <PacmanLoader
          className="App"
		size='60'
	color='#6b5ce7'

	/> */}
            <RingLoader
              size='100'
              color='#0000ff'
              loading={loading}
            />
            <div className="my-4">
              <h5 className="font-weight-bold text-uppercase " style={{ color: "red", paddingTop: '140px', paddingLeft: '70px' }}>প্রজাপতি ওয়েডিং এন্ড ইভেন্টস</h5>
            </div>
            {/* <PropagateLoader
            className="App"
            size={15}
            color={"#800080"}
            loading={loading}

          /> */}



          </div>

          :
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
            </Switch>
          </Router>
      }
    </>
  );
}

export default App;
