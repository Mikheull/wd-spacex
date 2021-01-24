import React, {Component} from 'react';

// Components
import Link from 'next/link'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
				<div className="flex justify-between px-8 py-6">
					<a href="#" className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg focus:outline-none focus:shadow-outline">Mika SpaceX</a>
					<button className="rounded-lg focus:outline-none focus:shadow-outline">
						<svg fill="#FFF" viewBox="0 0 20 20" className="w-6 h-6">
							<path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
					</button>
				</div>
            </header>
        )
    }
}

export default Header;