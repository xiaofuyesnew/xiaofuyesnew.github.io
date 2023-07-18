import { resolve } from 'path'
import { readFileSync, readdirSync } from 'fs'

const root = process.cwd()

export const getPackage = () => JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf-8'))

export const generateEnv = (env) => Object.keys(env).reduce((acc, key) => {
  try {
    acc[key] = JSON.parse(env[key])
  } catch (e) {
    acc[key] = env[key]
  }
  return acc
}, {})

export const getSvgIconsList = (dir, rootDir, oldList) => {
  // console.log(readdirSync(resolve(root, dir)))
  const list = oldList?.length ? oldList : []
  const originDir = rootDir || dir
  readdirSync(resolve(root, dir)).forEach(item => {
    if (item.endsWith('.svg')) {
      if (originDir === dir) {
        list.push(item.replace('.svg', ''))
      } else {
        list.push(`${dir.replace(`${rootDir}/`, '').replace(/\//g, '-')}-${item.replace('.svg', '')}`)
      }
    } else {
      getSvgIconsList(`${dir}/${item}`, originDir, list)
    }
  })

  return list
}
