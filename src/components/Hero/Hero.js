import "./Hero.scss"
import video from "../../assets/images/Upload-video-preview.jpg"
import scrub from "../../assets/icons/scrub.svg"

const Hero = () => {

    return (
        <div className="hero">
            <video className="hero__video" poster={video} controls>
            </video>
            {/* <img className="hero__scrub" src={scrub} alt="scrub"></img> */}
        </div>
    )
}
export default Hero