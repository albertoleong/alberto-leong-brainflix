import './Header.scss'
import { Link } from 'react-router-dom'
import logo from "../../assets/icons/BrainFlix-logo.svg"
import face from "../../assets/images/Mohan-muruge.jpg"
import glass from "../../assets/icons/search.svg"
import upload from "../../assets/icons/upload.svg"

const Header = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <header className='header'>
            <Link to='/' className='header__link'>
                <img className='header__logo' src={logo} alt='brainflix logo'/>
            </Link>
            <form className='header__form' onSubmit={handleSubmit}>
                <div className='header__box'>
                    <div className='header__fakesearch'>
                        <img className='header__glass' src={glass} alt='magnifying glass' />
                        <label htmlFor='search'></label>
                        <input className='header__search' type='text' name='search' placeholder='Search'></input>
                    </div>
                    <img className='header__image' src={face} alt='user face'/>
                </div>
                <Link to='/upload' className='header__link'>
                    <button className='header__button'>
                        <img className='header__upload' src={upload} alt='upload' />
                        <p className='header__buttontext'>UPLOAD</p>
                    </button>
                </Link>
                <img className='header__image--hidden' src={face} alt='user face' />
            </form>
        </header>
    )
}

export default Header