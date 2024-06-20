import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import HalalGuide from "./pages/HalalGuide/HalalGuide";
import Family from "./pages/Family/Family";
import Media from "./pages/Media/Media";
import MediaArticle from "./pages/MediaArticle/MediaArticle";
import Videos from "./pages/Videos/Videos";
import Audios from "./pages/Audios/Audios";
import ArticleHeader from "./components/ArticleHeader/ArticleHeader";
import OtherArticle from "./pages/OtherArticle/OtherArticle";
import ArticleFooter from "./components/ArticleFooter/ArticleFooter";
import Internship from "./pages/Internship/Internship";
import VolunteerSection from "./pages/Volunteer/Volunteer";
import Volunteer from "./pages/Volunteer/Volunteer";
import Study from "./pages/Study/Study";
import Lectures from "./pages/Lectures/Lectures";
import Projects from "./pages/Projects/Projects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Article /> */}
      {/* <HalalGuide /> */}
      {/* <Family /> */}
      {/* <Media /> */}
      {/* <MediaArticle /> */}
      {/* <Videos /> */}
      {/* <Audios /> */}
      {/* <Header /> */}
      {/* <ArticleHeader /> */}
      {/* <OtherArticle /> */}
      {/* <Internship /> */}
      {/* <Volunteer /> */}
      {/* <Study /> */}
      {/* <Lectures /> */}
      {/* <Projects /> */}
      <Router>
        <div className="App">
          <Routes basename="/umma"> 
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<Article />} />
            <Route path="/media" element={<Media />} />
            <Route path="/halal-guide" element={<HalalGuide />} />
            <Route path="/family" element={<Family />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
