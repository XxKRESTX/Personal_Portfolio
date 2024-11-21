import React from 'react';

function TopCorner({ className }) {
    return (
        <img
            src="../../../top_left_card_corner.svg"
            alt="Top Left Corner Image"
            className={`w-4 absolute ${className}`}
        />
    );
}

export default TopCorner;