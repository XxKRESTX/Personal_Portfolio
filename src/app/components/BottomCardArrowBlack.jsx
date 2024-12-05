import React from 'react';
import Image from 'next/image';


function BottomCornerBlack() {
    return(
        <Image src='/bottom_right_card_corner_black.svg'  alt="Bottom Right Corner Image Black" width={10} height={10} className='w-4 absolute bottom-0 right-0'/>
    )
}

export default BottomCornerBlack;