import React from 'react'
import { loggedIn, handleLogOut } from '@/assets/js/utils'

/**
 * @function Header
 * The header component of the application.
 * @returns {React.ReactElement} The header component.
 */
export default function Header() {

  /**
   * The state of whether the user is logged in or not.
   * @type {boolean}
   */
  const isLogin = loggedIn();

  return (
    <header className='bg-black p-5'>

      <div className='container flex items-center justify-between'>

        <div className='flex items-center gap-2 text-white'>

          {/* The logo of the application. */}
          <img src="/images/navbar-icon.svg" className='w-[40px] sm:w-fit' alt="" />

          {/* The title of the application. */}
          <h1 className='font-medium text-white text-[14px] sm:text-xl'>Black IN Dashboard</h1>

        </div>

        {/* The button to logout the user or go to the website. */}
        <button
          onClick={_ => isLogin ? handleLogOut() : null}
          className={`${isLogin ? "bg-red-500 text-white font-medium" : "bg-primary"} flex items-center gap-3 p-2 px-2 sm:px-4 text-[14px] sm:text-base rounded-md`}
        >

          {/* The icon of the button. */}
          <img src="/images/website-icon.svg" className='hidden sm:block w-fit' alt="" />

          {/* The text of the button. */}
          {
            isLogin
              ?
              <span>Logout</span>
              :
              <span className='text-black capitalize'>go to website</span>
          }

        </button>

      </div>
    </header>
  )
}
