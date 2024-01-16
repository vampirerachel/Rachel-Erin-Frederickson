
import  { useEffect } from 'react';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import "./videoplayer.scss"

const VideoPlayer = () => {
  const storageKey = "videoplayer-current-time";

  useEffect(() => {
    const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

    const handleTimeUpdate = throttle((currentTime) => {
      localStorage.setItem(storageKey, currentTime.seconds);
    }, 1000);

    player.on('timeupdate', handleTimeUpdate);

    const setCurrentTime = () => {
      const currentTimeObj = localStorage.getItem(storageKey);
      if (currentTimeObj) {
        player.setCurrentTime(currentTimeObj);
      }
    };

    setCurrentTime();

    // Cleanup function to remove event listener
    return () => {
      player.off('timeupdate', handleTimeUpdate);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="wrapper">
    <div className='vcontainer'>
<p className='description'>
      This JavaScript script demonstrates my proficiency in utilizing the Vimeo
      player library to create a seamless video experience:
    </p>
    <ul className='featureList'>
      <li>
        <strong>Persistent Playback:</strong> Stores and retrieves video
        playback time using localStorage for a continuous user experience.
      </li>
      <li>
        <strong>Efficient Event Handling:</strong> Implements throttled event
        listeners for optimized performance during video updates.
      </li>
      <li>
        <strong>Initialization and Cleanup:</strong> Ensures proper
        initialization and cleanup of the Vimeo player, showcasing memory
        management skills.
      </li>
      <li>
        <strong>User Interface:</strong> Embeds a user-friendly Vimeo video
        with a &quot;Go back&quot; link for enhanced navigation.
      </li>
    </ul>
      <iframe
        className='vimeoPlayer'
        id="vimeo-player"
        src="https://player.vimeo.com/video/385907797"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; encrypted-media"
      ></iframe>
    </div></div>
  );
};

export default VideoPlayer;
