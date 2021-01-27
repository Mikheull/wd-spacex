import React, {Component} from 'react';
import Slider from "react-slick";

import Head from 'next/head'
import Header from '../components/Header'
import CrewSlide from '../components/Crew/CrewSlide'
import {getCrew} from '../helper/functions'

import '../styles/sass/style.scss'


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      crew: {},
    }
  }
    
  componentDidMount(){
    const self = this;
    let crew = getCrew();
    crew.then(function(result) {
        self.setState({crew: result.data});
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
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

    return (
      <div className="relative">
      
        <Head>
          <title>Space X</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /> 
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
  
        <div className="container mx-auto">
          <Header />

          <div>
            <div className="h-screen flex items-center justify-center">
              <h1 className="text-stroked-white text-9xl">Space X</h1>
            </div>


            <div className="">
                <Slider {...settings}>
                    {crew}
                </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
