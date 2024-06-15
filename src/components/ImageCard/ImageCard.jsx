import css from './ImageCard.module.css'

const ImageCard = ({ image, onClick }) => {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} onClick={() => onClick(image)} className={css.img}/>
        </div>
    )
}

export default ImageCard