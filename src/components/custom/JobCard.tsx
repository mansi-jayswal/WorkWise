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
    <div className="">
      <Card className="w-[80vw] max-w-max">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border object-fill">
            <Image src={joblogo} alt="Company Logo" width={300} height={300} />
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
              <Badge>Freelancer</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex flex-col gap-1 font-bold">
            <Label>Salary:</Label>
            <h4 className="text-xl">$80K/year</h4>
          </div>
          <Button className="rounded-xl">Read more</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default JobCard;
