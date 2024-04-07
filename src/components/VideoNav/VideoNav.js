import VideoItem from '../VideoItem/VideoItem'
import './VideoNav.scss'

const VideoNav = ({videos, switchVideo}) => {

    return (
        <nav className='videoNav'>
            <h3 className='videoNav__title'>NEXT VIDEOS</h3>
            <ul className='videoNav__list'>

             {videos.map((video) => {
                return (
                    <VideoItem 
                        key={video.id}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        user={video.channel}
                        switchVideo={switchVideo}
                    />
                )
             })}   

            </ul>
        </nav>
    )
}
export default VideoNav