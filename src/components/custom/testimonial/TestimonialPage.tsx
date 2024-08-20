import TestimonialCard from './TestimonialCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Sarah Thompson',
    position: 'Software Engineer',
    feedback:
      'This platform made my job search so much easier. I found my dream job within a week of signing up. The application process was seamless, and I appreciate how well everything is organized.',
  },
  {
    name: 'Michael Williams',
    position: 'Data Scientist',
    feedback:
      "I was able to apply to multiple jobs effortlessly. The website's interface is intuitive, and the job recommendations were spot on. I highly recommend this site to anyone looking for new opportunities.",
  },
  {
    name: 'Emily Johnson',
    position: 'Product Manager',
    feedback:
      'The variety of jobs available on this site is impressive. I found roles that matched my skills and interests perfectly. The detailed job descriptions helped me make informed decisions before applying.',
  },
  {
    name: 'David Martinez',
    position: 'UX Designer',
    feedback:
      'I loved the user experience on this job platform. It was easy to navigate, and the filtering options helped me find the jobs I was interested in. I landed a great job thanks to this site.',
  },
  {
    name: 'Sophia Brown',
    position: 'Marketing Specialist',
    feedback:
      'This job website has been a game-changer for my career. The application tracking feature helped me stay organized, and I was able to secure a fantastic position in a top company.',
  },
  {
    name: 'James Anderson',
    position: 'DevOps Engineer',
    feedback:
      'The job alerts feature ensured I never missed an opportunity. I found a role that aligned perfectly with my skills and career goals. Highly recommended for anyone in tech!',
  },
];

export default function TestimonialPage() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 gap-10 rounded-2xl bg-blue-200 px-4 py-12 shadow-lg md:grid-cols-2 md:py-24 lg:py-32">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What the World is talking{' '}
            <span className="text-blue-600">About us</span>
          </h2>
          <p className="text-muted-foreground">
            Hear from real people who have used our products and services. Their
            feedback helps us improve and serves as a testament to the quality
            of our work.
          </p>
        </div>
        <div className="container">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="mx-auto w-[90%] px-4"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard
                    name={testimonial.name}
                    position={testimonial.position}
                    feedback={testimonial.feedback}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
