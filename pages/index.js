import React, {Component, useRef, useEffect, useState} from 'react';

import Head from 'next/head'
import Header from '../components/Header'
import Chart from '../components/Home/Chart'

import '../styles/sass/style.scss'


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }
    
  componentDidMount(){
    
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="relative">
      
        <Head>
          <title>Space X</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /> 
        </Head>
  
        <div className="container mx-auto">
          <Header />

          <div>
            <div className="h-screen flex items-center justify-center">
              <h1 className="text-stroked-white text-9xl">Space X</h1>
            </div>
            <Chart key="chart-01" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
