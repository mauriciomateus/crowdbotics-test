import axios from 'axios'

function setAxiosAuthHeader () {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken && accessToken.length) {
    axios.defaults.headers.common.Authorization = `token ${accessToken}`
  }
}

function deleteAxiosAuthHeader () {
  delete axios.defaults.headers.common.Authorization // Do not send header when password is sent
}

export { setAxiosAuthHeader, deleteAxiosAuthHeader }
