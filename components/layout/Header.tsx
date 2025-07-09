import UserInfo from "../user/UserInfo";

export default function Header() {
  return (
    <header className="w-full border-b px-4 py-3 flex justify-between items-center">
      <h1 className="hidden sm:block text-xl font-semibold">
        AI Agent Catalog
      </h1>

      <div className="text-xs sm:text-sm">
        <UserInfo />
      </div>
    </header>
  );
}
