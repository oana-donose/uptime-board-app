import React, {Component} from 'react';

class Monitor extends Component {
    render() {
        console.log("[Monitor] rendering...");
        return (
            <div className={this.statusClass(this.props) + " monitor-container"}>
                <h3>{this.props.name}</h3>
                
                <h3 >{this.whatStatus(this.props)}</h3>
            </div>
        )
    }
    whatStatus(props) {
        const status = this.props.status;
        if(status===0) return "paused";
        if(status===1) return "loading";
        if(status===2) return "server up";
        if(status==8) return "seems down";
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
}

export default Monitor;