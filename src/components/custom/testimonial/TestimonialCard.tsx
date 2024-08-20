import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FaStar } from 'react-icons/fa';

interface ITestimonialCardprops {
  name: string;
  position: string;
  feedback: string;
}
function TestimonialCard({ name, position, feedback }: ITestimonialCardprops) {
  return (
    <div>
      <Card className="bg-muted p-6 md:p-8">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="border">
              {name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-muted-foreground">{position}</p>
            <div className="mb-4 flex gap-1">
              <FaStar className="text-yellow-500" size={15} />
              <FaStar className="text-yellow-500" size={15} />
              <FaStar className="text-yellow-500" size={15} />
              <FaStar className="text-yellow-500" size={15} />
              <FaStar className="text-yellow-500" size={15} />
            </div>
          </div>
        </div>
        <blockquote className="mt-4 font-serif text-lg font-semibold leading-snug">
          &ldquo;{feedback}&rdquo;
        </blockquote>
      </Card>
    </div>
  );
}

export default TestimonialCard;
