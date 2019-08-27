import React, {Component} from 'react';

class Monitor extends Component {
    render() {
        console.log("[Monitor] rendering...");
        return (
            <div className="monitor-container">
                <h1>{this.props.name}</h1>
                <h2>{this.props.status}</h2>
            </div>
        )
    }
}

export default Monitor;