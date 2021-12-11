import React from 'react';

import Image from './Image';
import './Avataar.css';

const Avataar = props => {
  const avataar_classes = `avataar ${props.avataar_classes?.join(' ') || ''} ${
    props.rounded ? 'rounded' : ''
  }`;

  const img_classes = [
    'avataar__img',
    ...(props.img_classes ? props.img_classes : []),
  ];

  return (
    <div className={avataar_classes} {...props.avataar_attributes}>
      <Image
        src={props.src}
        alt={props.alt_text}
        classes={img_classes}
        attributes={props.img_attributes}
      />
    </div>
  );
};

export default Avataar;
