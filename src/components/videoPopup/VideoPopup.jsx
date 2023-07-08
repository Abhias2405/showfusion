import React from "react";
import ReactPlayer from "react-player/youtube";

import "./style.scss";

import noVideoAvailableImg from "../../assets/noVideoAvailableImg.png"

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  const renderVideoContent = () => {
    if (videoId) {
      return (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          playing={true}
        />
      );
    } else {
      return (
        <div className="noVideoAvailable">
          <img src={noVideoAvailableImg} alt="No Video Available" />
        </div>
      );
    }
  };

  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        {renderVideoContent()}
      </div>
    </div>
  );
};

export default VideoPopup;
