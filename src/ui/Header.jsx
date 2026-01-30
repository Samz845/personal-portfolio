import MainNav from "./MainNav";
import UserAvatar from "./UserAvatar";

function Header() {
  return (
    <div className="flex items-center px-4 py-2 md:p-4 justify-between fixed top-0 left-0 z-50 w-full border-b-2 border-slate-200 dark:border-neutral-900 bg-slate-50 text-slate-900 dark:bg-neutral-950 dark:text-neutral-100">
      <UserAvatar />
      <MainNav />
    </div>
  );
}
export default Header;
