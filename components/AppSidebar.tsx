import { Home, User2, Info, GalleryVerticalEndIcon , LogOutIcon } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
    { title: "Home", url: "#", icon: Home },
    { title: "Rooms", url: "#", icon: GalleryVerticalEndIcon },
    { title: "Profile", url: "#", icon: User2 },
    { title: "Guide", url: "#", icon: Info },
    { title: "Logout", url: "#", icon:LogOutIcon },
];

export function AppSidebar({ children }: { children?: React.ReactNode }) {
    return (
        <div className="bg-black font-">
            <Sidebar className=" border-b border-zinc-700" >
                <SidebarContent className="bg-[#262626] text-[#d4d4d4]" >
                    <SidebarGroup className=" border-b border-zinc-700" >
                        <SidebarGroupLabel className="text-2xl font-semibold p-5 py-6  text-white  border-b border-zinc-700 rounded-none">
                            EnjoyTogether</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu className="p-2 gap-2">
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title} >
                                        <SidebarMenuButton asChild className="hover:bg-[#404040] hover:text-[#fff] gap-3 active:bg-[#404040] active:text-[#fff]">
                                            <a href={item.url}>
                                                <item.icon />
                                                <span className="text-lg">{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                {children}
            </Sidebar>
        </div>
    );
}
