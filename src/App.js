import { useState } from "react";
import Dropzone from "react-dropzone";
import ReactPlayer from "react-player";
import VideoPlayer from "react-video-js-player";
import "./App.css";
import Car from "./video/car.mp4";
function App() {
  const videoSrc = Car;
  const poster =
    "https://betraining.org/wp-content/uploads/2013/10/return-of-video-to-elearning.jpg";
  const onProgress = (state) => {
    console.log(state);
    if (state.played >= 0.7) {
      //alert('123')
      // gần hết video thì vào đây
    }
  };
  const [url, setUrl] = useState("");
  const handlePreview = (data) => {
    console.log(data);
    const reader = new FileReader();
    var url = URL.createObjectURL(data[0]);
    console.log(url);
    //setUrl(url)
    reader.onload = () => {
      if (reader.readyState === 2) {
        // console.log(reader.result)
        setUrl(reader.result);
      }
    };
    // reader.readAsDataURL(file);
    reader.readAsDataURL(data[0]);
  };
  const onPlayerReady = (player) => {
    console.log("Player is ready: ", player);
   // this.player = player;
}

const onVideoPlay = (duration) => {
    console.log("Video played at: ", duration);
}

const onVideoPause = (duration) => {
    console.log("Video paused at: ", duration);
}

const onVideoTimeUpdate = (duration) => {
    console.log("Time updated: ", duration);
}

const onVideoSeeking = (duration) => {
    console.log("Video seeking: ", duration);
}

const onVideoSeeked = (from, to) => {
    console.log(`Video seeked from ${from} to ${to}`);
}

const onVideoEnd = () => {
    console.log("Video ended");
}
  return (
    <div className="App">
      <ReactPlayer
        playing={true} // tự động play video
        volume={1} // default volume là 1
        mutex={false} // tắt âm lượng
        onProgress={onProgress}
        //width="100%" height="100%"
        onReady={() => console.log("onReady")} // ms vào xem vào đây
        onStart={() => console.log("onStart")} // start video sẽ vào đây
        onPause={() => console.log("onPause")} // pause video sẽ vào đây
        onEnded={() => console.log("onEnded")} // hết video sẽ vào đây
        onError={() => console.log("onError")} // url lỗi sẽ vào đây -> bỏ 1 k1y tự đi
        url="https://www.youtube.com/watch?v=Rq5SEhs9lws"
        controls={true}
        loop={true}
        // width={}
        // height={}
        // style={}
        // light={true}
      />
      <VideoPlayer
        src={videoSrc}
        controls={true}
        playbackRates={[0.5, 1, 2, 3, 4, 5]}
        poster={poster}
        width={720}
        height={420}
        // className={}
        onReady={onPlayerReady}
        onPlay={onVideoPlay}
        autoplay={true}
        onPause={onVideoPause}
        onTimeUpdate={onVideoTimeUpdate}
        onSeeking={onVideoSeeking}
        onSeeked={onVideoSeeked}
        onEnd={onVideoEnd}
      />
      <video width="1000px" preload="preload" poster={poster} audio="muted" controls="controls" autoPlay="autoPlay" height="1000px" loop="loop" muted style={{}}>
        <source src={Car} type="video/mp4" />
      </video>
      <Dropzone
        multiple={false}
        maxSize={8000000000}
        onDrop={(acceptedFiles) => handlePreview(acceptedFiles)}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              style={{
                width: "300px",
                height: "240px",
                border: "1px solid red",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      <img src={url} alt="" />
     {url && url.length > 0 && <video autoPlay loop muted style={{}}>
        <source src={url} type="video/mp4" />
      </video> } 
    </div>
  );
}

export default App;
