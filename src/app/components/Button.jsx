import React from 'react';
import Link from 'next/link';

const Button = ({ href, children }) => {

  return (
    <Link
      href={href}
      className="border border-orange font-body text-white py-1 px-3 max-w-60 lg:py-2 lg:px-6 text-center hover:bg-orange transition-colors duration-200 lg:max-w-64"
    >
      {children}
    </Link>
  );
};

export default Button;
