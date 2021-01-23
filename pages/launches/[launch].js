import React, {Component} from 'react';

class Launch extends Component {
    static async getInitialProps({query, req}) {
        const {launch} = query;

        return {launch}
    }

    render() {
        return (
            <p>{this.props.launch}</p>
        )
    }
}

export default Launch;