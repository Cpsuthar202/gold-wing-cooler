interface ITextButtonList {
  id: string;
  label: string;
  link: string;
  subMenu?: ITextButtonList[]; // Optional submenu for dropdown
}

import product from "@/data/products.json";

const model_name = product.map((product) => product.model_name); // Extract model names

// Generate subMenu dynamically based on model_name
const modelNameSubMenu: ITextButtonList[] = model_name.map((m) => ({
  id: m.toLowerCase().replace(/\s+/g, "-"), // Generate a unique ID for each model name
  label: m,
  link: `/product_details?model_name=${encodeURIComponent(m)}`,
}));

console.log(modelNameSubMenu);

const sidebarMenuList: ITextButtonList[] = [
  {
    id: "home",
    label: "Home",
    link: "/",
  },
  {
    id: "model_name",
    label: "Model Name",
    link: "#",
    subMenu: modelNameSubMenu, // Assign the dynamically generated subMenu
  },
  {
    id: "dealers",
    label: "Dealers",
    link: "/dealers",
  },
  // {
  //   id: "table",
  //   label: "Table",
  //   link: "/table",
  // },
  // {
  //   id: "about",
  //   label: "About",
  //   link: "/about",
  // },
];

export { sidebarMenuList };
