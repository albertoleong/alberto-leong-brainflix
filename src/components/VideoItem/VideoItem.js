import './VideoItem.scss'
import pic from "../../assets/images/Upload-video-preview.jpg"

const VideoItem = () => {

    return (
        <li className='video'>
            <img className='video__preview' src={pic}/>
            <div className='video__info'>
                <h3 className='video__title'>Hola Hannah</h3>
                <p className='video__creator'>Darita Leong</p>
            </div>
        </li>
    )
}

export default VideoItem