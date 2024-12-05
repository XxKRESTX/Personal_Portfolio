import React from 'react';
import Image from 'next/image';


function TopCorner({ className }) {
    return (
        <Image
            src="/top_left_card_corner.svg"
            alt="Top Left Corner Image"
            width={10}
            height={10}
            className={`w-4 absolute ${className}`}
        />
    );
}

export default TopCorner;