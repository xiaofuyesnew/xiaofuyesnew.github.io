import dayjs from './utils/day.js'

export default async (req, res) => {
  const data = {
    msg: 'hello world',
    time: dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss'),
    url: process.env.DATABASE_URL
  }

  res.status(200).json(data)
}
