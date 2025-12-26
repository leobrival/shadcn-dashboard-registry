"use client";

import type * as React from "react";
import { Bell, Menu, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export interface BreadcrumbItem {
	label: string;
	href?: string;
}

export interface DashboardHeaderProps {
	breadcrumbs?: BreadcrumbItem[];
	showSearch?: boolean;
	searchPlaceholder?: string;
	onSearch?: (query: string) => void;
	user?: {
		name: string;
		email: string;
		avatar?: string;
	};
	notifications?: number;
	actions?: React.ReactNode;
}

export function DashboardHeader({
	breadcrumbs = [],
	showSearch = true,
	searchPlaceholder = "Search...",
	onSearch,
	user,
	notifications = 0,
	actions,
}: DashboardHeaderProps) {
	const initials = user?.name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase()
		.slice(0, 2);

	return (
		<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
			<SidebarTrigger className="-ml-1">
				<Menu className="size-4" />
			</SidebarTrigger>
			<Separator orientation="vertical" className="mr-2 h-4" />

			{/* Breadcrumbs */}
			{breadcrumbs.length > 0 && (
				<nav className="flex items-center gap-1 text-sm">
					{breadcrumbs.map((item, index) => (
						<span key={item.label} className="flex items-center gap-1">
							{index > 0 && (
								<span className="text-muted-foreground">/</span>
							)}
							{item.href ? (
								<a
									href={item.href}
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									{item.label}
								</a>
							) : (
								<span className="font-medium">{item.label}</span>
							)}
						</span>
					))}
				</nav>
			)}

			<div className="ml-auto flex items-center gap-2">
				{/* Search */}
				{showSearch && (
					<div className="relative hidden md:block">
						<Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder={searchPlaceholder}
							className="w-64 pl-8"
							onChange={(e) => onSearch?.(e.target.value)}
						/>
					</div>
				)}

				{/* Custom actions */}
				{actions}

				{/* Notifications */}
				<Button variant="ghost" size="icon" className="relative">
					<Bell className="size-4" />
					{notifications > 0 && (
						<span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
							{notifications > 9 ? "9+" : notifications}
						</span>
					)}
				</Button>

				{/* User menu */}
				{user && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="relative h-8 w-8 rounded-full">
								<Avatar className="h-8 w-8">
									<AvatarImage src={user.avatar} alt={user.name} />
									<AvatarFallback>{initials}</AvatarFallback>
								</Avatar>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56" align="end" forceMount>
							<DropdownMenuLabel className="font-normal">
								<div className="flex flex-col space-y-1">
									<p className="text-sm font-medium leading-none">{user.name}</p>
									<p className="text-xs leading-none text-muted-foreground">
										{user.email}
									</p>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Log out</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</div>
		</header>
	);
}
