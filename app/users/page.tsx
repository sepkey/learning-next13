import React from 'react';
interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
  /// data that changes frequently => disable catching and for dynamic rendering
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-cache',
  });

  //Keep data fresh for a certain period of time and for static rendering
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users', {
  //     next: { revalidate: 10 },
  //   });
  const users: User[] = await res.json();

  return (
    <div>
      {new Date().toLocaleTimeString()}
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
