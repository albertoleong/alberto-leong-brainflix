import './Description.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

import views from '../../assets/icons/views.svg'
import likes from '../../assets/icons/likes.svg'
import CommentSection from '../CommentSection/CommentSection'

const Description = ({ videoId }) => {

    const [selectedVideo, setSelectedVideo] = useState(null)
    const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos"
    const apiKey = "?api_key=?1eb2b3fb-3a57-4eb9-b61b-805cb254a776"

    useEffect(() => {
        const getTheVideo = async () => {
        try {
            const theVideo = await axios.get(`${apiUrl}/${videoId}${apiKey}`)
            setSelectedVideo(theVideo.data)

        } catch (error) {
            console.log(error)
        }
        }
        getTheVideo()
    },[videoId])

    const title = selectedVideo ? selectedVideo.title : null
    const channel = selectedVideo ? selectedVideo.channel : null
    const timestamp = selectedVideo ? selectedVideo.timestamp : null
    const viewCount = selectedVideo ? selectedVideo.views : null
    const likeCount = selectedVideo ? selectedVideo.likes : null
    const videoDescription = selectedVideo ? selectedVideo.description : null
    const theComments = selectedVideo ? selectedVideo.comments : null
    const commentCount = theComments ? theComments.length : ''

    return (
        <>
        <section className='videoInfo'>
            <div className='description'>
                <h1 className='description__title'>{title}</h1>
                <div className='description__details'>
                    <div className='description__details--left'>
                        <p className='description__author'>By {channel}</p>
                        <p className='description__date'>{timestamp}</p>
                    </div>
                    <div className='description__details--right'>
                        <div className='description__views'>
                            <img src={views} alt='views' className='description__icon'/>
                            <p className='description__count'>{viewCount}</p>
                        </div>
                        <div className='description__likes'>
                            <img src={likes} alt='views' className='description__icon' />
                            <p className='description__count'>{likeCount}</p>
                        </div>
                    </div>
                </div>
                <div className='description__bottom'>
                    <p className='description__essay'>
                        {videoDescription}
                    </p>
                    <p className='description__commentCount'> {commentCount} Comments</p>
                </div>
            </div>
        </section>
        <CommentSection commentArray={theComments}/>
        </>
    )
}

export default Description