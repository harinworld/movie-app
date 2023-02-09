import React, {useContext, useState, useEffect, useTransition, createContext} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../../Style.scss'
import '../../css/musical.scss'
import logo from '../../img/BoxOffice/logo.png';
import Loading from './Loading';
import Write from '../mv/Write';
import Login from '../mv/Login';
const xml2json = require('node-xml2json');

const Musical_info = () => {
  const [isPending, startTransition] = useTransition();
  const [isLoading, setLoading] = useState(true);
  
  const location = useLocation();
  console.log('location', location)
  const mt20id = location.state.index;// 공연 조회용 id
  const idx = location.state.id;
  const _data = location.state.data;

  const _cloudsv_url = 'https://port-0-kopis-api-1b5xkk2fldl11gxs.gksl2.cloudtype.app/'
  var apiurl = _cloudsv_url + 'thmu_info';
  // var apiurl = 'http://localhost:5000/thmu_info';
  console.log('apiurl', apiurl)

  const [info, setInfo] = useState();

  // handler 
  useEffect(()=>{
    setLoading(true);
    function getInfo() {
      axios.get(apiurl, {
        params: { id: mt20id }
      })
        .then(res => {
          startTransition(async()=>{
            console.log('res', res)
            var _json = await xml2json.parser(res.data);
            console.log("_json", _json);
            setInfo(_json.dbs.db);
          });
          setLoading(false)
        })
      }
    getInfo();
  },[])
  // // 공연 관련 세부정보
  // const t_url = 'http://www.kopis.or.kr/openApi/restful/pblprfr/'
  //   + mt20id
  //   + '?service=3e0f7775aa2a40238ae5d390ad13362c';
  // const thmu_info_url = encodeURI(t_url);
  // console.log(thmu_info_url);

  // useEffect(()=>{
  //   function getInfoData() {
  //     axios.get(thmu_info_url)
  //       .then(res => {
  //         startTransition(async()=>{
  //           var _json = await xml2json.parser(res.data);
  //           setInfo(_json);
  //         });
  //       })
  //   }
  //   getInfoData();
  // },[])

  console.log("info", info);

function ifEmpty(obj) {
  if(obj.constructor !== Object) {
    return false;
  }
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true
}

if(!info) return (<Loading/>)
  return (
    <div className='mv-main'>
      <div className='mv-logo'>
        <a href='/'><img className='logo' src={logo} alt='로고이미지'/></a>
      </div>
      <div className='background-img'>
        <img src={info.poster} alt='배경이미지'/>
      </div>
      <div className='background-black'></div>
        <div className='mv-wrap'>
          <div className='movie-txt'>
            <span>Musical</span>
            <div className='login-box'>
              <Login/>
            </div>
          </div>
          <div className='mv-wrap-top'>
            <span className='mv-wrap-img'>
              <img src={info.poster} alt='뮤지컬포스터'></img>
            </span>
            <div className='mv-context'>
                <h1>{info.prfnm}</h1>
                <h2>{info.genrenm} | {info.prfage}<br/>러닝타임 {info.prfruntime}</h2>
                <h2>{info.prfpdfrom} ~ {info.prfpdto}</h2>
                <p>{ifEmpty(info.prfcrew) ? "":'감독 | '+info.prfcrew}</p>
                <p>{ifEmpty(info.prfcast) ? "":'출연진 | '+info.prfcast}</p>
                <p>장소 | {info.fcltynm}</p>
                <p>{info.dtguidance}</p>
                <button type='button' onClick={()=>window.open(`https://tickets.interpark.com/search?keyword=${info.prfnm}`)}>예매하기</button>
            </div>
          </div>
          <div className='mv-review'>
              <Write />
              {/* <h2>관람평</h2>
              <div className='mv-review-input'>
                <input placeholder='관람후기작성'></input>
                <button>등록하기</button>
              </div>
              <ul>
                <li>후기후기후기후기후기후기후기</li>
              </ul> */}
          </div>
        </div>
    </div>
  )
}

export default Musical_info