import './Upload.scss'
import thumbnail from '../../assets/images/Upload-video-preview.jpg'

const Upload = () => {
    return (
        <section className='upload'>
            <h1 className='upload__heading'>Upload Video</h1>
            <form className='upload__form'>
                <div className='upload__container'>
                    <div className='upload__thumbnail'>
                        <label className='upload__title' htmlFor='video thumbnail'>
                            VIDEO THUMBNAIL
                        </label>
                        <img className='upload__image' alt='video thumbnail' src={thumbnail}/>
                    </div>
                    <div className='upload__info'>
                        <label className='upload__title' htmlFor='title'>
                            TITLE YOUR VIDEO
                        </label>
                        <input className='upload__input' type='text' 
                        name='video-title' placeholder='Add a title to your video'>
                        </input>
                        <label className='upload__title' htmlFor='description'>
                            ADD A VIDEO DESCRIPTION
                        </label>
                        <textarea className='upload__description' 
                        placeholder='Add a description to your video'></textarea>
                    </div>
                </div>
                <div upload__buttons>
                    <button className='upload__submit'>
                        <img className='upload__icon' />
                        <p className='upload__text'>PUBLISH</p>
                    </button>
                    <button className='upload__cancel'>
                        <p className='upload__text upload__text--blue'>CANCEL</p>
                    </button>
                </div>
            </form>
        </section>
    )
} 
export default Upload