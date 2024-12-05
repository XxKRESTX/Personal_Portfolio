import React from 'react';
import Image from 'next/image';
function BottomCardArrow({ className }) {
    return (
        <Image
            src="/bottom_right_card_corner.svg"
            alt="Bottom Right Corner Image"
            className={`w-4 absolute ${className}`}
        />
    );
}

export default BottomCardArrow;