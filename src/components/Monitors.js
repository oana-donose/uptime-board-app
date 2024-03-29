import React, { Component } from 'react';

import Monitor from './Monitor';

class Monitors extends Component {
    render() {
        console.log("[Monitors] rendering...");
        return this.props.monitors.map((monitor) => {
            return(
                <Monitor
                name={monitor.friendly_name}
                status={monitor.status}
                logs={monitor.logs}
                uptime={monitor.all_time_uptime_ratio}/>
            );
        });

    }
}

export default Monitors;