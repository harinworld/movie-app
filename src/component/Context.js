import React, {  createContext, useEffect, useState } from 'react'



const Context = ({children}) => {

    // const [detail,setDetail] = useState()
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
      jsonArray.forEach(async(movie,key)=>{
        let moveName = movie.movieNm;
        let json2 = await (
                await fetch(
              `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=562TKI1106M3X3248YGA&detail=Y&title=${moveName}`
            )
            ).json();
            
            let max = 0;
            json2.Data[0].Result.map((obj)=>{
              // if()
              if(Number(obj.modDate) > max)
                max = Number(obj.modDate);
              }
            )
            
            let data = json2.Data[0].Result.filter(obj=>{
              obj.title = obj.title.replaceAll('!HS','');
              obj.title = obj.title.replaceAll('!HE','');
              obj.rank = movie.rank;
              return Number(obj.modDate) == max
            })
            moviesData.push(...data);
           
            if(key == jsonArray.length-1) {
              setTimeout(()=>{
                moviesData.sort((a,b)=>{
                  let nA = Number(a.rank), nB = Number(b.rank);
                  if(nA > nB) return 1;
                  if(nA < nB) return -1;
                  return 0;
                })
                setMovies(moviesData);
              },500)
            }
          })
    }
    useEffect(() => {
     getMovies();
    }, [])
console.log(movies);
  return (
    <DetailContext.Provider value={{movies}}>
    {children}
    </DetailContext.Provider>
  )
}
export const DetailContext = createContext(null);
export default Context