import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
function App() {
  

  const onSubmit = (value) => {
    
    console.log(value)
  }
  
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
    </>
  )
}

export default App
