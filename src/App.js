import React, { Component } from 'react';
import Speech from 'speak-tts';
import './App.css';
import Monitors from './components/Monitors';
import Header from './components/Header';


class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App] constructor");

    this.state = {
      monitorsArray: [],
      key: 'u630058-e28e0007af00faaf27512f11',
      downMonitorsArray: []
    }
    //this.popSound = new Audio('Bubble-pop-sound-effect.mp3');

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
        `{"api_key":"u630058-e28e0007af00faaf27512f11","all_time_uptime_ratio":1,"response_times_average":1,"logs":1}`
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
  setInterval(() => this.loadData(), 10000);
}
componentDidUpdate(){
  this.state.monitorsArray.forEach(monitor => {
    if(monitor.status === 0) {
      if(this.state.downMonitorsArray.includes(monitor.friendly_name)) {
        //do nothing? monitor is already in down array
      }
      else {
        this.state.downMonitorsArray.push(monitor.friendly_name);
        console.log("added monitor to down array.");
        //this.popSound.play();
        const speech = new Speech();
        speech.speak({
          text: monitor.friendly_name + "is down!"
        })
      }
    }
    else {
      if(this.state.downMonitorsArray.includes(monitor.friendly_name)) {
        //if down monitors array includes a monitor that now is not down
        const toRemove = this.state.downMonitorsArray.indexOf(monitor.friendly_name);
        this.state.downMonitorsArray.splice(toRemove,1); //remove from the down monitors 
        console.log("after removing monitor that is no longer down: " + this.state.downMonitorsArray);
      }
    }
  })
}
    render () {
      return (
        <div className="App">
          <Header></Header>
          <Monitors monitors={this.state.monitorsArray}></Monitors>
        </div>
      );
    }
  
}

export default App;
