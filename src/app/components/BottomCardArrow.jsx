import React from 'react';
function BottomCardArrow({ className }) {
    return (
        <img
            src="../../../bottom_right_card_corner.svg"
            alt="Bottom Right Corner Image"
            className={`w-4 absolute ${className}`}
        />
    );
}

export default BottomCardArrow;