import React from 'react'
import Websocket from 'react-websocket'

class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ws: null
        };
    }

    componentDidMount() {
        this.connect();
    }

    timeout = 250

     @function connect
     
    connect = () => {
        // var ws = new WebSocket("ws://localhost:3000/ws") 
        let that = this
        var connectInterval;

        // websocket onopen event listener
        ws.onopen = () => {
            console.log("connected websocket main component");

            this.setState({ ws: ws });

            that.timeout = 250 
            clearTimeout(connectInterval)
        };

        // websocket onclose event listener
        ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );

            that.timeout = that.timeout + that.timeout
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout))
        };

        // websocket onerror event listener
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
        };
    };
 
    @function connect 

    check = () => {
        const { ws } = this.state;
        if (!ws || ws.readyState == WebSocket.CLOSED) this.connect()
    };

    render() {
        return <ChildComponent websocket={this.state.ws} />;
    }
}

export Notifications