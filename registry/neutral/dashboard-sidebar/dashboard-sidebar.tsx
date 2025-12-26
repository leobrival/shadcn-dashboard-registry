"use client";

import type * as React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

export interface NavItem {
	title: string;
	url: string;
	icon?: React.ComponentType<{ className?: string }>;
	isActive?: boolean;
	items?: {
		title: string;
		url: string;
	}[];
}

export interface DashboardSidebarProps
	extends React.ComponentProps<typeof Sidebar> {
	logo?: React.ReactNode;
	title?: string;
	navItems: NavItem[];
	user?: {
		name: string;
		email: string;
		avatar?: string;
	};
}

export function DashboardSidebar({
	logo,
	title = "Dashboard",
	navItems,
	user,
	...props
}: DashboardSidebarProps) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="/">
								{logo && (
									<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
										{logo}
									</div>
								)}
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">{title}</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={navItems} />
			</SidebarContent>
			{user && (
				<SidebarFooter>
					<NavUser user={user} />
				</SidebarFooter>
			)}
			<SidebarRail />
		</Sidebar>
	);
}
