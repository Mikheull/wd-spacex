import React, {Component, useRef, useEffect, useState} from 'react';

import Head from 'next/head'
import Header from '../../components/Header'
import LaunchesList from '../../components/Launches/index'
import {getLaunchpads} from '../../helper/functions'

import '../../styles/sass/style.scss'


class Launches extends Component {

  constructor(props) {
    super(props);

    this.state = {
      launchpads: [],
      query: {},
      options: {
        "page": 1,
        "limit": 9,
        "populate": [
            "launchpad"
        ]
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  componentDidMount() {
    const self = this;
    let launchpads = getLaunchpads();
    launchpads.then(function(result) {
        self.setState({launchpads: result.data});
    })
}

  componentWillUnmount() {

  }

  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const mission = data.get('mission');
    const date = data.get('date');
    const launchpad = data.get('launchpad');
    
    let updt = {};

    if(mission){ Object.assign(updt, { name: { $regex: '.*' + mission + '.*' } }) }
    if(launchpad){ Object.assign(updt, { launchpad: launchpad }) }
    if(date){ Object.assign(updt, { date_utc: {"$gte": date+"T00:00:00.000Z", "$lte": date+"T23:59:59.000Z"} }) }

    this.setState({query: updt});
  }

  render() {
    let launchpads = this.state.launchpads.map((data, key) =>{
        return <option value={data.id} key={data.id}>{data.full_name}</option>
    })

    
    return (
      <div>
      
        <Head>
          <title>Space X</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /> 
        </Head>
  
        <Header />
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="flex py-10">
              <div className="mb-auto mt-auto max-w-lg">
                <h1 className="text-3xl font-semibold uppercase text-red-400 mb-10"> <span className="font-black mr-4">01/</span> Launches</h1>
                <p className="font-extrabold text-8xl text-white">Discover all SpaceX launches</p>
              </div>
            </div>

            <div className="max-h-96 md:h-screen md:block hidden">
              <img className="w-screen h-screen object-cover object-top" src="images/spacex-launches.jpg" alt="SpaceX Launch Banner" />
            </div>
          </div>

          <div>
            
            <div className="p-10 text-white bg-gray-800 md:w-5/6 mx-auto w-full rounded-md mb-32">  
              <form className="flex gap-2 items-end justify-between" method="POST" onSubmit={this.handleSubmit}>
                <div className="flex flex-col">
                  <label className="leading-loose font-semibold" htmlFor="mission">Mission</label>
                  <div className="relative focus-within:text-gray-600 text-gray-400">
                    <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 md:w-auto w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="FalconSat" id="mission" name="mission"/>
                    <div className="absolute left-3 top-2"><img src="./images/icons/compass.svg"/></div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose font-semibold" htmlFor="launchpad">Launchpad</label>
                  <div className="relative focus-within:text-gray-600 text-gray-400">
                    <select className="appearance-none pr-4 py-2 border focus:ring-gray-500 focus:border-gray-900 md:w-auto w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" id="launchpad" name="launchpad">
                      <option value="">All</option>
                      {launchpads}
                    </select> 
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose font-semibold" htmlFor="date">Date</label>
                  <div className="relative focus-within:text-gray-600 text-gray-400">
                    <input type="date" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 md:w-auto w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" id="date" name="date"/>
                    <div className="absolute left-3 top-2"><img src="./images/icons/calendar.svg"/></div>
                  </div>
                </div>
                
                <button className="bg-red-400 rounded-lg font-bold text-white text-center px-6 py-2 transition duration-300 ease-in-out hover:bg-red-500 mr-6" type="submit">Search</button>
              </form>
            </div>
            
            <LaunchesList query={this.state.query} options={this.state.options} />
          </div>
        </div>
        

      </div>
    );
  }
}

export default Launches;
