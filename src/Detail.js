import React,{useState,useEffect} from "react";

const Detail = (movieInfo) => {

    const KEY = "dcb877c29782034e77c94aac785199a2"
    const MOVIECD = "20190808"

    // const [load,setLoad] = useState(true);
    const [moviesdetail,setMoviesdetail] = useState([])

    const getMoviesdetail = async() => {
        const json = await (
           await fetch(
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${KEY}&movieCd=${MOVIECD}`
        )
        ).json();
        setMoviesdetail(json.movieInfoResult.movieInfo);
        // console.log(json.movieInfoResult.movieInfo);
        // setLoad(false);
      }
      useEffect(() => {
        getMoviesdetail();
      }, [])

  return (
        // <div>
        //     {Object.values(moviesdetail).map(movie => 
        //     <div key={movie.movieCd}>
        //       <p>{movie.movieNmEn}</p>
        //     </div>)} 
        // </div>

            <p value={JSON.stringify(movieInfo)}>
              {movieInfo.movieNmEn}</p>

  )
}

export default Detail

