import React from 'react';
import Link from 'next/link';

const Button = ({ href, children }) => {

  return (
    <Link
      href={href}
      className="border border-orange font-body text-white py-1 px-6 text-center hover:bg-orange transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default Button;
