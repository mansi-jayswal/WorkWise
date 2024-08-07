import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function AvtarComp({ image, name }: any) {
  console.log(image);
  console.log(name);
  return (
    <div>
      <Avatar>
        <AvatarImage src={image?.toString()} />
        <AvatarFallback>{name?.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default AvtarComp;
