import { useState } from 'react';
import './App.scss';
import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import videoData from './data/video-details.json'

function App() {

    const [selectedVideo, setSelectedVideo] = useState(videoData[0])
    console.log(selectedVideo)

  return (
    <>
    <Header />
    <Hero image={selectedVideo.image}/>
    <main className='main'>
      <Description />
    </main>
    </>
  );
}

export default App;
