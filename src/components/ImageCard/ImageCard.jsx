import css from './ImageCard.module.css'

const ImageCard = ({ image, onClick }) => {
    return (
        <div className={css.card}>
            <img src={image.urls.small} alt={image.alt_description} width={400} height={300} onClick={() => onClick(image)} className={css.img}/>
        </div>
    )
}

export default ImageCard