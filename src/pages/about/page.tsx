import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function About() {

    return (
        <div className="min-h-screen  w-screen bg-[#1E1E1E] relative z-50">
            <Image
                src="/Group1.svg"
                alt="Background Image"
                fill
                objectFit="cover"
                objectPosition="center"
                quality={100}
                className="relative"
            />
            <div className="flex justify-evenly gap-10 items-center absolute bg-[#323231] w-[428px] h-[68px] top-6 right-1/2 translate-x-[205px] rounded-full">
                <div className="flex items-center gap-10">
                    <Link href='/'>
                        <Image className="" src="/Frame 136.svg" alt="logo-image" width={50} height={50} />
                    </Link>
                    <Link href='/about/page'>
                        <div className='flex items-center gap-2'>
                            <Image className="" src="/user.svg" alt="logo" width={30} height={30} />
                            <p className='text-white'>About</p>
                        </div>
                    </Link>
                    <Link href='/'>
                        <Image className="" src="/artboard.svg" alt="logo" width={30} height={30} />
                    </Link>
                </div>
                <Link href='/' className='cursor-pointer'>
                    <div className="flex px-4 py-2 bg-white rounded-full">
                        <h1 className="">React Us</h1>
                    </div>
                    <Image alt="logo" src="/Ellipse 2.svg" width={100} height={120} className="absolute left-1/2 translate-x-[6.2rem] -translate-y-12 z-[-1]" />
                </Link>
            </div>

            <div className='flex flex-col w-full items-center absolute left-1/2 -translate-x-1/2 top-1/4 '>
                <div className='grid grid-cols-2 gap-5 relative -translate-x-4'>
                    <div className='w-[360px] h-[197px] bg-white bg-opacity-5 relative rounded-2xl border border-white border-opacity-20 shadow-lg flex flex-col items-center justify-center'>
                        <Image src='/Updated UI/arrow-up-right.svg' alt='arrow' width={20} height={20} className='absolute top-5 right-5' />
                        <Image src='/LOGO ECS HD 2.svg' alt='logo' width={225} height={220} className='' />
                    </div>
                    <div className='w-[355px] h-[197px] bg-white bg-opacity-5 relative rounded-2xl border border-white border-opacity-20 shadow-lg flex flex-col items-start  justify-start'>
                        <div className='flex flex-col gap-3 px-6 py-5'>

                            <h1 className='text-xl font-poppins font-regular text-white '>About Us</h1>
                            <p className='text-[12px] font-inter font-light text-white text-wrap'>Lorem ipsum dolor sit amet consectetur. Egestas ipsum diam sem a gravida eget bibendum interdum. Vestibulum aliquet elementum varius nunc urna est in. Congue a erat auctor lectus quis donec tellus. Enim eros pellentesque blandit et eget vel cursus hendrerit lorem.  </p>
                        </div>

                    </div>

                </div>
                <div className='grid grid-cols-3 gap-0 mt-5'>
                    <div className='w-[258px] h-[208px] bg-white bg-opacity-5 relative rounded-2xl border border-white border-opacity-20 shadow-lg flex flex-col justify-center px-3'>
                        <Image src='/Updated UI/2.svg' alt='logo' width={50} height={50} className='ml-2 mb-4' />
                        <h1 className='text-xl font-poppins font-regular font-text ml-2 text-white '>
                            Embedded System
                        </h1>
                        <p className='text-[12px] ml-2 mt-1 font-inter font-light text-white '>
                            Lorem ipsum dolor sit amet consectetur. Cras vulputate sed fringilla nibh. Urna pharetra at molestie quam nunc magna. Mauris luctus massa vulputate phasellus
                        </p>
                    </div>
                    <div className='w-[220px] h-[138px] bg-white bg-opacity-5 relative left-1/2 -translate-x-1/2 rounded-2xl border border-white border-opacity-20 shadow-lg flex flex-col justify-center px-3 gap-2'>
                        <Image src='/Updated UI/Mask group.svg' alt='logo' width={50} height={50} />
                        <h1 className='text-xl font-poppins font-regular font-text ml-2 text-white '>
                            Internet Of Things
                        </h1>
                    </div>
                    <div className=' w-[220px] h-[138px] bg-white bg-opacity-5 relative rounded-2xl border border-white border-opacity-20 shadow-lg flex flex-col justify-center px-3 gap-2'>
                        <Image src='/Updated UI/1.svg' alt='logo' width={50} height={50} />
                        <h1 className='text-xl font-poppins font-regular font-text ml-2 text-white '>
                            Artificial Intelligence
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};



