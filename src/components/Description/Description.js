import './Description.scss'
import views from '../../assets/icons/views.svg'
import likes from '../../assets/icons/likes.svg'
import CommentSection from '../CommentSection/CommentSection'

const Description = ({title, channel, date, viewCount, likeCount, description, commentCount}) => {

    return (
        <>
        <section className='videoInfo'>
            <div className='description'>
                <h1 className='description__title'>{title}</h1>
                <div className='description__details'>
                    <div className='description__details--left'>
                        <p className='description__author'>By {channel}</p>
                        <p className='description__date'>{date}</p>
                    </div>
                    <div className='description__details--right'>
                        <div className='description__views'>
                            <img src={views} alt='views' className='description__icon'/>
                            <p className='description__count'>{viewCount}</p>
                        </div>
                        <div className='description__likes'>
                            <img src={likes} alt='views' className='description__icon' />
                            <p className='description__count'>{likeCount}</p>
                        </div>
                    </div>
                </div>
                <div className='description__bottom'>
                    <p className='description__essay'>
                        {description}
                    </p>
                    <p className='description__commentCount'>{commentCount} Comments</p>
                </div>
            </div>

        </section>
        </>
    )
}

export default Description