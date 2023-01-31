import React, { useContext} from 'react'
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect} from "react";
import './Intro'
import logo from '../img/BoxOffice/logo.png';
import Write from './Write';
// import { Context } from './Context';
import { DetailContext } from './Context';

const MovieDetail = () => {
 
  const {movies} = useContext(DetailContext);
  // console.log("detail", movies);

  let {movieSeq} = useParams();
  // let {staff} = useParams();
  // console.log("movieSeq", movieSeq)

  // let isMovieSeq = false;

  let moviecontent = movies.filter((obj)=>{
    return obj.movieSeq == movieSeq;
  })
  console.log("aaa",moviecontent);

  // let staffs = moviecontent.filter((obj)=>{
  //   return obj.staffs == staff;
  // })
  // console.log("staff",staffs);

  const url = "https://www.cgv.co.kr"
  let Date = moviecontent[0].repRlsDate;
  let Year = Date.substr(0, 4);
  let Month = Date.substr(4, 2);
  let Day = Date.substr(6, 2);

  // if(isMovieSeq) {
    return (
      <div className='mdback'>
        
          <a href='/'><img className='logo' src={logo} alt='로고이미지'/></a>
          <div className='background-img'>
            <img src={moviecontent[0].posters.split("|")[0]} alt='배경이미지'/>
          </div>
          <div className='background-black'></div>

          <div className='detail-main'>
              <div className='movie-txt'>Movie</div>
              <div className='movie-content'>
                
                  <div className='movie-poster'>
                    <img className='poster' src={moviecontent[0].posters.split("|")[0]} alt='1' />
                  </div>
            
                  <div className='content-txt'>
                    <div className='text1'>
                      <div className='title'>
                        <p className='title-content1'>{moviecontent[0].title}</p>
                      </div>
                      <p className='title2'>{moviecontent[0].titleEng}</p>
                      <p className='title3'>{moviecontent[0].genre.split(",")[0]} | {moviecontent[0].runtime}분 | {Year}-{Month}-{Day}</p>
                    </div>

                    <div className='text2'>
                      <p>감독 : 제임스 카메론</p>
                      <p>
                        배우 : 조 샐다나, 샘 워싱턴, 시고니 위버, 우나 채플린,<br></br>
                        지오바니 리비시, 스티븐 랭, 케이트 윈슬렛
                      </p>
                    </div>

                    <div className='text3'>
                      <button onClick={()=>{window.open(url)}}>예매하기</button>
                    </div>
                  </div>
                  {/* // )} */}
              </div>

              <Write/>

          </div>
      </div>
    )
  // }
  // else {
  //   return (
  //     <div>loading</div>
  //   )
  // }
}

export default MovieDetail