"use client"

import { Bike, BookOpenText, CircleUserRound, Inbox, Map, Settings, UsersRound, } from "lucide-react"
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
            title: "Journey Map",
            url: "/",
            icon: Map,
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
        {
            title: "Connect",
            url: "/connect",
            icon: UsersRound,
        },
        {
            title: "Settings",
            url: "/settings",
            icon: Settings,
        },
        {
            title: "About",
            url: "/about",
            icon: BookOpenText,
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
