import React from 'react';
import Image from 'next/image';

function TopCornerBlack() {
    return(
        <Image src="/top_left_card_corner_black.svg" 
        alt='Top Left Corner Image Black' 
        width={10}
        height={10}
        className='w-4 absolute top-0 left-0'/>
    )
}

export default TopCornerBlack;