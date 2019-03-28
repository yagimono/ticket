import express from 'express';
// import socketIO from "socket.io";

export default (app, http) => {
  app.use(express.json());
  
  // ユーザ情報
  const users = {
    'foo@domain.com': {
      password: '12345678',
      userId: 1,
      token: '1234567890abcdef'
    }
  }

  // ログインAPIのエンドポイント'/auth/login'
  app.post('/auth/login', (req, res) => {
    const { email, password } = req.body
    const user = users[email]
    if (!user) {
      res.status(404).json({ message: 'ユーザが登録されていません。' })
    } else if (user.password === password) {
      res.json({ userId: user.userId, token: user.token })
    } else {
      res.status(401).json({ message: 'ログインに失敗しました。' })
    }
  })
}
