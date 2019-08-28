import React, { Component } from 'react';
import './App.css';
import Monitors from './components/Monitors';


class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App] constructor");

    this.state = {
      monitorsArray: [],
      key: 'u630058-e28e0007af00faaf27512f11',
    }

    //this.loadData = this.loadData.bind(this);
  }

  
async loadData() {
  console.log("loading data...");
  try {
    var options = {
      credentials: "omit",
      method: 'POST',
      mode: 'cors',
      headers: {
        "accept":"application/json",
        "content-type":"application/json",
        "sec-fetch-mode":"cors"
      },
      body: 
      `{"api_key":"u630058-e28e0007af00faaf27512f11","all_time_uptime_ratio":1,"response_times_average":1}`
  };

  fetch(`https://api.uptimerobot.com/v2/getMonitors?api_key=u630058-e28e0007af00faaf27512f11&format=json&logs=1`, options)
  .then(data => data.json())
  .then(data => {
      const monitors = data['monitors'];
      console.log(data); //to get all montirso data
      this.setState({
        monitorsArray: monitors
      });
  }
  ).catch(err => console.log(err));
  }
  catch(err) {
    console.log(err);
  }
}

componentDidMount() {
  this.loadData();
  setInterval(() => this.loadData(), 5000);
}
    render () {
      return (
        <div className="App">
          <Monitors monitors={this.state.monitorsArray}></Monitors>
        </div>
      );
    }
  
}

export default App;
