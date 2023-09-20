import prisma from "@./utils/prisma";
import Logout from "@/(auth)/components/button/logout";

export default async function UsersList() {
  const users = await prisma.user.findMany()
  return (
    <>
      {users.map((user, index) => {
        return (<>
            <Logout>logout</Logout>
            <div key={user.id}>
              <p>{index + 1}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          </>
        )
      })}
    </>
  )
}