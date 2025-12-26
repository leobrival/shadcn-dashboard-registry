# shadcn Dashboard Registry

A collection of reusable dashboard components for shadcn/ui with neutral theme.

## Installation

Install components directly from this registry:

```bash
npx shadcn@latest add https://leobrival.github.io/shadcn-dashboard-registry/r/dashboard-sidebar.json
```

Or configure the registry in your `components.json`:

```json
{
  "registries": {
    "@dashboard": "https://leobrival.github.io/shadcn-dashboard-registry/r/{name}.json"
  }
}
```

Then install with:

```bash
npx shadcn@latest add @dashboard/dashboard-sidebar
```

## Available Components

### Dashboard Sidebar

A collapsible sidebar with navigation, user menu, and theme support.

```bash
npx shadcn@latest add @dashboard/dashboard-sidebar
```

### Dashboard Header

A responsive header with breadcrumbs, search, and user actions.

```bash
npx shadcn@latest add @dashboard/dashboard-header
```

### Dashboard Layout

A complete dashboard layout combining sidebar, header, and content area.

```bash
npx shadcn@latest add @dashboard/dashboard-layout
```

### Stats Card

A card for displaying statistics with icon, value, and trend indicator.

```bash
npx shadcn@latest add @dashboard/stats-card
```

### Data Table

A feature-rich data table with sorting, filtering, and pagination.

```bash
npx shadcn@latest add @dashboard/data-table
```

### Empty State

A placeholder for empty data states with icon, message, and action button.

```bash
npx shadcn@latest add @dashboard/empty-state
```

## Usage Example

```tsx
import { DashboardLayout } from "@/components/dashboard-layout";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { StatsCard } from "@/components/stats-card";
import { Home, Users, Settings } from "lucide-react";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Users", url: "/users", icon: Users },
  { title: "Settings", url: "/settings", icon: Settings },
];

const user = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/avatar.jpg",
};

export default function DashboardPage() {
  return (
    <DashboardLayout
      sidebar={
        <DashboardSidebar
          title="My App"
          navItems={navItems}
          user={user}
        />
      }
      header={
        <DashboardHeader
          breadcrumbs={[
            { label: "Dashboard", href: "/" },
            { label: "Overview" },
          ]}
          user={user}
        />
      }
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          trend={{ value: 20.1, isPositive: true }}
          description="from last month"
        />
      </div>
    </DashboardLayout>
  );
}
```

## Theme

This registry uses the **neutral** color scheme from shadcn/ui. Components are designed to work seamlessly with both light and dark modes.

## Development

```bash
# Install dependencies
bun install

# Add shadcn components
bunx shadcn@latest add sidebar button avatar dropdown-menu tooltip collapsible separator card input table select

# Build registry
bun run registry:build

# Preview
bun run dev
```

## License

MIT
