import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import {getImagesApi} from './api/unsplash-api.js';

function App() {

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState();
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setError(false);
        setLoading(true);
        const {results: images, totalPages } = await getImagesApi(query, page);
        // setImages((prev) => [...prev, ...data]);
        setImages(images);
        setTotalPages(totalPages);
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    query && fetchImages()
  }, [query, page]);
  

  const onSubmit = async (newQuery) => {

    setQuery(newQuery);
    setImages([]);
    setPage(1);
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  }

  const onImageClick = (image) => {
    setSelectedImage(image);
  }

  const closeModal = () =>  {
    setSelectedImage(null);
  }
  
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} onImageClick={onImageClick} />
      {loading && <Loader />}
      {error &&  <ErrorMessage />}
      {images.length > 0 && totalPages !== page && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  )
}

export default App
