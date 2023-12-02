import { UserContext } from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Animate from './Animate'
import { uploadImage } from '@/middleware/aws'

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BlogEditor = () => {
    let { setCriteria } = useContext(UserContext)
    const [imgUrl, setImgUrl] = useState('/blogBanner.png')

    useEffect(() => {
        setCriteria(true)
    }, [])

    const handleBannerUpload = async (e) => {
        let img = e.target.files[0]

        const id = toast.loading("Uploading Image...", {
            position: "top-center",
        })
        if (img) {
            //do something else
            await uploadImage(img).then((url) => {
                setImgUrl(url)
            }).catch(err => toast.update(id, {
                render: err,
                type: "error",
                isLoading: false,
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true
            }))
        }
        toast.update(id, {
            render: "Uploaded 👍",
            type: "success",
            isLoading: false,
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true
        });
    }
    return (
        <>
            {/* Same as */}
            <ToastContainer />
            {/* navbar start */}
            <nav className='navbar'>
                <Link onClick={() => setCriteria(false)} href={'/'} className='flex-none w-10'>
                    <Image className='fill-black' src={"/hindu.png"} width={200} height={200} alt='hindu' />
                </Link>

                <p className='max-md:hidden text-black line-clamp-1 w-full'>
                    New Blog
                </p>

                <div className='flex gap-4 ml-auto'>
                    <button className='btn-dark py-2'>
                        Publish
                    </button>

                    <button className='btn-light py-2'>
                        Save
                    </button>
                </div>

            </nav>
            {/* navbar end */}

            <Animate>
                <section>
                    {/* main div */}
                    <div className='mx-auto max-w-[900px] w-full'>
                        {/* blog banner */}
                        <div className='relative aspect-video hover:opacity-80 border-4 bg-white border-grey'>
                            <label htmlFor="uploadBanner">
                                <img
                                    src={imgUrl}
                                    alt='Blog Banner'
                                    className='z-20 object-cover' />

                                <input
                                    id='uploadBanner'
                                    accept='.png, .jpg, .jpeg'
                                    hidden
                                    type="file"
                                    onChange={handleBannerUpload} />
                            </label>

                        </div>
                    </div>
                </section>
            </Animate>
        </>
    )

}

export default BlogEditor