import React, { Component } from 'react';


class Stopwatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 10,
            remainingTime: this.props.timer
        }
    }

    tick(timer) {
        this.setState({
            time: timer
        })

        let remainingTime;
        if(!this.state.remainingTime) {
            remainingTime = 0;
            console.log("time outt");
            clearInterval(this.t);

        } else {
            remainingTime = this.state.remainingTime - 1;
            this.setState({
                remainingTime
            })
        }
    }

    componentDidMount(){
        this.tick(this.props.timer);
        this.t = setInterval(() => this.tick(this.props.timer), 1000);

    }

    componentWillReceiveProps(nextProps) {
        console.log("Recieve props", nextProps);
        if(nextProps.timer !== this.state.time){
            this.setState({
                remainingTime: nextProps.timer
            })
        }
    }

    render () {
        return (
            <div>
                {this.state.remainingTime}
            </div>
        )
    }
}

export default Stopwatch;
