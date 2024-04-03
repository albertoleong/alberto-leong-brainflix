import './Header.scss'
import logo from "../../assets/icons/BrainFlix-logo.svg"
import face from "../../assets/images/Mohan-muruge.jpg"

const Header = () => {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='brainflix logo'/>
            <form className='header__form'>
                <div className='header__box'>
                    <label htmlFor='search'></label>
                    <input className='header__search' type='text' name='search' placeholder='Search'></input>
                    <img className='header__image' src={face} alt='user face'/>
                </div>
                <button className='header__button'>UPLOAD</button>
                <img />
            </form>
        </header>
    )
}

export default Header