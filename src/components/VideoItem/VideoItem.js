import { Link } from 'react-router-dom'
import './VideoItem.scss'

const VideoItem = ({id, image, title, user}) => {

    return (
        <Link to={`/videos/${id}`} className='video__link'>
            <li className='video' >
                <img className='video__preview' src={image} alt='video preview'/>
                <div className='video__info'>
                    <h3 className='video__title'>{title}</h3>
                    <p className='video__creator'>{user}</p>
                </div>
            </li>
        </Link>
    )
}

export default VideoItem