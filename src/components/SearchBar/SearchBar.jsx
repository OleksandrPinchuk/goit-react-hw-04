import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState("");
    const notify = () => toast.error('Enter text to search for images');

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === "") {
            notify();
            return
        }
        onSubmit(query);
        setQuery("");
    }
    return (
        <>
            <header className={css.header}>
                <form onSubmit={handleSubmit}>
                    <input type="text" autoComplete="off" autoFocus placeholder="Search images and photos" value={query} onChange={handleChange} />
                    <button type="submit">Search</button>
                    <Toaster />
                </form>
            </header>
        </>
    )
}

export default SearchBar