import type * as React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface StatsCardProps {
	title: string;
	value: string | number;
	description?: string;
	icon?: React.ComponentType<{ className?: string }>;
	trend?: {
		value: number;
		isPositive: boolean;
	};
	className?: string;
}

export function StatsCard({
	title,
	value,
	description,
	icon: Icon,
	trend,
	className,
}: StatsCardProps) {
	return (
		<Card className={cn("", className)}>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">{title}</CardTitle>
				{Icon && <Icon className="size-4 text-muted-foreground" />}
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{value}</div>
				<div className="flex items-center gap-1 text-xs text-muted-foreground">
					{trend && (
						<span
							className={cn(
								"flex items-center font-medium",
								trend.isPositive ? "text-green-600" : "text-red-600",
							)}
						>
							{trend.isPositive ? (
								<ArrowUp className="size-3" />
							) : (
								<ArrowDown className="size-3" />
							)}
							{Math.abs(trend.value)}%
						</span>
					)}
					{description && <span>{description}</span>}
				</div>
			</CardContent>
		</Card>
	);
}
