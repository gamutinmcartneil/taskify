export const Group = [
 
     {
        CreateUserId: "RPG",
        CreateDttm: "2021-01-19T10:09:00",
        UpdateUserId: "ROD",
        UpdateDttm: "2022-07-15T02:29:00",
        GroupModuleAccessMappings: [
            {
                Module: {
                    ModuleId: 1,
                    ModuleCd: "dashboard",
                    ModuleDesc: "Dashboard",
                    ModuleMenu: null,
                    ModuleSubMenu: null,
                    Status: null,
                    ModulePrefixes: []
                },
                GroupModuleAccessMappingId: 11787,
                GroupId: 1,
                ModuleId: 1,
                CanRead: true,
                CanWrite: true,
                CanUpdate: true,
                CanDelete: false,
                StatusId: 9
            },
           
        ],
        GroupId: 2,
        GroupName: "System Admin",
        GroupCode: "SYSADMIN",
        GroupTypeId: 3,
        StatusId: 9,
        GroupType: {
            GroupTypeId: 3,
            GroupTypeCd: "System",
            GroupTypeDesc: "department admins",
            StatusId: 9
        },
        Status: {
            StatusId: 2,
            StatusCd: "ACTV",
            Description: "Active"
        },
        GroupAppPlatforms: [
            {
                GroupAppPlatformId: 1169,
                GroupId: 2,
                AppPlatformId: 1
            }
        ],
        GroupAgencies: []
    }
       
]