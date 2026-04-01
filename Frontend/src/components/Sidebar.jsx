import { ChartNetwork, Crown, FolderKanban, Highlighter, Home, Search, Settings, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const primaryNavItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "Search", to: "/search", icon: Search },
  { label: "Graph View", to: "/graph-view", icon: ChartNetwork },
  { label: "Collections", to: "/collections", icon: FolderKanban },
  { label: "Resurfaced", to: "/resurfaced", icon: Sparkles },
  { label: "Highlights", to: "/highlights", icon: Highlighter },
];

const secondaryNavItems = [
  { label: "Settings", to: "/settings", icon: Settings }
];

function Sidebar() {
  
  const { pathname } = useLocation();

  function getItemClasses(item) {
    const isActive = pathname === item.to;

    if (item.accent) {
      return isActive ? "bg-amber-100 text-amber-700 font-semibold" : "text-amber-700 hover:bg-amber-50";
    }

    return isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-slate-600 hover:bg-gray-100";
  }

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-60 flex-col border-r border-slate-200 bg-white px-4 py-6">
      <div className="flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">R</div>
        <div>
          <p className="text-md font-semibold tracking-wide text-slate-900">RELYNK</p>
          <p className="text-xs text-slate-500">Knowledge workspace</p>
        </div>
      </div>

      <nav className="mt-8 space-y-1">
        {primaryNavItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.to} to={item.to} className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm transition-colors duration-200 ${getItemClasses(item)}`}>
              <Icon size={19} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-1 border-t border-slate-200 pt-4">
        {secondaryNavItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.to} to={item.to} className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm transition-colors duration-200 ${getItemClasses(item)}`}>
              <Icon size={19} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
