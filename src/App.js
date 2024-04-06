import { useState } from 'react';
import './App.scss';
import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import videoData from './data/video-details.json'
import CommentSection from './components/CommentSection/CommentSection';

function App() {

    const [selectedVideo, setSelectedVideo] = useState(videoData[0])
    const dateStamp = new Date(selectedVideo.timestamp)
    const dateString = dateStamp.toLocaleDateString()

    const commentArr = selectedVideo.comments

  return (
    <>
    <Header />
    <Hero image={selectedVideo.image}/>
    <main className='main'>
      <section className='current'>
        <Description 
          title={selectedVideo.title}
          channel={selectedVideo.channel}
          date={dateString}
          viewCount={selectedVideo.views}
          likeCount={selectedVideo.likes}
          description={selectedVideo.description}
          commentCount={selectedVideo.comments.length}
        />
        <CommentSection
          commentArray={commentArr}
        />
      </section>
    </main>
    </>
  );
}

export default App;
