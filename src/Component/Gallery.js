import './Gallery.css';
import html from '../images/html.png'
import css from '../images/css.png';
import js from '../images/js.png';
const Gallery = () => {
    return (
        <div className='display mt-5' >
            <div class="card mx-auto " style={{ width: '18rem' }}>
                <img src={html}class="card-img-top" alt="html" />
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card mx-auto " style={{ width: '18rem' }}>
                <img src={css} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card mx-auto " style={{ width: '18rem' }}>
                <img src={js} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}
export default Gallery;