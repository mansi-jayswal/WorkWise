import React, { useEffect, useState } from 'react';
import BrowseByCategoryCard from './BrowseByCategoryCard';
import Heading2 from '../../heading/Heading2';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

function BrowseByCategoryPage() {
  // const [categories, setCategories] = useState<string[]>([]);
  const [categoryCounts, setCategoryCounts] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    async function fetchJobData() {
      try {
        const response = await fetch('/api/getAllJobs');
        const data = await response.json();

        if (data.success) {
          const counts = data.jobs.reduce(
            (
              acc: Record<string, number>,
              { position }: { position: string },
            ) => {
              acc[position] = (acc[position] || 0) + 1;
              return acc;
            },
            {},
          );
          console.log(counts);

          setCategoryCounts(counts);
        }
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    }

    fetchJobData();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <Heading2>Browse Jobs by Category</Heading2>
      <p>Find jobs as per your preference.</p>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Object.keys(categoryCounts).map((category) => (
          <BrowseByCategoryCard
            key={category}
            category={category}
            count={categoryCounts[category]}
          />
        ))}
      </div>
      <div className="my-6 text-end">
        <div className="flex flex-row items-center justify-center gap-2 bg-green-400 text-lg font-bold text-blue-600">
          <Link href="/all-jobs">See all jobs</Link>
          <FaLongArrowAltRight size={20} />
        </div>
      </div>
    </div>
  );
}

export default BrowseByCategoryPage;
