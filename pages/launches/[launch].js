import React, {Component} from 'react';
import Slider from "react-slick";

import Head from 'next/head'
import Header from '../../components/Header'
import CrewSlide from '../../components/Crew/CrewSlide'
import Video from '../../components/Video'
import {getLaunch} from '../../helper/functions'

import '../../styles/sass/style.scss'

class Launch extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            launch: {},
            launchpad: {},
            capsules: {},
            crew: {},
            links: {},
            payloads: {},
            rocket: {},
            ships: {},
        }
    }

    static async getInitialProps({query, req}) {
        const {launch} = query;
        return {launch}
    }

    componentDidMount() {
        const self = this;
        let launchpads = getLaunch(this.props.launch);
        launchpads.then(function(result) {
            self.setState({launch: result.data.docs[0]});
            self.setState({launchpad: result.data.docs[0].launchpad});
            self.setState({capsules: result.data.docs[0].capsules});
            self.setState({crew: result.data.docs[0].crew});
            self.setState({links: result.data.docs[0].links});
            self.setState({payloads: result.data.docs[0].payloads});
            self.setState({rocket: result.data.docs[0].rocket});
            self.setState({ships: result.data.docs[0].ships});
        })
    }
    
    componentWillUnmount() {
    
    }

    render() {
        let crew = null;
        crew = Object.keys(this.state.crew).map((data, key) =>{
            return <CrewSlide key={key} data={this.state.crew[data]} />
        })
        

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
      
                <Head>
                    <title>Space X</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /> 
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
        
                <Header />
                

                <div className="text-white">
                    {/* Hero */}
                    <div className="h-screen">
                        <h1 className="text-stroked-white text-8xl opacity-10 transform rotate-0 absolute top-O left-0">{this.state.launch.name}</h1>
                        <span>0%</span>
                    </div>

                    {/* Desc */}
                    <div className="">
                        <h2>{this.state.launch.name}</h2>
                        
                        {
                            (this.state.launch.success) 
                            ? 
                                <div class="relative flex flex-col sm:flex-row sm:items-center bg-gray-800 shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
                                    <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                                        <div class="text-green-500">
                                            <svg class="w-6 sm:w-5 h-6 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </div>
                                        <div class="text-sm font-medium ml-3">Success Launch .</div>
                                    </div>
                                    <div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">The mission was carried out successfully</div>
                                </div>
                            : 
                            <div class="relative flex flex-col sm:flex-row sm:items-center bg-gray-800 shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
                                <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                                    <div class="text-green-500">
                                        <svg class="w-6 sm:w-5 h-6 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div class="text-sm font-medium ml-3">Failed Launch .</div>
                                </div>
                                <div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">The mission was a failure</div>
                            </div>
                        }
                        
                        
                        <img src={(this.state.links.patch) ? this.state.links.patch.small : './images/default/patch.svg'} alt="Mission patch" className="w-24 object-cover"/>
                        <p>Desc: {this.state.launch.details}</p>
                        <p>Site: {this.state.launchpad.full_name}</p>
                    </div>

                    {/* Crew */}
                    <div className="lg:w-1/4 w-2/3 mx-auto">
                        <Slider {...settings}>
                            {crew}
                        </Slider>
                    </div>

                    {/* Video */}
                    <Video data={this.state.links} />
                </div>
            </div>
        )
    }
}

export default Launch;