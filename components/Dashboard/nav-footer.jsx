'use client';

import { LifeBuoy, Send } from 'lucide-react';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';

export function NavFooter() {
  const items = [
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ];

  return (
    <>
      <SidebarMenu>
        {items.map(item => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild size="sm">
              <a href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
