import { getUsers } from "@/services/userService";

export default async function Page() {
  const users = await getUsers();

  return (
    <div>
      <p>Users page</p>
      {users.map((u) => (
        <li>{u.name}</li>
      ))}
    </div>
  );
}
