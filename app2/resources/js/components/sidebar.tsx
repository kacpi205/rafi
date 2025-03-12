import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Products',
        url: '/products',
        icon: LayoutGrid,
    },
];



export function Sidebarprime() {
    return (
        <Sidebar variant="inset">

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>


        </Sidebar>
    );
}
