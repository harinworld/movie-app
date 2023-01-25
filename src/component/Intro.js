import React from 'react'
import '../Style.scss';
import { Link } from 'react-router-dom';
import Introbg from '../img/Intro/Introbg.png';
import Movieintro from '../img/Intro/movie-intro.png';
import Musicalintro from '../img/Intro/musical-intro.png';

const Intro = () => {
  return (
    <div className='bg'>
        <img className='Introbg' src={Introbg}/>
        <div className='bg-btn'>
        <Link to="/BoxOffice"><img className='Movieintro' src={Movieintro}/></Link>
            <img src={Musicalintro}/>
        </div>
    </div>
  )
}

export default Intro