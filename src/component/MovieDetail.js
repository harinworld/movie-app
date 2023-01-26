import React from 'react'
import './Intro'
import logo from '../img/BoxOffice/logo.png';

const MovieDetail = () => {
  return (
    <div className='mdback'>
        <a href='/'><img className='logo' src={logo} alt='로고이미지'/></a>

        <div className='detail-main'>
            <div className='movie-txt'>Movie</div>
            <div>
                <div>
                    <img className='poster' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86072/86072_1000.jpg" alt='1' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetail