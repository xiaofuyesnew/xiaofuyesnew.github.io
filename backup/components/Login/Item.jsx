import { useContext, useState } from 'react'
import Provider, { Context } from '@/store/index'

import Mask from '../Mask'

const Item = () => {
  const [ state, dispatch ] = useContext(Context)

  const clickMask = (e) => {
    console.log(e)
    dispatch({ type: 'toggle_login' })
  }

  return state.loginShow ? (
    <Mask>
      <div className="w-[100px] h-[100px] bg-white" onClick={clickMask}></div>
    </Mask>
  ) : null
}

export default Item
