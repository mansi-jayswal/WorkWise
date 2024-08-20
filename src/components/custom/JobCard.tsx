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
import AvtarComp from './AvtarComp';
import Link from 'next/link';

interface IJob {
  companyName: string;
  location: string;
  position: string;
  salary: number;
  tags?: string[];
  companyLogo?: string;
  createdAt: string;
}

interface JobCardProps {
  jobData: IJob;
}

function JobCard({
  jobData: {
    companyName,
    location,
    position,
    salary,
    tags,
    companyLogo,
    createdAt,
  },
}: JobCardProps) {
  return (
    <Card className="max-w-sm overflow-hidden rounded shadow-lg">
      <CardHeader className="flex flex-row items-center justify-start">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border">
          {companyLogo ? (
            <img
              src={companyLogo as string}
              alt="Company Logo"
              className="h-full w-full object-cover"
            />
          ) : (
            <AvtarComp name={companyName} />
          )}
        </div>
        <div className="ml-5 flex flex-col gap-1">
          <p className="text-lg font-bold">{companyName}</p>
          <p className="text-sm">{location}</p>
        </div>
      </CardHeader>
      <div className="mx-3 mb-4 h-[1px] bg-gray-400"></div>
      <CardContent>
        <div className="flex flex-col gap-5">
          <div>
            <CardTitle>{position}</CardTitle>
            <span className="text-sm">
              Posted on {new Date(createdAt).toDateString()}
            </span>
          </div>
          <div className="flex flex-row gap-3">
            {tags && tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex flex-col gap-1 font-bold">
          <Label>Salary:</Label>
          <h4 className="text-xl">
            ${salary}
            <span className="align text-sm">/month</span>
          </h4>
        </div>
        <Button className="rounded-xl">
          <Link href="#">Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default JobCard;
