const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

dayjs.extend(utc)
dayjs.extend(timezone)

module.exports = async (req, res) => {
  const data = {
    msg: 'hello world',
    time: dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')
  }

  res.status(200).json(data)
}
