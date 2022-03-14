import VideoPlayer from 'react-video-js-player'
import './App.css';
import Car from './video/car.mp4';
function App() {
  const videoSrc = Car;
  const poster = 'https://betraining.org/wp-content/uploads/2013/10/return-of-video-to-elearning.jpg';
  return (
    <div className="App">
      <VideoPlayer src={videoSrc} playbackRates={[0.5, 1, 2, 3, 4, 5]} poster={poster} width={720} height={420} />
      <video autoPlay loop muted style={{}} >
        <source src={Car} type='video/mp4' />
      </video>
    </div>
  );
}

export default App;
