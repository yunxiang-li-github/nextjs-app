import NavLinks from "@/app/ui/dashboard/nav-links";

export default function SideNav({links}) {
  return (
    <>
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex min-h-0 flex-1 flex-col bg-coal">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <img
              className="h-8 w-auto rounded"
              src="https://avatars.githubusercontent.com/u/122238474"
              alt="Yunxiang Li"
            />
          </div>
          <nav className="mt-5 flex-1 space-y-1 px-2">
            <NavLinks />
          </nav>
        </div>
      </div>
    </>
  );
}
