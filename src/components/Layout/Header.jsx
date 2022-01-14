import { useContext, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

import { Context } from '../Store/index'
import Github from '../Github'

const Header = () => {
  const [state, dispatch] = useContext(Context)

  const toggleTheme = () => {
    dispatch({type: 'toggle_theme'})
  }

  return (
    <header className="w-full px-10 py-2 flex items-center justify-between relative z-10">
      <img className="h-8" src="/images/logo.svg" alt="logo" />
      <div className="flex items-center flex-row-reverse">
        <a
          className="hover:underline ml-5"
          href="https://github.com/xiaofuyesnew/xiaofuyesnew.github.io"
        >
          <Github className="w-5 h-5 fill-slate-900 dark:fill-slate-500" />
        </a>
        <button onClick={toggleTheme} title={state.mode === 'dark' ? 'light mode' : 'dark mode'}>
          {state.mode === 'dark' ? (
            <SunIcon className="w-5 h-5 stroke-slate-500" />
          ) : (
            <MoonIcon className="w-5 h-5 stroke-slate-900" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
