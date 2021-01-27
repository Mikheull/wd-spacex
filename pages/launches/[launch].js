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
            dots: false,
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
                    <div className="container mx-auto px-4">
                        <div className="flex md:flex-row flex-col">
                            <div className="md:w-2/3 w-full">
                                <div className="flex items-center">
                                    <p className="text-5xl font-medium text-red-400 mr-2">#{this.state.launch.flight_number}</p>
                                    <h2 className="text-5xl font-semibold text-white">{this.state.launch.name}</h2>
                                </div>
                                <div className="my-10">
                                    {
                                        (this.state.launch.success) 
                                        ? 
                                            <div className="relative flex flex-col sm:flex-row sm:items-center bg-gray-800 shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
                                                <div className="flex flex-row items-center w-full sm:w-auto pb-4 sm:pb-0">
                                                    <div className="text-green-500">
                                                        <svg className="w-6 sm:w-5 h-6 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    </div>
                                                    <div className="text-sm font-medium ml-3">Success Launch .</div>
                                                </div>
                                                <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">The mission was carried out successfully</div>
                                            </div>
                                        : 
                                        <div className="relative flex flex-col sm:flex-row sm:items-center bg-gray-800 shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
                                            <div className="flex flex-row items-center w-full sm:w-auto pb-4 sm:pb-0">
                                                <div className="text-green-500">
                                                    <svg className="w-6 sm:w-5 h-6 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                </div>
                                                <div className="text-sm font-medium ml-3">Failed Launch .</div>
                                            </div>
                                            <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">The mission was a failure</div>
                                        </div>
                                    }
                                </div>

                                <div className="relative flex flex-col sm:flex-row sm:items-center bg-gray-800 shadow rounded-md py-5 pl-6 pr-8 sm:pr-6 mb-10">
                                    <div className="flex flex-row items-center w-full sm:w-auto pb-4 sm:pb-0">
                                        <div className="text-green-500">🚀</div>
                                        <div className="text-sm font-medium ml-3">Launch Site :</div>
                                    </div>
                                    <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">{this.state.launchpad.full_name}</div>
                                </div>

                                <p class="text-2xl text-gray-400 italic w-full">{this.state.launch.details}</p>

                            </div>

                            <div className="md:w-1/3 w-full flex justify-center items-center">
                                <div>
                                    <img src={(this.state.links.patch) ? this.state.links.patch.small : './images/default/patch.svg'} alt="Mission patch" className="w-32 object-cover"/>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Crew */}
                    <div className="container mx-auto px-4 mt-24">
                        <h2 className="text-5xl font-semibold text-white">Our crew</h2>
                        {
                            (crew.length !== 0) 
                            ? 
                                <div className="lg:w-1/4 w-2/3 mx-auto mt-10">
                                    <Slider {...settings}>
                                        {crew}
                                    </Slider>
                                </div>
                            : 
                                <p class="text-2xl text-gray-400 italic w-full mt-10">There is no crew for this mission</p>
                        }
                    </div>

                    {/* Video */}
                    <div className="container mx-auto px-4 mt-24">
                        <h2 className="text-5xl font-semibold text-white">Video</h2>
                        <div className="w-2/3 mx-auto mt-10 cursor-pointer">
                            <Video data={this.state.links} />
                        </div>
                    </div>

                    {/* Rocket */}

                    {/* Gallery */}
                    
                </div>
            </div>
        )
    }
}

export default Launch;