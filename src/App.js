import React, { Component } from 'react';
import './App.css';
import Monitors from './components/Monitors';
const rp = require('request-promise');


// function App() {
//   return (
//     <div className="App">
//       <Monitors monitors={this.state.monitors}/>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App] constructor");
  }

  state = {
    monitorsArray: [],
    key: 'u630058-e28e0007af00faaf27512f11',
  }

  async componentDidMount() {
    try {
      var options = {
        method: 'POST',
        uri: 'https://api.uptimerobot.com/v2/getMonitors',
        body: {
              api_key: this.state.key,
              all_time_uptime_ratio: 1,
              response_times_average: 1,
        },
      json: true // Automatically stringifies the body to JSON
    };
    rp(options)
    .then(data => {
        const monitors = data['monitors'];
        //console.log(monitors); //to get all montirso data
        this.setState({
          monitorsArray: monitors
        });
    }
    );
    }
    catch(err) {
      console.log(err);
    }}
    render () {
      return (
        <div className="App">
          <Monitors monitors={this.state.monitorsArray}></Monitors>
        </div>
      );
    }
  
}

export default App;
