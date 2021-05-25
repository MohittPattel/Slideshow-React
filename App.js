import React from 'react';
import { Carousel } from "3d-react-carousal";
import { YoutubePlayer } from "reactjs-media";

import "./styles.css";

export default function App() {
  let slides = [
    <div>
      <YoutubePlayer
        src="https://www.youtube.com/watch?v=HgJP6IAO4o4" // Reqiured
        allowFullScreen
        height={550}
        width={800}
      />
    </div>,
    <div>
      <YoutubePlayer
        src="https://www.youtube.com/watch?v=HgJP6IAO4o4" // Reqiured
        allowFullScreen
        height={550}
        width={800}
      />{" "}
    </div>,
    <div>
      <YoutubePlayer
        src="https://www.youtube.com/watch?v=HgJP6IAO4o4" // Reqiured
        allowFullScreen
        height={550}
        width={800}
      />
    </div>,
    <div>
      <YoutubePlayer
        src="https://www.youtube.com/watch?v=HgJP6IAO4o4" // Reqiured
        allowFullScreen
        height={550}
        width={800}
      />
    </div>,
    <div>
      <YoutubePlayer
        src="https://www.youtube.com/watch?v=HgJP6IAO4o4" // Reqiured
        allowFullScreen
        height={550}
        width={800}
      />
    </div>
  ];

  return (
    <div>
    <div className="header">
      <label>Slideshow in React</label>
    </div>
    <div className="container">
    <Carousel
      slides={slides}
      autoplay={true}
      showArrows={false}
      interval={10000} // 10 second later it turn
    />
    </div>
    <div className="footer">
      <h2>For more information</h2>
      <p>Github : mohittpattel</p><span> Linked : mohitpatel1899</span>
    </div>
  </div>
  );
}
