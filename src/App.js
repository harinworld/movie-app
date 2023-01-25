import './Style.scss';
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Intro from './component/Intro'
import BoxOffice from './component/BoxOffice'

function App() {
//   let today = new Date();
//   console.log(
//     today.getFullYear(),
//     today.getMonth()+1,
//     today.getDate(),
//   )
//   const KEY = "dcb877c29782034e77c94aac785199a2"
  
//   const DATE = "20230121"
  

//   const [loading,setLoading] = useState(true);
//   const [movies,setMovies] = useState([])
//   const [movieEn,setMovieEn] = useState([])
//   const getMovies = async() => {
    
//     const json = await (
//        await fetch(
//       `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`
//     )
//     ).json();

//     let arrMovieEn =[];

//     let promiss = new Promise((resolve,resject)=>{
//       json.boxOfficeResult.dailyBoxOfficeList.forEach(async (obj,key)=>{
//         arrMovieEn.push(await(await fetch(
//           `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${KEY}&movieCd=${obj.movieCd}`
//         )).json()); 
//         if(arrMovieEn.length == 10) resolve('end')
      
//       })
//     })
//     .then((state)=>{
//       setMovieEn(arrMovieEn);
//       setLoading(false);
//     });

//     setMovies(json.boxOfficeResult.dailyBoxOfficeList);
//     // console.log(json.boxOfficeResult.dailyBoxOfficeList);
    
//   }
//   useEffect(() => {
//    getMovies();
//   }, [])
// if(movieEn[0] !== undefined){
//   console.log('asdfsadf',movieEn[0].movieInfoResult.movieInfo)
// }
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/boxoffice" element={<BoxOffice/>}/>
          {/* <Route path="/write" element={<Write/>}/> */}
        </Routes>
    </BrowserRouter>
    // <div>
    //   {
    //     loading ? <h1>Loading…</h1> :
    //     <div>
    //         {movies.map((movie,key) => 
    //         <div key={movie.movieCd}>       
    //           <h3>{movie.rank}위</h3>
    //           <p>{movie.movieNm}</p>
    //           <p>{movieEn[key]&&movieEn[key].movieInfoResult.movieInfo.movieNmEn}</p>
    //         </div>)} 
    //         {/* <Detail/> */}
    //     </div>
    //   }
    // </div>
  );
}

export default App;
