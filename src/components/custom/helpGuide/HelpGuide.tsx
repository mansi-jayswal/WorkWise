import React from 'react';

interface IData {
  number: number;
  heading: string;
  description: string;
}

const data: IData[] = [
  {
    number: 1,
    heading: 'Create your free profile',
    description:
      'Highlight your skills and experience, show your portfolio, and set your ideal pay rate.',
  },
  {
    number: 2,
    heading: 'Explore the opportunities',
    description: 'Find the jobs as per your preferences.',
  },
  {
    number: 3,
    heading: 'Apply and crack it!',
    description: 'Apply for an opening - Best of Luck!',
  },
];
function HelpGuide() {
  return (
    <div>
      <section
        id="works"
        className="relative rounded-xl bg-current py-10 sm:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mx-auto text-4xl font-extrabold text-white md:text-6xl lg:text-5xl">
              How does it work?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400 md:text-2xl">
              Our solution will help you from start to finish
            </p>
          </div>
          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
              <img
                alt=""
                loading="lazy"
                width="1000"
                height="500"
                decoding="async"
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              />
            </div>
            <div className="relative grid grid-cols-1 gap-x-12 gap-y-12 text-center md:grid-cols-3">
              {data.map((d, index) => (
                <div key={index}>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                    <span className="text-xl font-semibold text-gray-700">
                      {d.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">
                    {d.heading}
                  </h3>
                  <p className="mt-4 text-base text-gray-400 md:text-lg">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto h-[357px] max-w-xs blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)',
          }}
        ></div>
      </section>
    </div>
  );
}

export default HelpGuide;
