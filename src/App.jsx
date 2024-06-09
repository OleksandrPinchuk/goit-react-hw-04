import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import Modal from 'react-modal';


function App() {
  

  const onSubmit = (value) => {
    
    console.log(value)
  }
  
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <LoadMoreBtn/>
    </>
  )
}

export default App
