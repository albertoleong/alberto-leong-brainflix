import './VideoItem.scss'

const VideoItem = ({key, id, image, title, user, switchVideo}) => {

    return (
        <li className='video' onClick={() => switchVideo(id)}>
            <img className='video__preview' src={image} alt='video preview'/>
            <div className='video__info'>
                <h3 className='video__title'>{title}</h3>
                <p className='video__creator'>{user}</p>
            </div>
        </li>
    )
}

export default VideoItem