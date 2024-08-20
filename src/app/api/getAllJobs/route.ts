import { mongoInit } from '@/lib/db/dbConfig';
import Job from '@/models/job.model';
import { NextResponse } from 'next/server';

mongoInit();

export async function GET() {
  try {
    const jobData = await Job.find();
    return NextResponse.json({
      message: 'Jobs fetched successfully!',
      status: 200,
      jobs: jobData,
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || 'An error occurred while fetching jobs.',
        status: 500,
        jobs: null,
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
