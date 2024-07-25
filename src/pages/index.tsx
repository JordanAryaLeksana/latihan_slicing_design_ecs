import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ECS = () => {
  return (
    <div className="min-h-screen text-text w-screen bg-[#1E1E1E] relative z-50">

      <Image
        src="/Group.svg"
        alt="Background Image"
        fill
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="relative"
      />
      <div className="flex justify-evenly gap-10 items-center absolute bg-[#323231] w-[428px] h-[68px] top-6 right-1/2 translate-x-[205px] rounded-full">
        <div className="flex items-center gap-10">
          <Link href='/' className='cursor-pointer'>
            <Image className="" src="/Frame 136.svg" alt="logo-image" width={50} height={50} />
          </Link>
          <Link href='/about/page' className='cursor-pointer'>
            <Image className="" src="/user.svg" alt="logo" width={30} height={30} />
          </Link>
          <Link href='/' className='cursor-pointer'>
            <Image className="" src="/artboard.svg" alt="logo" width={30} height={30} />
          </Link>
        </div>
        <Link href='/' className='cursor-pointer'>
          <div className="flex px-4 py-2 bg-white rounded-full">
            <h1 className="">React Us</h1>
          </div>
        </Link>
        <Image alt="logo" src="/Ellipse 2.svg" width={100} height={120} className="absolute left-1/2 translate-x-[5.2rem] z-[-1]" />
      </div>
      <h1 className="w-full absolute text-6xl font-black top-1/3 left-1/2 translate-y-[3rem] text-[#AFACA2] -translate-x-[280px]">
        ECS LABORATORY
      </h1>
      <div className="font-l text-[#AFACA2] absolute top-1/2 right-1/2 translate-x-[11rem] translate-y-[2.5rem] flex items-center space-x-4">
        <p>The World Were We Explore</p>
        <div className="flex items-center justify-center border border-[#AFACA2] rounded-full px-4 py-2">
          <p>Internet Of Things</p>
        </div>
      </div>
      <div className="flex items-center gap-5 absolute top-3/4 left-1/2 -translate-x-1/2">
        <Link href='https://www.linkedin.com/company/ecslaboratory/'>
          <Image src="/Social icon.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link href='https://www.instagram.com/ecs_epits?igsh=MWRvdm13YWNiNmg3bg=='>
          <Image src="/Social icon-4.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link href=''>
          <Image src="/Social icon-1.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link href=''>
          <Image src="/Social icon-2.svg" alt="logo" width={23} height={23} />
        </Link>
      </div>
    </div>
  );
};

export default ECS;
