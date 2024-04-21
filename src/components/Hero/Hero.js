import "./Hero.scss"
import { useEffect, useState } from 'react';
import axios from "axios";

const Hero = ({ videoId }) => {

    const [selectedVideo, setSelectedVideo] = useState(null)

    const API_URL = process.env.REACT_APP_API_URL
    //const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos"
    const apiKey = "?api_key=?1eb2b3fb-3a57-4eb9-b61b-805cb254a776"

    useEffect(() => {
        const getTheVideo = async () => {
        try {
            const theVideo = await axios.get(API_URL + `/${videoId}`)
            setSelectedVideo(theVideo.data)

        } catch (error) {
            console.log(error)
        }
        }
        getTheVideo()
    },[videoId])

    const theImage = selectedVideo ? selectedVideo.image : null

    return (
        <div className="hero">
            <video className="hero__video" poster={theImage} controls>
            </video> 
            
        </div>
    )
}
export default Hero