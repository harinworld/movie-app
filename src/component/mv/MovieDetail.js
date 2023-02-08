import React, { useContext} from 'react'
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect} from "react";
import './Intro'
import logo from '../../img/BoxOffice/logo.png';
import Write from './Write';
import Login from './Login';
// import { Context } from './Context';
import { DetailContext } from './Context';

const MovieDetail = () => {
 
  const {movies} = useContext(DetailContext);
  // console.log("detail", movies);

  let {movieSeq} = useParams();
  // let {staff} = useParams();
  // console.log("movieSeq", movieSeq)

  // let isMovieSeq = false;

  const [moviecontent, setMoviecontent] = useState(null);

  let Year = null;
  let Month = null;
  let Day = null;
  const url = "https://www.cgv.co.kr"
  if(moviecontent !== null) {
    // console.log("aaa",moviecontent);
    // console.log("bbb",moviecontent[0].actors.actor);

    // let staffs = movies.filter((obj)=>{
    //   return obj.moviecontent[0].staffs.staff;
    // })
    // console.log("staff",staffs);

    let Date = moviecontent[0].repRlsDate;

    Year = Date.substr(0, 4);
    Month = Date.substr(4, 2);
    Day = Date.substr(6, 2);
  }

  useEffect(() => {
    if(movies !== undefined && movies.length > 0) {
      setMoviecontent(movies.filter((obj)=>{
        return obj.movieSeq == movieSeq;
      }))
    }
  }, [movies])



  // if(isMovieSeq) {
    return (
      <div className='mdback'>
        
        {moviecontent !== null && (
          <>
          <a href='/'><img className='logo' src={logo} alt='로고이미지'/></a>
          <div className='background-img'>
            <img src={moviecontent[0].posters.split("|")[0]} alt='배경이미지'/>
          </div>
          <div className='background-black'></div>

          <div className='detail-main'>
              <div className='movie-txt'>Movie
                <div className='login-box'>
                <Login/>
                </div>
              </div>

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
                      <p>감독 : {moviecontent[0].directors.director[0].directorNm}</p>
                      <span>배우 : </span>
                      {moviecontent[0].actors.actor.slice(0, 10).map((movie,key)=>
                      <span key={key}>
                        {movie.actorNm}&nbsp;&nbsp;
                      </span>
                      )}
                    </div>

                    <div className='text3'>
                      <button onClick={()=>{window.open(url)}}>예매하기</button>
                    </div>
                  </div>
                  {/* // )} */}
              </div>

              <Write/>
              

          </div>
          </>
        )}
          
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