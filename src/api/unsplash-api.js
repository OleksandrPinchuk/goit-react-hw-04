import axios from 'axios';

const ACCESS_KEY = 's1SL5xbYIwFfTbAagi-yIuZ_aqWbSfvYgMzCRV5xoZM';
const baseURL = 'https://api.unsplash.com/search/photos';

export const getImagesApi = async (query, page) => {

    const {data} = await axios.get(`${baseURL}`, {
            params : {query, page, per_page:10},
            headers : {Authorization: `Client-ID ${ACCESS_KEY}`,},
    })
    return { results: data.results, totalPages: data.total_pages };
}
