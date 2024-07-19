export interface MenuItem {
    url: string;
    title: string;
    path: string;
    label: string;
    childItems?: {
      nodes: MenuItem[];
    };
  }
  
  export interface MenuNode {
    id: string;
    name: string;
    slug: string;
    menuItems: {
      nodes: MenuItem[];
    };
  }
  
  export interface MenuEdge {
    node: MenuNode;
  }
  
  export interface MenuData {
    edges: MenuEdge[];
    nodes: MenuNode[];
  }