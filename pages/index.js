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
      <div className="container mx-auto">
      
        <Head>
          <title>Space X</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /> 
        </Head>
  
        <Header />
        <div>
          a$

          <Chart key="chart-01" />
        </div>
      </div>
    );
  }
}

export default Home;
