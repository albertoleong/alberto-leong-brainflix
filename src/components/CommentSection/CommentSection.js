import './CommentSection.scss'
import face from '../../assets/images/Mohan-muruge.jpg'
import icon from '../../assets/icons/add_comment.svg'

const CommentSection = () => {

    return (
        <section className='comments'>
            <form className='comments__form'>
                <img src={face} className='comments__face' alt='Users face' />
                <div className='comments__conversation'>
                    <div className='comments__heading'>
                        <h3 className='comments__join'>JOIN THE CONVERSATION</h3>
                        <textarea className='comments__box' placeholder='Add a new comment'></textarea>
                    </div>
                    <button className='comments__submit'>
                        <img className='comments__icon' src={icon} alt='add comment' />
                        <p className='comments__comment'>COMMENT</p>
                    </button>
                </div>
            </form>

            <div className='comments__data'>
                <img className='comments__face' alt='user icon'/>
                <div className='comments__info'>
                    <div className='comments__top'>
                        <p className='comments__username'>Paul Cullen</p>
                        <p className='comments__date'>9/4/12</p>
                    </div>
                    <p className='comments__textarea'>fowfwuwprgngpiweron</p>
                </div>
            </div>
        </section>
    )
}

export default CommentSection