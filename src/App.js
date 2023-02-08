import './Style.scss'
import './Style-media.scss';
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link, useParams, json} from 'react-router-dom';
import Intro from './component/mv/Intro'
import BoxOffice from './component/mv/BoxOffice'
import MovieDetail from './component/mv/MovieDetail'
import Context from './component/mv/Context';
import Login from './component/mv/Login';
import MusicalInfo from './component/thm/Musical_info';
import MusicalMain from './component/thm/Musical_main';

function App() {

 

  return (
    <Context>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/boxoffice" element={<BoxOffice/>}/>
          <Route path="/MovieDetail/:movieSeq" element={<MovieDetail/>}/>
          <Route path='/thmuMain' element={<MusicalMain />} />
          <Route path='/thmuInfo' element={<MusicalInfo />} component={MusicalMain}></Route>
        </Routes>
    </BrowserRouter>
    </Context>
  );
}

export default App;
