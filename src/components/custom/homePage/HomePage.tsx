'use client';

import BrowseByCategoryPage from '../browseByCategory/BrowseByCategoryPage';
import HelpGuide from '../helpGuide/HelpGuide';
import LatestJobs from '../latestJobs/LatestJobs';
import StatsPage from '../stats/StatsPage';
import TestimonialPage from '../testimonial/TestimonialPage';
import Features from './Features';
import HeroSection from './HeroSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Features />
      <BrowseByCategoryPage />
      <TestimonialPage />
      <LatestJobs />
      <HelpGuide />
      <StatsPage />
    </>
  );
}
