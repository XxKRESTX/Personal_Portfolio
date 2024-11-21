import React from 'react';
import Link from 'next/link';

function Logo() {
    return (
        <Link href="/">
            <img
                src="../../../portfolio_logo.svg"
                alt="logo with two arrows pointing out with NW initials"
                className="w-12"
            />
        </Link>
    );
}

export default Logo;
