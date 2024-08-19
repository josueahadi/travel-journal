import { ReactNode } from "react";

function Layout({ children }: { readonly children: ReactNode }) {
  return <section className="">{children}</section>;
}

export default Layout;
