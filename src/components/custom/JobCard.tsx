'use client';
// import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
// import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import AvtarComp from './AvtarComp';

interface JobCardProps {
  jobData: {
    companyName: string;
    location: string;
    position: string;
    salary: number;
    tags?: string[];
    companyLogo?: string;
    createdAt: Date;
  };
}

function JobCard({ jobData }: JobCardProps) {
  // const [isSaved, setIsSaved] = useState(false);

  // const handleSaveClick = () => {
  //   setIsSaved(!isSaved);
  // };

  return (
    <Card className="w-[80vw] max-w-max shadow-xl">
      <CardHeader className="flex flex-row items-center justify-start">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border object-fill">
          {jobData.companyLogo ? (
            <Image
              // src={jobData.companyLogo as string}
              src="/public/jobLogo.png"
              alt="Company Logo"
              width={300}
              height={300}
            />
          ) : (
            <AvtarComp name={jobData.companyName} />
          )}
        </div>
        <div className="ml-5 flex flex-col gap-1">
          <p className="text-lg font-bold">{jobData.companyName}</p>
          <p className="text-sm">{jobData.location}</p>
        </div>
        {/* <Button
          variant="ghost"
          className="ml-auto flex h-8 flex-row gap-1"
          onClick={handleSaveClick}
        >
          {isSaved ? <FaBookmark /> : <FaRegBookmark />}
        </Button> */}
      </CardHeader>
      <div className="mx-3 mb-4 h-[1px] bg-gray-400"></div>
      <CardContent>
        <div className="flex flex-col gap-5">
          <div className="">
            <CardTitle>{jobData.position}</CardTitle>
            <span className="text-sm">
              Posted on {jobData.createdAt.toDateString()}
            </span>
          </div>
          <div className="flex flex-row gap-3">
            {jobData.tags &&
              jobData.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex flex-col gap-1 font-bold">
          <Label>Salary:</Label>
          <h4 className="text-xl">
            ${jobData.salary}
            <span className="align text-sm">/month</span>
          </h4>
        </div>
        <Button className="rounded-xl">Read more</Button>
      </CardFooter>
    </Card>
  );
}

export default JobCard;
