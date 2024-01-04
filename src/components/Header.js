import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {NavLink} from 'react-router-dom'

const navigation = [
  { name: 'Employees', to: '/employees' },
  { name: 'Customers', to: '/customers'},
  { name: 'Dictionary', to: '/dictionary'},
  { name: 'Calendar', to: '/calendar' },
]



export default function Header(props) {
  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">

                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">

                    {/* NAVIGATE ALL OBJECTS AND MAP IT */}
                    {navigation.map((item) => (
                        // NAVLINK GIVES YOU AN ACCESS TO CHECK WHICH ONE IS ACTIVE
                      <NavLink
                        key={item.name}
                        to={item.to}
                        //ISACTIVE CHECK IF ITS TRUE OR FALSE THEN GIVES THE SELECTED CLASS FOR THE LIST ITEM
                        className={({ isActive }) => {
                            return(
                                " text-white no-underline px-3 py-2 rounded-md text-sm " + 
                                (isActive ? 
                                    ' text-white  bg-gray-600 ' : 
                                    'text-gray-300 sm:no-underline hover:bg-gray-700 hover:text-white ')
                            );
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.to}
                    //ISACTIVE CHECK IF ITS TRUE OR FALSE THEN GIVES THE SELECTED CLASS FOR THE LIST ITEM
                    className={({ isActive }) => {
                        return(
                            " block rounded-md px-3 py-2 text-base no-underline font-medium " + 
                            (isActive ? 
                                ' text-white  bg-gray-600 ' : 
                                'text-gray-300 sm:no-underline hover:bg-gray-700 hover:text-white ')
                        );
                    }}
                    >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
    {props.children}
    </>
  )

}
