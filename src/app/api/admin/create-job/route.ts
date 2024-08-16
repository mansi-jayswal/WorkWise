import { mongoInit } from '@/lib/db/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import Job from '@/models/job.model';

mongoInit();

export async function POST(request: NextRequest) {
  try {
    const {
      companyName,
      position,
      salary,
      location,
      employmentType,
      workMode,
      description,
      tags,
      companyLogo,
    } = await request.json();

    const newJob = new Job({
      companyName,
      position,
      salary,
      location,
      employmentType,
      workMode,
      description,
      tags,
      companyLogo,
    });
    const savedJob = await newJob.save();
    return NextResponse.json({
      message: 'Job Created Successfully!',
      status: 200,
      job: savedJob,
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
        status: 500,
        job: null,
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
