import React from 'react';
import { Disclosure, Menu } from '@headlessui/react'
import { MenuIcon, MoonIcon, SunIcon, XIcon} from '@heroicons/react/outline'
import './header.css'

const navigation = [
    { name: 'HOME', href: '/', current: false },
    { name: 'GIT PROJECTS', href: '/git', current: false },
    { name: 'BLOGS', href: '/blogs', current: false },
    { name: 'YOUTUBE', href: '/youtube', current: false },
    { name: 'CERTIFICATES', href: '/certificates', current: false },
    { name: 'DESIGNS', href: '/designs', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const Header = (props) => {

    return (
      
        <Disclosure as="nav" className="bg-gray-800 dark:bg-slate-900 stick">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <button onClick={props.toggle} className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                        
                        {props.mode === "dark" ? <SunIcon className="block h-6 w-6 text-white" aria-hidden="true" /> : <MoonIcon className="block h-6 w-6 text-white" aria-hidden="true" />}
 
                        
                      </button>
                    </div>

                  </Menu>
                </div>
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );

}

export default Header;
