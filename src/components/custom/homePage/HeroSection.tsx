import Image from 'next/image';
import React from 'react';
import heroSectionImage from '../../../../public/herosectionImage.png';
import microsoft from '../../../../public/microsoft.svg';
import airbnb from '../../../../public/airbnb.svg';
import bissel from '../../../../public/bissell.svg';
import { Button } from '../../ui/button';

function HeroSection() {
  return (
    <div className="mx-auto flex flex-col-reverse items-center justify-center py-16 lg:flex-row">
      <div className="flex w-full flex-col items-start justify-center gap-8 lg:w-1/2">
        <h1 className="mt-4 text-4xl font-bold lg:text-7xl">
          How work should work
        </h1>
        <h2 className="text-xl lg:text-2xl">
          Forget the old rules. You can have the best people. Right now. Right
          here.
        </h2>
        <Button className="rounded-md">Get started</Button>
        <div className="mt-16">
          <p className="text-2xl font-bold">Trusted by</p>
          <div className="flex flex-row gap-6">
            <Image
              src={microsoft}
              alt=" microsoft image"
              height={100}
              width={100}
            />
            <Image src={airbnb} alt="airbnb image" height={100} width={100} />
            <Image src={bissel} alt="bissell image" height={40} width={80} />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center sm:mt-0 lg:w-1/2">
        <Image
          src={heroSectionImage}
          alt="Hero section image"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
}

export default HeroSection;
