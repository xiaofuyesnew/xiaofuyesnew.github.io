import { useContext } from 'react'

import Mask from '../Mask'

import { Context } from '@/store'

const Item = () => {
  const { state, dispatch } = useContext(Context)

  console.log(state)
  const clickMask = (e) => {
    console.log(e)
  }

  return state.loginShow ? (
    <Mask onClick={clickMask}>
      <div className="w-[100px] h-[100px] bg-white"></div>
    </Mask>
  ) : null
}

export default Item
