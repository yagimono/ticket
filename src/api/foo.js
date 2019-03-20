import client from './client'

export default {
  fetchMsg: async () => {
    try {
      const res = await client.get('/foo')
      return res.data.msg
    } catch (err) {
      throw new Error(err.response.data.message || err.message)
    }
  }
}
