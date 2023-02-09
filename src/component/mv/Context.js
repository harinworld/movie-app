import React, {  createContext, useEffect, useState } from 'react'



const Context = ({children}) => {

    // const [detail,setDetail] = useState()
    const [member, setMember] = useState(false);
    const KEY = "dcb877c29782034e77c94aac785199a2"
    const DATE = "20230112"
    
  
    // const [loading,setLoading] = useState(true);
    // const [rank,setRank] = useState([])
    const [movies,setMovies] = useState([])
    const getMovies = async() => {
      const json = await (
         await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`
      )
      ).json();
      // console.log(json.boxOfficeResult.dailyBoxOfficeList);
      const jsonArray = json.boxOfficeResult.dailyBoxOfficeList;
      
  
      let moviesData = [];
      for(let movie of jsonArray) {
        let movieName = movie.movieNm;
        const movieOpenDt = movie.openDt.replaceAll('-', '')
        let json2 = await (
                await fetch(
              `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=562TKI1106M3X3248YGA&detail=Y&listCount=500&title=${movieName}&releaseDts=${movieOpenDt}`
            )
            ).json();
        const obj = json2.Data[0].Result[0]
        obj.title = obj.title.replaceAll('!HS', '')
        obj.title = obj.title.replaceAll('!HE', '')
        obj.rank = movie.rank;

        moviesData.push(obj)
      }

      setMovies(moviesData)

    }
    useEffect(() => {
     getMovies();
    }, [])
// console.log(movies);
  return (
    <DetailContext.Provider value={{movies,member,setMember}}>
    {children}
    </DetailContext.Provider>
  )
}
export const DetailContext = createContext(null);
export default Context