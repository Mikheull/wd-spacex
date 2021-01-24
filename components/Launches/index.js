import React, {Component} from 'react';

import {getLaunches} from '../../helper/functions'
import Card from './Card'


class LaunchesList extends Component {
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
        let launches = this.state.launches.map((data, key) =>{
            return <Card key={key} data={data} />
        })

        return(
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2 md:px-0 px-5 md:w-4/5 mx-auto w-full">
                {launches}
            </div>
        )
    }
}

export default LaunchesList;