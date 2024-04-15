import './Home.scss'
import { useParams } from 'react-router-dom';

import Description from '../../components/Description/Description';
import Hero from '../../components/Hero/Hero';
import VideoNav from '../../components/VideoNav/VideoNav';


function Home() {
  
  const { videoId } = useParams()

  return (
    <>
    <Hero 
      videoId={videoId || "84e96018-4022-434e-80bf-000ce4cd12b8"} 
    />
    <main className='main'>
      <section className='current'>
        <Description 
          videoId={videoId || "84e96018-4022-434e-80bf-000ce4cd12b8"} 
        />
      </section>  

      <VideoNav 
        videoId={videoId || "84e96018-4022-434e-80bf-000ce4cd12b8"}
      /> 
    </main>
    </>
  );
}

export default Home;