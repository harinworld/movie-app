import React, { useContext  } from 'react'
import './MovieDetail'
import './Intro'
import logo from '../img/BoxOffice/logo.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination,Mousewheel, Autoplay } from "swiper";
import { Navigation } from "swiper";
import MovieDetail from './MovieDetail';
import { DetailContext } from './Context';
import { Link } from 'react-router-dom';

const BoxOffice = () => {
  // const [detail,setDetail] = useState()
  // const DetailContext = createContext(null);
  // const SetDetailContext = createContext(null);

  // const KEY = "dcb877c29782034e77c94aac785199a2"
  // const DATE = "20230127"
  

  // const [loading,setLoading] = useState(true);
  // const [rank,setRank] = useState([])
  // const [movies,setMovies] = useState([])
  // const getMovies = async() => {
  //   const json = await (
  //      await fetch(
  //     `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`
  //   )
  //   ).json();
  //   // console.log(json.boxOfficeResult.dailyBoxOfficeList);
  //   const jsonArray = json.boxOfficeResult.dailyBoxOfficeList;
    

  //   let moviesData = [];
  //   jsonArray.forEach(async(movie,key)=>{
  //     let moveName = movie.movieNm;
  //     let json2 = await (
  //             await fetch(
  //           `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=562TKI1106M3X3248YGA&detail=Y&title=${moveName}`
  //         )
  //         ).json();
          
  //         let max = 0;
  //         json2.Data[0].Result.map((obj)=>{
  //           // if()
  //           if(Number(obj.modDate) > max)
  //             max = Number(obj.modDate);
  //           }
  //         )
          
  //         let data = json2.Data[0].Result.filter(obj=>{
  //           obj.title = obj.title.replaceAll('!HS','');
  //           obj.title = obj.title.replaceAll('!HE','');
  //           obj.rank = movie.rank;
  //           return Number(obj.modDate) == max
  //         })
  //         moviesData.push(...data);
         
  //         if(key == jsonArray.length-1) {
  //           setTimeout(()=>{
  //             moviesData.sort((a,b)=>{
  //               let nA = Number(a.rank), nB = Number(b.rank);
  //               if(nA > nB) return 1;
  //               if(nA < nB) return -1;
  //               return 0;
  //             })
  //             setMovies(moviesData);
  //           },500)
  //         }
  //       })
  // }
  // useEffect(() => {
  //  getMovies();
  // }, [])


  const {movies} = useContext(DetailContext);
  // console.log(movies)


  return (
    // <SetDetailContext.Provider value={{setDetail}}>
    // <DetailContext.Provider value={{detail}}>
    <div className='boback'>
        <a href='/'><img className='logo' src={logo} alt='로고이미지'/></a>

        <div className='first-swiper'>
          <Swiper
            navigation={true}
            modules={[Navigation,Autoplay]}
            // mousewheel={true}
            loop={true}
            autoplay={{ delay: 2000 }}
            className="mainSwiper">
              
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86072/86072210859_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86720/86720210682_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000083/83203/83203210967_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86689/86689211173_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86676/86676211020_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86503/86503208178_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86728/86728211036_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86481/86481210721_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86489/86489210937_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86670/86670210349_727.jpg" alt='1' />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='boxofficetxt'>
            Box Office
        </div>

        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        // pagination={{ clickable: true }}
        centeredSlides={true}
        slidesPerView={4}

        breakpoints={{
          1200:{
            slidesPerView:4
          },
          375:{
            slidesPerView:2
          }
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 120,
          modifier: 2,
          slideShadows: true,
        }}
        mousewheel={true}
        modules={[EffectCoverflow, Pagination, Mousewheel]}
        className="mySwiper"
      >  

          <div className='second-swiper'>
            {movies&&movies.map((movie,key) =>
            <SwiperSlide key={key}>
              <div className='item'>
                <div className='item-img'>
                  <img className='boxofficesp' src={movie.posters.split("|")[0]} alt='1' />
                </div>
                <div className='hover-swipertxt'>
                  <p><Link to={`/MovieDetail/${movie.movieSeq}`}>상세보기</Link></p>
                  <p><Link to='https://www.cgv.co.kr/'>예매하기</Link></p>
                </div>
              </div>
              <div key={movie.movieCd} className='second-swipertxt'>
                  <h4>{movie.rank}위</h4>
                  <p>{movie.title}</p>
              </div>
            </SwiperSlide>)}
            
            {/* <SwiperSlide>
              <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86072/86072_1000.jpg" alt='2'/>
            </SwiperSlide>
            <SwiperSlide>
              <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86750/86750_1000.jpg" alt='3'/>
            </SwiperSlide>
            <SwiperSlide>
              <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86720/86720_1000.jpg" alt='4'/>
            </SwiperSlide>
            <SwiperSlide>
              <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86157/86157_1000.jpg" alt='5'/>
            </SwiperSlide>
            <SwiperSlide>
              <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86751/86751_1000.jpg" alt='6'/>
            </SwiperSlide>
            <SwiperSlide>
              <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86728/86728_1000.jpg" alt='7'/>
            </SwiperSlide>
            <SwiperSlide>
              <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86754/86754_1000.jpg" alt='8'/>
            </SwiperSlide>
            <SwiperSlide>
              <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86745/86745_1000.jpg" alt='9'/>
            </SwiperSlide>
            <SwiperSlide>
              <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000083/83203/83203_1000.jpg" alt='10'/>
            </SwiperSlide> */}
          </div>
      </Swiper>
    </div>
    // </DetailContext.Provider>
    // </SetDetailContext.Provider>
  )
}
// export const DetailContext = React.createContext(null)

export default BoxOffice