import fetch from 'node-fetch'

export default async (req, res) => {
  const { code } = req.body
  if (code) {
    try {
      const response = await fetch(`https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`, { method: 'post', headers: { accept: 'application/json' } }).then(data => data.json())
      const userInfo = await fetch(`https://api.github.com/user`, { method: 'get', headers: { accept: 'application/json', Authorization: `token ${response.access_token}` } }).then(data => data.json())
      res.status(200).json({ success: true, msg: '', data: userInfo })
    } catch (e) {
      // console.log('error')
      res.status(200).json({ success: false, msg: 'error' })
    }
  } else {
    res.status(200).json({ success: false, msg: '缺少参数code' })
  }
}
