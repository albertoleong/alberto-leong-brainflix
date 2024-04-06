import './CommentSection.scss'
import face from '../../assets/images/Mohan-muruge.jpg'
import icon from '../../assets/icons/add_comment.svg'
import Comment from '../Comment/Comment'

const CommentSection = ({commentArray}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className='comments'>
            <form className='comments__form' onSubmit={handleSubmit}>
                <img src={face} className='comments__face comments__face--top' alt='Users face' />
                <div className='comments__conversation'>
                    <div className='comments__heading'>
                        <label htmlFor='comment' className='comments__join'>JOIN THE CONVERSATION</label>
                        <textarea className='comments__box' placeholder='Add a new comment'></textarea>
                    </div>
                    <button className='comments__submit'>
                        <img className='comments__icon' src={icon} alt='add comment' />
                        <p className='comments__comment'>COMMENT</p>
                    </button>
                </div>
            </form>
            {commentArray.map((comment) => {
                const stamp = new Date(comment.timestamp)
                const actualDate = stamp.toLocaleDateString()
                return (
                    <Comment 
                        key={comment.id}
                        username={comment.name}
                        date={actualDate}
                        text={comment.comment}
                    />
                )
            })}
        </section>
    )
}

export default CommentSection