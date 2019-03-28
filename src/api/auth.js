import client from './client'

export default {
  login: async (authInfo) => {
    try {
      const res = await client.post('/auth/login', authInfo)
      return { token: res.data.token, userId: res.data.userId }
    } catch (err) {
      throw new Error(err.response.data.message || err.message)
    }
  }
}
