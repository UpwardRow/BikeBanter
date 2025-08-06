"use client"

import { Bike, CircleUserRound, Inbox, Settings, } from "lucide-react"
import * as React from "react"

import { NavMain } from "@/app/components/templates/sidebar-components/nav-main"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarRail,
} from "@/components/ui/sidebar"

const data = {
    navMain: [
        {
            title: "Inbox",
            url: "#",
            icon: Inbox,
        },
        {
            title: "Settings",
            url: "/settings",
            icon: Settings,
        },
        {
            title: "Account",
            url: "/account",
            icon: CircleUserRound,
        },
        {
            title: "Gear",
            url: "/gear",
            icon: Bike,
        },
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
