import HomePage from '@/components/custom/HomePage';
import JobCard from '@/components/custom/JobCard';
import React from 'react';

function page() {
  return (
    <>
      <div>
        <HomePage />
      </div>
      <div className="grid grid-cols-4">
        <JobCard />
        {/* <JobCard />
        <JobCard />
        <JobCard />
        <JobCard /> */}
      </div>
    </>
  );
}

export default page;
