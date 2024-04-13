import './Home.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

import Description from '../../components/Description/Description';
import Hero from '../../components/Hero/Hero';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoNav from '../../components/VideoNav/VideoNav';


function Home() {

  const [videoList, setVideoList] = useState([])

  const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos"
  const apiKey = "?api_key=?1eb2b3fb-3a57-4eb9-b61b-805cb254a776"

  useEffect(() => {
    const getVideos = async() => {
      try {
        const videos = await axios.get(`${apiUrl}${apiKey}`)
        setVideoList(videos.data)
      } catch (error) {
        console.log(error)
      }
    }
    getVideos()
  }, [])

  // const [selectedVideo, setSelectedVideo] = useState(videoData[0])
  // const dateStamp = new Date(selectedVideo.timestamp)
  // const dateString = dateStamp.toLocaleDateString()


  // const videoList = videoArray.filter((video) => {
  //   return video.id !== selectedVideo.id
  // })

  // const commentArr = selectedVideo.comments

  // const handleVideo = (selectedId) => {
  //   const currentVideo = videoData.find((video) => {
  //     if (selectedId === video.id) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   })
  //   setSelectedVideo(currentVideo)
  // }

  return (
    <>
    {/* <Hero image={selectedVideo.image}/> */}
    <main className='main'>
      {/* <section className='current'>
        <Description 
          title={selectedVideo.title}
          channel={selectedVideo.channel}
          date={dateString}
          viewCount={selectedVideo.views}
          likeCount={selectedVideo.likes}
          description={selectedVideo.description}
          // commentCount={selectedVideo.comments.length}
        />
        <CommentSection
          commentArray={commentArr}
        /> 
      </section> */}

      <VideoNav 
        videos={videoList}
        // switchVideo={handleVideo}
      /> 
    </main>
    </>
  );
}

export default Home;