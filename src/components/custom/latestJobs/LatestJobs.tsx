import Heading2 from '@/components/heading/Heading2';
import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard';

interface IJob {
  companyName: string;
  location: string;
  position: string;
  salary: number;
  tags?: string[];
  companyLogo?: string;
  createdAt: string; // API usually returns dates as strings
}

function LatestJobs() {
  const [jobData, setJobData] = useState<IJob[]>([]);

  useEffect(() => {
    async function fetchJobData() {
      try {
        const response = await fetch('/api/getAllJobs');
        const data = await response.json();

        if (data.success) {
          console.log('job data is ', data);
          setJobData(data.jobs.reverse());
        }
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    }

    fetchJobData();
  }, []);

  return (
    <div className="my-16">
      <div className="flex flex-col gap-8">
        <div>
          <Heading2>Checkout the Latest Jobs</Heading2>
          <p>Opportunities are knocking your door.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobData.map((job, index) => (
            <JobCard key={index} jobData={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestJobs;
