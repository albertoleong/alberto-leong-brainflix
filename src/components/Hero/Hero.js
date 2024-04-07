import "./Hero.scss"

const Hero = ({image}) => {

    return (
        <div className="hero">
            <video className="hero__video" poster={image} controls>
            </video>
            
        </div>
    )
}
export default Hero