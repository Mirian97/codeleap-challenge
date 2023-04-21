import axios from 'axios'

export default axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers',
  headers: {
    'Content-Type': 'application/json'
  }
})
