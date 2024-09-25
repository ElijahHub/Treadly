import axios from 'axios'

export const productOptions = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    limit: '48',
    lang: 'en-US'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': import.meta.env.VITE_API_HOST
  }
};

export const detailsOptions = (id) => ({
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v4/detail',
  params: {
    id: id,
    lang: 'en-US',
    store: 'US',
    sizeSchema: 'US',
    currency: 'USD'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': import.meta.env.VITE_API_HOST
  }
})


export const fetchData = async (option) => {
  const { data } = await axios.request(option)

  return data
}