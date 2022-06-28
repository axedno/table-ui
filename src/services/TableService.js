import API from './index'

class Discover extends API {
  getTableRows (page, limit, salary) {
    return this.get(`table?page=${page}&limit=${limit}&salary=${salary}`)
  }

  getUniqSalary () {
    return this.get('table/salary')
  }
}

export default new Discover({ baseURL: process.env.REACT_APP_API_URL })
