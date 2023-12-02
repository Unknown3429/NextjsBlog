"use client"; // This is a client component 👈🏽
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../layout'
import BlogEditor from '@/components/BlogEditor';

const Editor = () => {
    let { userAuth: { token, profile_img }, criteria } = useContext(UserContext)


    return (
        <div>
            <BlogEditor  />
        </div>
    )
}

export default Editor