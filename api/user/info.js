import fetch from 'node-fetch'

export default async(req, res) => {
  const { code } = req.body

  if (code) {
    console.log(process.env.GITHUB_CLIENT_ID)
    console.log(process.env.GITHUB_CLIENT_SECRET)

    try {
      const respone = await fetch(`https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`, { method: 'post', headers: { accept: 'application/json' } }).then(data => data.json())
      // axios({
      //   method: 'post',
      //   headers: {
      //     accept: 'application/json'
      //   },
      //   url: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`
      // })

      console.log(respone)
    } catch (e) {
      console.log('error')
    }

    res.status(200).json({ success: true, msg: '' })
  } else {
    res.status(200).json({ success: false, msg: '缺少参数code' })
  }
}
