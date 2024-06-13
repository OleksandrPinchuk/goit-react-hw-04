const ImageCard = ({image, onClick}) => {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} width={400} height= {300} onClick={() => onClick(image)}/>
        </div>
    )
}

export default ImageCard