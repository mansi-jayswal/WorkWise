import { userRole } from '@/constants/enums';
import { mongoInit } from '@/lib/db/dbConfig';
import User from '@/models/user.model';
import { NextResponse } from 'next/server';

mongoInit();

export async function GET() {
  try {
    const data = await User.find({ role: userRole.USER });
    return NextResponse.json({
      users: data,
      status: 200,
      message: 'users fetched successfully!',
    });
  } catch (error) {
    return NextResponse.json({
      error,
      status: 400,
      message: 'error in fetching the data!',
    });
  }
}
