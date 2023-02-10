import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export default async (req, res) => {
  const data = {
    msg: 'hello world',
    time: dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')
  }

  res.status(200).json(data)
}