import VideoItem from '../VideoItem/VideoItem'
import './VideoNav.scss'

const VideoNav = () => {

    return (
        <nav className='videoNav'>
            <h3 className='videoNav__title'>NEXT VIDEOS</h3>
            <ul className='videoNav__list'>
                <VideoItem />
            </ul>
        </nav>
    )
}
export default VideoNav