import { CiBoxList } from "react-icons/ci";


export const Menus = [
    {
        header: "Navigation",
        titleItems: [
            {
                title: "Dashboard",
                titlelink: "",
                titleIcon: <CiBoxList className="size-6" />,
                link: '/',
                submenu: true,
                privilageGroup: ['admin','dev'],
                submenuItems: [
                    {
                        title: "Home",
                        titlelink: "default",
                        link: '/',
                        access: ['admin']
                    },
                ]
            },
        ]
    },

    // {
    //     header: "Apps",
    //     titleItems: [
    //         {
    //             title: "Product",
    //             titlelink: 'product',
    //             titleIcon: <Squares2X2Icon className="size-6" />,
    //             submenu: true,
    //             privilageGroup: ['admin'],
    //             submenuItems: [
    //                 {
    //                     title: "Story",
    //                     link: '/story',
    //                     access: ['admin']
    //                 },
    //                 {
    //                     title: "Plan",
    //                     link: '/plan',
    //                     access: ['admin']
    //                 },
    //                 {
    //                     title: "Release",
    //                     link: '/release',
    //                     access: ['admin']
    //                 },
    //                 {
    //                     title: "Roadmap",
    //                     link: '/roadmap',
    //                     access: ['admin']
    //                 },
    //                 {
    //                     title: "Dynamics",
    //                     link: '/dynamics',
    //                     access: ['admin']
    //                 },
    //                 {
    //                     title: "Docs",
    //                     link: '/docs',
    //                     access: ['admin']
    //                 },
    //                 {
    //                     title: "Overview",
    //                     link: '/overview',
    //                     access: ['admin']
    //                 },
    //             ]

    //         },
    //         {
    //             title: "Projects",
    //             titlelink: 'project',
    //             titleIcon: <Square3Stack3DIcon className="size-6" />,
    //             submenu: true,
    //             privilageGroup: ['admin'],
    //             submenuItems: [
    //                 {
    //                     title: "Overview",
    //                     link: '/overview',
    //                     access: ['admin']
    //                 },
    //                 {
    //                     title: "Details",
    //                     link: '/details',
    //                     access: ['admin']
    //                 },
    //             ]

    //         },
    //         {
    //             title: "Testing",
    //             titlelink: "testing",
    //             titleIcon: <BugAntIcon className="size-6" />,
    //             submenu: true,
    //             privilageGroup: ['admin', 'qa'],
    //             submenuItems: [
    //                 {
    //                     title: "Bug",
    //                     link: '/bug',
    //                     access: ['admin','qa']
    //                 },
    //             ]

    //         },
    //         {
    //             title: "Task",
    //             titlelink: "task",
    //             titleIcon: <PencilIcon className='size-6'/>,
    //             submenu: false,
    //             privilageGroup: ['admin', 'qa', 'developer'],
    //         },
    //     ]
    // },
];