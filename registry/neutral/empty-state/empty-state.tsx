import type * as React from "react";
import { Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
	icon?: React.ComponentType<{ className?: string }>;
	title: string;
	description?: string;
	action?: {
		label: string;
		onClick: () => void;
	};
	className?: string;
}

export function EmptyState({
	icon: Icon = Inbox,
	title,
	description,
	action,
	className,
}: EmptyStateProps) {
	return (
		<div
			className={cn(
				"flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center",
				className,
			)}
		>
			<div className="mx-auto flex size-12 items-center justify-center rounded-full bg-muted">
				<Icon className="size-6 text-muted-foreground" />
			</div>
			<h3 className="mt-4 text-lg font-semibold">{title}</h3>
			{description && (
				<p className="mt-2 text-sm text-muted-foreground">{description}</p>
			)}
			{action && (
				<Button onClick={action.onClick} className="mt-4">
					{action.label}
				</Button>
			)}
		</div>
	);
}
