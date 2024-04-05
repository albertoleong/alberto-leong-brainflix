import './Description.scss'
import views from '../../assets/icons/views.svg'
import likes from '../../assets/icons/likes.svg'

const Description = () => {

    return (
        <>
        <section className='videoInfo'>
            <div className='description'>
                <h1 className='description__title'>Current Video</h1>
                <div className='description__details'>
                    <div className='description__details--left'>
                        <p className='description__author'>By Bla bla</p>
                        <p className='description__date'>6/2/1993</p>
                    </div>
                    <div className='description__details--right'>
                        <div className='description__views'>
                            <img src={views} alt='views' className='description__icon'/>
                            <p className='description__count'>23,400</p>
                        </div>
                        <div className='description__likes'>
                            <img src={likes} alt='views' className='description__icon' />
                            <p className='description__count'>22,333</p>
                        </div>
                    </div>
                </div>
                <div className='description__bottom'>
                    <p className='description__essay'>
                        dvpiwdnvpwndvpwindvknwvpinwdvpinwdpvin
                        vkjevjnfevoinfvoienfvoiefnvoinfvoinfeoineoivnev
                        oieovineofvinefovinfoineoinfvoienoivnoeinfoviev
                    </p>
                    <p className='description__commentCount'>3 Comments</p>
                </div>
            </div>

        </section>
        </>
    )
}

export default Description