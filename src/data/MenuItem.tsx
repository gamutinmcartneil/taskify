import { CiBoxList } from "react-icons/ci";
import { Module } from "@/data/Module"

export const MenuItem = [
    {
        header: "Navigation",
        titleItems: [
            {
                ModuleId: 1,
                ModuleCd: "",
                ModuleDesc: 'Dashboard',
                ModuleIcon: <CiBoxList className="size-6" />,
                isSubMenu: true,
                subMenuItem: [
                    {
                        ModuleId: 2,
                        ModuleCd: "home",
                        ModuleDesc: 'Home',
                    },
                    {
                        title: 'analytics',
                        description: "Analytics",
                        link: "/analytics",
                    },
                ]
            },
        ]
    },
    // {
    //     header: "Apps",
    //     titleItems: [
    //         {
    //             title: "",
    //             description: 'E-Commerce',
    //             icon: <CiBoxList className="size-6" />,
    //             isSubMenu: true,
    //             privilageGroup: ['admin','dev'],
    //             subMenuItem: [
    //                 {
    //                     title: '',
    //                     description: "Product",
    //                     link: "/product",
    //                 },
    //                 {
    //                     title: 'analytics',
    //                     description: "Product Details",
    //                     link: "/product/details",
    //                 },
    //             ]
    //         },
    //         {
    //             title: "chat",
    //             description: 'Chat',
    //             link:'/chat',
    //             icon: <CiBoxList className="size-6" />,
    //             isSubMenu: false,
    //             privilageGroup: ['admin','dev'],
    //         },
    //     ]
    // },
    // {
    //     header: "Project",
    //     titleItems: [
    //         {
    //             title: "task",
    //             description: 'Task',
    //             link:'/task',
    //             icon: <CiBoxList className="size-6" />,
    //             isSubMenu: false,
    //             privilageGroup: ['admin','dev'],
    //         },
    //     ]
    // },
];