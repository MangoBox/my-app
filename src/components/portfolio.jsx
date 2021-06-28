import React from "react";
import Resizer from "react-image-file-resizer";
import ReactFileReader from 'react-file-reader';

//import stock
import stock from "../img/projects/cyclehub/InstaStoryCaption.png";
import stock1 from "../img/projects/cyclehub/InstaStoryCaption.png";
import stock2 from "../img/projects/cyclehub/InstaStoryCaption.png";
import stock3 from "../img/projects/cyclehub/InstaStoryCaption.png";
import stock4 from "../img/projects/cyclehub/InstaStoryCaption.png";
import stock5 from "../img/projects/cyclehub/InstaStoryCaption.png";

import pj_cyclehub from "../img/projects/cyclehub/InstaStoryCaption.png";
import pj_startracker from "../img/projects/starTracker/StarTracker.jpg";

import pj_racing from "../img/projects/racingDashboard/RacingDashboard.jpg";
import worksList from "../setting/works.js";
let pj_extractor = "https://diyodemag.com/_images/5eccc700c672e05373af7274,1200,600";
let pj_dashboard = "https://diyodemag.com/_images/5db2b862c672e0c34e24f691";


function createGalleryImages(workItem) {
  let content = [];
  for(var i = 0; i < workItem.images.length; i++) {
    if(i != workItem.display) {
      content.push (
        <a
          href={workItem.images[i].default}
          data-lightbox={workItem.title}
          style={{ display: "none" }}
        >
        jsx-a11y/anchor-has-content warning
        </a>);
    }
  }
  return content;
}


function createGalleryItems(works) {
  let content = [];
  for(var i = 0; i < works.length; i++) {
    content.push(
    <div className="col-md-4">
      <div className="work-box">
        <a href={works[i].images[works[i].display].default} data-lightbox={works[i].title}>
          <div className="work-img">
          
          <img src={works[i].images[works[i].display].default} alt="" className="img-fluid" />
          </div>
          <div className="work-content">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="w-title">{works[i].title}</h2>
                <div className="w-more">
                  <span className="w-ctegory">
                  {works[i].subtitle}
                  </span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="w-like">
                  <span className="ion-ios-plus-outline"></span>
                </div>
              </div>
            </div>
          </div>
        </a>
        {createGalleryImages(worksList[i])}
      </div>
    </div>
    );
  }
  return content;
}


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Stuff I've worked on!
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
          {createGalleryItems(worksList)}
        </div>
      </div>
      </section>
    );
  }
}

export default Portfolio;
