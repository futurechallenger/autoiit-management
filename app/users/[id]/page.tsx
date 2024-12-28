import { getUsers } from "@/services/userService";

export default async function Page() {
  const users = await getUsers();
  return (
    <>
      <p>User detail page</p>;
      <ul>
        {users.map((u) => (
          <li>{u.name}</li>
        ))}
      </ul>
    </>
  );
}
