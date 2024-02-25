import React from 'react'

const Navbar = () => {
  return (
    <header className="flex justify-start sm:justify-start sm:flex-nowrap w-full bg-gray-800 text-sm py-4 dark:bg-white">
    <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
      <div className="flex items-center justify-between">
        <a className="flex-none text-xl font-semibold text-white dark:text-gray-800" href="#">
            Data Neuron - Resizable Components
        </a>
      </div>
    </nav>
  </header>
  )
}

export default Navbar