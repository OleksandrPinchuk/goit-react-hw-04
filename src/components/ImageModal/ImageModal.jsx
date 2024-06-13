import Modal from 'react-modal';

Modal.setAppElement("#root");

const ImageModal = ({image, onClose}) => {
  return (
    <div>
      <Modal isOpen={true} onRequestClose={onClose}>
        <button onClick={onClose}>X</button>
        <img src={image.urls.regular} alt={image.alt_description} width={800} height= {600} />
        <div>
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
        </div>
      </Modal>
    </div>
  )
}

export default ImageModal