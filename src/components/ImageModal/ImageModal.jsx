import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { FcLike } from "react-icons/fc";
import { FcOldTimeCamera } from "react-icons/fc";

Modal.setAppElement("#root");

const ImageModal = ({image, onClose}) => {
  return (
    <div>
      <Modal isOpen={true} onRequestClose={onClose} className={css.modal} overlayClassName={css.overlay}>
        <button onClick={onClose} className={css.button}>X</button>
        <img src={image.urls.regular} alt={image.alt_description} className={css.img} />
        <div className={css.info}>
          <FcOldTimeCamera className={css.svg}/>
          <p>: {image.user.name}</p>
          <FcLike className={css.svg}/>
          <p>: {image.likes}</p>
        </div>
      </Modal>
    </div>
  )
}

export default ImageModal