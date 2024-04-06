import './Comment.scss'
import placeholder from '../../assets/images/Placeholder-img.png'

const Comment = ({id, username, date, text}) => {

    return (
        <div className='comment'>
            <img className='comment__face' src={placeholder} alt='user icon'/>
            <div className='comment__info'>
                <div className='comment__top'>
                    <p className='comment__username'>{username}</p>
                    <p className='comment__date'>{date}</p>
                </div>
                <p className='comment__textarea'>{text}</p>
            </div>
        </div>
    )
}
export default Comment