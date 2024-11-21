import React from 'react';


export default function InfoSection({ items }) {
  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-white bg-black p-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="font-piersansmedium">{item.label}</div>
          <div className="font-satoshilight text-sm">{item.value}</div>
        </React.Fragment>
      ))}
    </div>
  );
}
