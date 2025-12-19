"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, CheckCircle, Type, Upload } from "lucide-react";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

export const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const navItems = [
    {
      id: "metadata",
      label: "Extract Metadata",
      icon: FileText,
      href: "/dashboard/metadata",
    },
    {
      id: "validate",
      label: "Validate File",
      icon: CheckCircle,
      href: "/dashboard/validate",
    },
    { id: "clean", label: "Clean Text", icon: Type, href: "/dashboard/clean" },
    {
      id: "standardize",
      label: "Standardize Filename",
      icon: Upload,
      href: "/dashboard/standardize",
    },
  ];
  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="p-6">
        <Link href="/">
          <h1 className="text-2xl font-bold text-slate-900 cursor-pointer">
            DocUtility
          </h1>
        </Link>
      </div>
      <nav className="px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.id} href={item.href}>
              <button
                onClick={() => setSidebarOpen(false)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg mb-1 transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
