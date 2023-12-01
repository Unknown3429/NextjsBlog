import React, { useContext } from 'react'
import Animate from './Animate'
import Link from 'next/link'
import { UserContext } from '@/app/layout'

// icons 
import { LuFileEdit } from 'react-icons/lu'
import { RiShieldUserLine } from "react-icons/ri";
import { MdOutlineSpeed } from "react-icons/md";
import { GoGear, GoSignOut } from "react-icons/go";
import { removeFromSession } from '@/SessionFunc'

const UserNavigation = () => {

    let { userAuth: { username }, setUserAuth } = useContext(UserContext)

    const handleSignOut = () => {
        removeFromSession("user")
        setUserAuth({ token: null })
    }

    return (
        <Animate
            transition={{ duration: 0.2 }}
            className='absolute right-0 z-50'
        >

            <div className='bg-white absolute right-0 border border-grey w-60 duration-200'>
                <Link href={'/editor'} className='flex gap-2 link md:hidden pl-8 py-4  items-center' >
                    <LuFileEdit className='text-2xl' />
                    <p>write</p>
                </Link>

                <Link href={`/user/${username}`} className='flex link items-center gap-2 pl-8 py-4' >
                    <RiShieldUserLine className='text-2xl' />
                    <p>Profile</p>
                </Link>

                <Link href={`/dashboard/blog`} className='flex link items-center gap-2 pl-8 py-4' >
                    <MdOutlineSpeed className='text-2xl' />
                    <p>Dashboard</p>
                </Link>

                <Link href={`/settings/editProfile`} className='flex link items-center gap-2 pl-8 py-4' >
                    <GoGear className='text-2xl' />
                    <p>Settings</p>
                </Link>

                <span className='absolute border-t border-grey w-full pl-8 py-4'></span>
                <button
                    onClick={handleSignOut}
                    className='text-left p-4 py-4 pl-8 w-full hover:bg-grey'>
                    <h1 className='font-bold text-xl mb-1'>Signout</h1>
                    <p className='text-dark-grey'>@{username}</p>
                </button>

            </div>

        </Animate>
    )
}

export default UserNavigation