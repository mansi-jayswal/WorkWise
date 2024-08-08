'use client';
import Image from 'next/image';
import React from 'react';
import jobSearch from '../../../public/jobSearch.webp';
import { Button } from '../ui/button';
import { FaRegEdit } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { GrAchievement } from 'react-icons/gr';
import { useRouter } from 'next/navigation';

const featuresData = [
  {
    icon: <FaRegEdit size={25} />,
    title: 'No cost to join',
    description:
      'Register and browse talent profiles, explore projects, or even book a consultation.',
  },
  {
    icon: <GrLocation size={25} />,
    title: 'Post a job and hire top talent',
    description:
      'Finding talent does not have to be a chore. Post a job or we can search for you!',
  },
  {
    icon: <GrAchievement size={25} />,
    title: 'Work with the best—without breaking the bank',
    description:
      'Workwise makes it affordable to up your work and take advantage of low transaction rates.',
  },
];

function Features() {
  const router = useRouter();
  return (
    <div className="mx-auto my-8 flex flex-col items-center justify-center px-4 lg:flex-row lg:gap-8">
      <div className="mt-8 flex w-full items-center justify-center lg:mt-0 lg:w-1/3">
        <Image
          src={jobSearch}
          alt="Hero section image"
          className="h-auto w-full animate-pulse"
          height={500}
          width={500}
        />
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-8 lg:w-2/3">
        <h1 className="text-3xl font-bold">
          Up your work game, it&apos;s so easy!
        </h1>
        <div className="flex flex-col gap-7">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex flex-row items-center gap-3">
              {feature.icon}
              <div>
                <p className="font-bold">{feature.title}</p>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4 sm:gap-6">
          <Button
            className="w-full rounded-md sm:w-auto"
            onClick={() => router.push('/login')}
          >
            Login for free
          </Button>
          <Button
            className="w-full rounded-md sm:w-auto"
            onClick={() => router.push('/register')}
          >
            Register yourself
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Features;
