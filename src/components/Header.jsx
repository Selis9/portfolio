import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import tklogo from '../assets/tk.png';
import tklandscape from '../assets/tonykanglandscape.jpg';

const navigation = [
  { name: 'About Me', href: '#aboutme' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-neutral-900 h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-8xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav className="flex items-center justify-between lg:justify-between" aria-label="Global">
              <a href="#header" className="-m-1.5 p-1.5">
                <span className="sr-only">Tony Kang</span>
                <img
                  alt="Tony Kang logo"
                  className="h-16 w-auto mt-3"
                  src={tklogo}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white-700 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
              </button>
              <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white-900 hover:text-blue-200">
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Tony Kang</span>
                <img
                  className="h-16 w-auto mt-3"
                  src={tklogo}
                  alt="Tony Kang Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 w-8 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white-500/10 ml-4">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white-900 hover:bg-neutral-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-32 lg:w-full lg:max-w-3xl">
            <svg
              className="absolute inset-y-0 right-6 hidden h-screen w-90 translate-x-1/3 transform fill-neutral-900 lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl">
                  Tony Kang
                </h1>
                <p className="mt-6 text-lg leading-8 text-white-600">
                  Hello there! I am a Fullstack Developer and this is my portfolio website. Welcome and take a look around to learn more!
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#aboutme"
                    className="rounded-md bg-orange-200 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-blue-200  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3 lg:h-screen">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={tklandscape}
            alt="landscape"
          />
        </div>
      </div>
    </div>
  )
}


export default Header;