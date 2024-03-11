import React from 'react';
import video from '../assets/portfolio.mp4';
import './VideoAddStyles.css';

const VideoApp = () =>{
	return(
		<div className='video-container'>
			<video src={video} autoPlay loop controls/>
		</div>
	)
}

export default VideoApp;