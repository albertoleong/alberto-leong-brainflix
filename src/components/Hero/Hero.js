import "./Hero.scss"
import video from '../../assets/images/Upload-video-preview.jpg'
import scrub from "../../assets/icons/scrub.svg"
import play from "../../assets/icons/play.svg"
import screen from "../../assets/icons/fullscreen.svg"
import sound from '../../assets/icons/volume_up.svg'

const Hero = ({image}) => {

    return (
        <div className="hero">
            <video className="hero__video" poster={image} controls>
            </video>
            {/* <img className="hero__play" src={play} alt="play" />
            <img className="hero__scrub" src={scrub} alt="scrub"></img> 
            <img className="hero__screen" src={screen} alt="fullscreen" />
            <img className="hero__sound" src={sound} alt="sound control" /> */}
            
        </div>
    )
}
export default Hero