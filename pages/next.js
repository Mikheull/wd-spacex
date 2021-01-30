import React, {Component, useRef, useEffect, useState} from 'react';

import Head from 'next/head'
import Header from '../components/Header'
import Countdown from '../components/Next/Countdown'
import {getUpcomingLaunch} from '../helper/functions'

import '../styles/sass/style.scss'


class Next extends Component {

  constructor(props) {
    super(props);

    this.state = {
      launch: []
    }
  }
    
  componentDidMount() {
    const self = this;
    let launch = getUpcomingLaunch();
    launch.then(function(result) {
        self.setState({launch: result.data});
    })
  }

  componentWillUnmount() {

  }

  render() {
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
                <h1 className="text-3xl font-semibold uppercase text-red-400 mb-10"> <span className="font-black mr-4">03/</span> Upcoming</h1>
                <p className="font-extrabold text-8xl text-white">The next launch</p>
              </div>
            </div>

            <div className="flex py-10">
              <div className="mb-auto mt-auto max-w-lg">
                <h2 className="text-6xl mb-4 text-white font-bold">{this.state.launch.name}</h2>
                <Countdown timeTillDate={this.state.launch.date_utc} timeFormat="YYYY-MM-DD, h:mm a" />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Next;
