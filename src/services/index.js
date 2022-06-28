import axios from 'axios'

class Api {
  constructor ({ baseURL }) {
    this.instance = axios.create({ baseURL })
  }

  makeRequest (method, url, options = {}) {
    const headers = { ...this.instance.defaults.headers, ...options.headers }

    return this.instance({
      ...options,
      method,
      url,
      headers
    }).then(({ data }) => data)
  }

  get (url, data) {
    return this.makeRequest('get', url, data)
  }

  post (url, data) {
    return this.makeRequest('post', url, data)
  }

  put (url, data) {
    return this.makeRequest('put', url, data)
  }

  del (url, data) {
    return this.makeRequest('delete', url, data)
  }
}
export default Api
