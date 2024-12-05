import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Logo() {
    return (
        <Link href="/" alt='links to the home page' className='focus:outline-orange'>
            <Image
                src="/portfolio_logo.svg"
                alt="logo with two arrows pointing out with NW initials"
                width={120}
                height={102}
                className="w-12 focus:outline focus:outline-orange"
            />
        </Link>
    );
}

export default Logo;
