export type MenuStatus = "soon" | "beta" | "alpha" | "Early Access";

export type MenuEntry = {
  title: string;
  path: string;
  status: MenuStatus;
  subMenu?: MenuEntry[];
};
