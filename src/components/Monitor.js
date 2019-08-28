import React, {Component} from 'react';

class Monitor extends Component {
    render() {
        console.log("[Monitor] rendering...");
        return (
            <div className="monitor-container">
                <h3>{this.props.name}</h3>
                <h3>{this.props.status}</h3>
            </div>
        )
    }
}

export default Monitor;