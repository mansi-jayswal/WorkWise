'use client';
import joblogo from '../../../public/joblogo.png';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Heading3 from '../heading/Heading3';
import { FaRegBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import { Badge } from '../ui/badge';

function JobCard() {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };
  return (
    <div className="m-4">
      <Card className="w-[350px]">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border object-fill">
            <Image src={joblogo} alt="Company Logo" width={500} height={500} />
          </div>
          <Button
            variant="outline"
            className="flex h-8 flex-row gap-1"
            onClick={handleSaveClick}
          >
            {isSaved ? <FaBookmark /> : <FaRegBookmark />}
            {isSaved ? 'Saved' : 'Save'}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-5">
            <div className="">
              <CardTitle>Software Engineer</CardTitle>
              <CardDescription className="text-lg">
                Bacancy Technology
              </CardDescription>
              <span className="text-sm">Posted today</span>
            </div>
            <div className="flex flex-row gap-3">
              <Badge>Remote</Badge>
              <Badge>Full time</Badge>
              <Badge>Hybrid</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Salary:</Label>
              <Heading3 className="">$80K/year</Heading3>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Read more</Button>
          <Button>Apply now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default JobCard;
