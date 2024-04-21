import { useEffect, useState } from 'react';
import axios from 'axios';
import VideoItem from '../VideoItem/VideoItem'
import './VideoNav.scss'

const VideoNav = ({ videoId }) => {

    const [videoList, setVideoList] = useState([])

    //const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos"
    const API_URL = process.env.REACT_APP_API_URL
    const apiKey = "?api_key=?1eb2b3fb-3a57-4eb9-b61b-805cb254a776"

    useEffect(() => {
        const getVideos = async() => {
        try {
            //const videos = await axios.get(`${apiUrl}${apiKey}`)
            const videos = await axios.get(API_URL)
            setVideoList(videos.data)
        } catch (error) {
            console.log(error)
            }
        }
        getVideos()
    }, [])

    const filteredVideoList = videoList.filter((video) => {
           return video.id !== videoId
         })

    return (
        <nav className='videoNav'>
            <h3 className='videoNav__title'>NEXT VIDEOS</h3>
            <ul className='videoNav__list'>

             {filteredVideoList.map((video) => {
                return (
                    <VideoItem 
                        key={video.id}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        user={video.channel}
                    />
                )
             })}   

            </ul>
        </nav>
    )
}
export default VideoNav