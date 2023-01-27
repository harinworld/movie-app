import React from 'react'
import { useState, useEffect } from "react";
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

const BoxOffice = () => {

  const KEY = "dcb877c29782034e77c94aac785199a2"
  const DATE = "20230121"
  

  const [loading,setLoading] = useState(true);
  const [rank,setRank] = useState([])
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
            if(Number(obj.modDate) > max)
              max = Number(obj.modDate);
            }
          )

        //   let max = 0;
        //   json2.Data[0].Result.map((obj)=>{
        //     if(obj.Codes.Code.CodeNo != '') {
        //       // 코드끼리비교
        //       console.log(obj.CodeNo == movie.movieCd);
        //     } else {
        //       //영문명 포함되는지 비교
        //     }
        // })

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

    // setRank(json.boxOfficeResult.dailyBoxOfficeList);
    
    // setLoading(false);
  }
  useEffect(() => {
   getMovies();
  }, [])

  console.log(movies)

  return (
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
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86072/86072210856_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86072/86072210854_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86729/86729211579_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86729/86729211578_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86729/86729211577_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86729/86729211576_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86729/86729211581_727.png" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86157/86157211607_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86157/86157211428_727.jpg" alt='1' />
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
        // spaceBetween={250}
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
                  <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86157/86157_1000.jpg" alt='1' />
                </div>
                <div className='hover-swipertxt'>
                  <p><a href='./MovieDetail'>상세보기</a></p>
                  <p><a href='https://www.cgv.co.kr/'>예매하기</a></p>
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
  )
}

export default BoxOffice