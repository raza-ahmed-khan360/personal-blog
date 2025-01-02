export interface SideBar {
    sidebarId: string;
    sidebarSlug: string;
    sidebarTitle: string;
    sidebarDate: string;
    sidebarExcerpt: string;
    sidebarImage: string;
    tags: Array<{
      label: string;
      color: string;
      bgColor: string;
    }>
}