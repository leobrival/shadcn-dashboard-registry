"use client";

import type * as React from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export interface DashboardLayoutProps {
	sidebar: React.ReactNode;
	header?: React.ReactNode;
	children: React.ReactNode;
	defaultOpen?: boolean;
}

export function DashboardLayout({
	sidebar,
	header,
	children,
	defaultOpen = true,
}: DashboardLayoutProps) {
	return (
		<SidebarProvider defaultOpen={defaultOpen}>
			{sidebar}
			<SidebarInset>
				{header}
				<main className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
