import React from 'react'
import '../../Style.scss';
import { Link } from 'react-router-dom';
import Introbg from '../../img/Intro/Introbg.png';
import Movieintro from '../../img/Intro/movie-intro.png';
import Musicalintro from '../../img/Intro/musical-intro.png';

const Intro = () => {
  return (
    <div className='bg'>
      <div className='banner'>
        <div className='banner-text'>MOVIE MUSICAL</div>
        <div className='banner-text'>MOVIE MUSICAL</div>
        <div className='banner-text'>MOVIE MUSICAL</div>
        <div className='banner-text'>MOVIE MUSICAL</div>
      </div>
        <img className='Introbg' src={Introbg}/>
        <div className='bg-btn'>
          <Link to="/BoxOffice">
            <img className='Movieintro' src={Movieintro}/>
          </Link>
          <Link to='/thmuMain'>
            <img className='Musicalintro' src={Musicalintro}/>
          </Link>
        </div>
    </div>
  )
}

export default Intro