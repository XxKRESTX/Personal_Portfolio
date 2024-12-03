import React from 'react';
import Image from 'next/image';

function ComputerMockup() {
    return(
        <Image 
        src="/computer_mockup.svg"
        alt='A grey macbook'
        width={1000}
        height={1000}
        className='w-full'
        />
    )
}

export default ComputerMockup;