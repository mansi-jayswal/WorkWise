'use client';
import Heading3 from '@/components/heading/Heading3';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3000/api/admin');
    const data = await res.json();
    setUsers(data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log('admin page', session);
  console.log(users);

  return (
    <div className="">
      <div className="mt-4 items-center text-center">
        <Heading3>All users</Heading3>
      </div>
      <div>
        {users.map((user: any) => (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
