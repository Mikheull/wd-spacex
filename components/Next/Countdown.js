
import React from 'react';
import moment from 'moment';

class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.decreaseCounter();
        }, 1000);
    }

    decreaseCounter() {
        const { timeTillDate, timeFormat } = this.props;
        const then = moment(timeTillDate, timeFormat);
        const now = moment();
        const countdown = moment(then - now);
        const days = countdown.format('D');
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        const seconds = countdown.format('ss');
        this.setState({ days, hours, minutes, seconds });
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;
      
        return (
            <div className="font-bold text-6xl text-white">
                <div className="countdown-wrapper">
                    <div>
                        {(days) ? days : '0'}
                        <span className="text-gray-400"> day{(days > 1) ? 's' : ''}</span>
                    </div>
                    <div>
                        {(hours) ? hours : '0'}
                        <span className="text-gray-400"> hour{(hours > 1) ? 's' : ''}</span>
                    </div>
                    <div>
                        {(minutes) ? minutes : '0'}
                        <span className="text-gray-400"> min{(minutes > 1) ? 's' : ''}</span>
                    </div>
                    <div>
                        {(seconds) ? seconds : '0'}
                        <span className="text-gray-400"> sec{(seconds > 1) ? 's' : ''}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Countdown;