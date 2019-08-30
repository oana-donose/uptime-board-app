import React, {Component} from 'react';

class Monitor extends Component {
    render() {
        console.log("[Monitor] rendering...");
        return (
            <div className={this.statusClass(this.props) + " monitor-container"}>
                <h3>{this.props.name}</h3> 
                <h3>{this.whatStatus(this.props)}</h3>
                <h5>{this.props.uptime}%</h5>
                {/*<h6>{this.getLogs(this.props.logs)[0]}</h6>
                <h6>{this.fancyTimeFormat(this.getLogs(this.props.logs)[1])}</h6>*/}
            </div>
        )
    }

    whatStatus(props) {
        const status = this.props.status;
        if(status===0) return "paused";
        if(status===1) return "loading";
        if(status===2) return "server up";
        if(status===8) return "seems down";
        if(status===9) return "server down";
    }
    statusClass(props) {
        const status = this.props.status;
        if(status===0) return "paused";
        if(status===1) return "loading";
        if(status===2) return "server-up";
        if(status===8) return "seems-down";
        if(status===9) return "server-down";
    }
    ftf(time) {
        return "ok"
    }
    fancyTimeFormat(time)
    {   
        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    } 

    getLogs(props) {
        const logs = this.props.logs;
        var actualDate = "not assigned";
        var downDuration = 0;

        const date = new Date(logs[0].datetime*1000);
        // const hours = date.getUTCHours().toString().padStart(2, '0');
        // const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        // const seconds = date.getUTCSeconds().toString().padStart(2, '0');
        // const year = date.getUTCFullYear().toString();
        // const month = date.getUTCMonth().toString();
        // const day = date.getUTCDay().toString();
        //date.toUTCString().toString()
        this.props.logs.reverse().forEach(log => {
            if(log.type==1){
            actualDate = log.datetime;
            downDuration = log.duration;}
        });
        const actualDateJS = new Date(actualDate*1000);


        return([actualDateJS.toUTCString().toString(),downDuration]);
        
    }
   
}

export default Monitor;
//<h2>Last log:{this.props.logs.duration}</h2>