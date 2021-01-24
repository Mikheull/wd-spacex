import React, {Component} from 'react';
import { Doughnut } from '@reactchartjs/react-chart.js'
import {getLaunches} from '../../helper/functions'


class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          launches: []
        }
    }
    
    componentDidMount() {
        const self = this;
        let launches = getLaunches();
        launches.then(function(result) {
            self.setState({launches: result.data.docs});
        })
    }


    render() {
        let datas = [0, 0];
        this.state.launches.map(launch => {
            datas[(launch.success) ? 1 : 0] ++;
        })

        const data = {
            labels: ["Fail", "Success"],
            datasets: [
              {
                label: "Success",
                data: datas,
                backgroundColor: ["#3e95cd", "#8e5ea2"],
              }
            ],
        }
        const options = {
            legend: { display: false },
            title: {
              display: true,
              text: 'Lancements'
            },
        }


        return (
            <Doughnut data={data} options={options} width="800" height="200" />
        )
    }
}

export default Chart;