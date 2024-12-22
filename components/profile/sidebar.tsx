"use client";

import { Separator } from "@/components/ui/separator";
import { ProfileInfo } from "./sidebar/profile-info";
import { SocialLinks } from "./sidebar/social-links";
import { SidebarNav } from "./navigation/sidebar-nav";

export function Sidebar() {
  return (
    <aside className="w-[400px] border-r border-white/10 bg-black/40 backdrop-blur-xl p-8 flex flex-col items-center">
      <ProfileInfo />
      <SidebarNav />
      <Separator className="my-8 bg-white/10" />
      <SocialLinks />
    </aside>
  );
}