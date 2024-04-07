import './VideoItem.scss'
import pic from "../../assets/images/Upload-video-preview.jpg"

const VideoItem = ({key,image, title, user}) => {

    return (
        <li className='video'>
            <img className='video__preview' src={image} alt='video preview'/>
            <div className='video__info'>
                <h3 className='video__title'>{title}</h3>
                <p className='video__creator'>{user}</p>
            </div>
        </li>
    )
}

export default VideoItem