const ImageCard = ({image}) => {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} width={400} height= {300}/>
        </div>
    )
}

export default ImageCard