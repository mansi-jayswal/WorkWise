import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import Link from 'next/link';

interface IBrowseByCategoryCardProps {
  category: string;
  count: number;
}

function BrowseByCategoryCard({ category, count }: IBrowseByCategoryCardProps) {
  return (
    <div className="">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="hover:text-blue-600">
            <Link href="#">{category}</Link>
          </CardTitle>
          <CardDescription>
            <p>
              Total {count} new job{count > 1 && 's'}
            </p>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default BrowseByCategoryCard;
