import prismaClient from './lib/prismaClient.js'

export default async(req, res) => {
  const User = await prismaClient.User.findMany()

  res.status(200).json({ msg: 'Hello', data: User, nodeEnv: process.env.NODE_ENV })
  // res.status(200).json({ msg: 'Hello', data: User, nodeEnv: process.env })
  // res.status(200).json({ nodeEnv: process.env.NODE_ENV, databaseURL: process.env.DATABASE_URL })
  // console.log(process.env.NODE_ENV)
}
