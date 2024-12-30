'use client';

import * as React from 'react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarRail } from '@/components/ui/sidebar';
import { NavHeader } from '@/components/Dashboard/nav-header';
import { NavFooter } from '@/components/Dashboard/nav-footer';
import { NavMain } from '@/components/Dashboard/nav-main';
import { NavProjects } from '@/components/Dashboard/nav-projects';

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavProjects />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
