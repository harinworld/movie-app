import React from 'react'
import './Intro'
import logo from '../img/BoxOffice/logo.png';

const MovieDetail = () => {
  return (
    <div className='mdback'>
        <a href='/'><img className='logo' src={logo} alt='로고이미지'/></a>
        <div className='background-img'>
          <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86072/86072_1000.jpg" alt='배경이미지'/>
        </div>
        <div className='background-black'></div>

        <div className='detail-main'>
            <div className='movie-txt'>Movie</div>
            <div className='movie-content'>
                <div className='movie-poster'>
                  <img className='poster' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86072/86072_1000.jpg" alt='1' />
                </div>
                <div className='content-txt'>
                  <div className='text1'>
                    <div className='title'>
                      <p className='title-content1'>아바타</p>
                      <p className='title-content2'>12</p>
                    </div>
                    <p className='title2'>Avatar : The Way of Water</p>
                    <p className='title3'>장르 | 192분 | 2022.12.14</p>
                  </div>
                  <div className='text2'>
                    <p>감독 : 제임스 카메론</p>
                    <p>
                      배우 : 조 샐다나, 샘 워싱턴, 시고니 위버, 우나 채플린,<br></br>
                      지오바니 리비시, 스티븐 랭, 케이트 윈슬렛
                    </p>
                  </div>
                  <div className='text3'>
                    <p>예매하기</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetail