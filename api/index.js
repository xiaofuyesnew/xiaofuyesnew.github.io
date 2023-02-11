import dayjs from './utils/day.js'
import prisma from './lib/prisma.js'

export default async (req, res) => {

  const users = await prisma.user.findMany()

  const data = {
    msg: 'hello world',
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    list: users
  }

  res.status(200).json(data)
}
