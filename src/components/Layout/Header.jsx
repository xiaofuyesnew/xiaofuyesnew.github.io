import { useContext, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

import { Context } from '@/store'
import Github from '@/components/Icons/Github'
import Twitter from '@/components/Icons/Twitter'

const Header = () => {
  const [state, dispatch] = useContext(Context)

  const toggleTheme = () => {
    dispatch({ type: 'toggle_theme' })
  }

  return (
    <header className="w-full px-10 py-2 flex items-center justify-between relative z-10">
      <img className="h-8" src="/images/logo.svg" alt="logo" />
      <div className="flex items-center flex-row-reverse">
        <a
          className="hover:underline ml-5"
          href="https://github.com/xiaofuyesnew/xiaofuyesnew.github.io"
        >
          <Github className="w-5 h-5 fill-slate-500 hover:fill-slate-700 dark:hover:fill-slate-300" />
        </a>
        <a
          className="hover:underline ml-5"
          href="https://twitter.com/xiaofuyesnew"
        >
          <Twitter className="w-5 h-5 fill-slate-500 hover:fill-slate-700 dark:hover:fill-slate-300" />
        </a>
        <button
          onClick={toggleTheme}
          title={state.mode === 'dark' ? 'switch to light mode' : 'switch to dark mode'}
        >
          {state.mode === 'dark' ? (
            <MoonIcon className="w-5 h-5 stroke-sky-500 fill-sky-500/20 hover:stroke-sky-300" />
          ) : (
            <SunIcon className="w-5 h-5 stroke-orange-500 fill-orange-500/20 hover:stroke-orange-700" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
