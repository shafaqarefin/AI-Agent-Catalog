import UserInfo from "../user/UserInfo";

export default function Header() {
  return (
    <header className="w-full border-b px-6 py-4">
      <h1 className="text-2xl font-semibold">ArkLab AI Agent Catalog</h1>
      <UserInfo />
    </header>
  );
}
