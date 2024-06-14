import Modal from 'react-modal';
import css from './ImageModal.module.css'

Modal.setAppElement("#root");

const ImageModal = ({image, onClose}) => {
  return (
    <div>
      <Modal isOpen={true} onRequestClose={onClose}>
        <button onClick={onClose} className={css.button}>X</button>
        <img src={image.urls.regular} alt={image.alt_description} width={800} height={600} className={css.img} />
        <div>
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
        </div>
      </Modal>
    </div>
  )
}

export default ImageModal