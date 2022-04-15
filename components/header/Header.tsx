import Image from 'next/image'
import logoImage from '../../assets/images/logo.svg'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import accountImage from '../../assets/images/account.svg'

function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={logoImage}
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Show</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 cursor-pointer transition duration-[.4s] hover:text-emerald-200 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 cursor-pointer transition duration-[.4s] hover:text-emerald-200" />
        <Link href="/account">
          <Image
            src={accountImage}
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
