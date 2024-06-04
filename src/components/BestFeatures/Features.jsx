import Image from 'next/image';
import React from 'react';

const Features = ({ image, title, subtitle, className }) => {
  return (
    <div className={`features ${className}`}>
      <Image
        alt=""
        src={image}
        height={300}
        width={300}
        className="icon-hover"
      />
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </div>
  );
};

export default Features;
