export interface MenuItem {
    url: string;
    title: string;
    path: string;
    label: string;
    description:string,
    icon:{},
    childItems?: {
      nodes: MenuItem[];
    },
    megaMenu?:{
      icon?: {
        node?: {
          mediaItemUrl: string;
          altText:string,
          mediaDetails?:{
            height:number
            width:number
          }
        }
      }
    }
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