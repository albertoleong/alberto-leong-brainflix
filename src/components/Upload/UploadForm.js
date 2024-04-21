import './UploadForm.scss'
import thumbnail from '../../assets/images/Upload-video-preview.jpg'
import uploadIcon from '../../assets/icons/upload.svg'
import { useState } from 'react'

const UploadForm = ({handleUpload}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            title: title,
            description: description
        };
        handleUpload(event, formData);
    };

    return (
        <main className='upload'>
            <h1 className='upload__heading'>Upload Video</h1>
            <form className='upload__form' onSubmit={handleSubmit}>
                <section className='upload__container'>
                    <div className='upload__thumbnail'>
                        <label className='upload__title' htmlFor='video thumbnail'>
                            VIDEO THUMBNAIL
                        </label>
                        <img className='upload__image' alt='video thumbnail' src={thumbnail}/>
                    </div>
                    <div className='upload__info'>
                        <label className='upload__title upload__title--info' htmlFor='title'>
                            TITLE YOUR VIDEO
                        </label>
                        <input className='upload__input' type='text' 
                        value={title} onChange={(e) => setTitle(e.target.value)}
                        name='video-title' placeholder='Add a title to your video'>
                        </input>

                        <label className='upload__title upload__title--info upload__title--second' htmlFor='description'>
                            ADD A VIDEO DESCRIPTION
                        </label>
                        <textarea className='upload__description' 
                        value={description} onChange={(e) => setDescription(e.target.value)}
                        placeholder='Add a description to your video'></textarea>
                    </div>
                </section>
                <section className='upload__buttons'>
                    <button className='upload__submit'>
                        <img className='upload__icon' src={uploadIcon} alt='upload video'/>
                        <p className='upload__text'>PUBLISH</p>
                    </button>
                    <button className='upload__cancel'>
                        <p className='upload__text upload__text--blue'>CANCEL</p>
                    </button>
                </section>
            </form>
        </main>
    )
} 
export default UploadForm