import './Style.scss';
import './Style-media.scss';
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link, useParams, json} from 'react-router-dom';
import Intro from './component/Intro'
import BoxOffice from './component/BoxOffice'
import MovieDetail from './component/MovieDetail'
import Context from './component/Context';
import Login from './component/Login';

function App() {

 

  return (
    <Context>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/boxoffice" element={<BoxOffice/>}/>
          <Route path="/MovieDetail/:movieSeq" element={<MovieDetail/>}/>
        </Routes>
    </BrowserRouter>
    </Context>
  );
}

export default App;
