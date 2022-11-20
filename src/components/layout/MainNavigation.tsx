import { ReactNode } from "react";
import { Header } from "../Header";

interface Props {
  children: ReactNode;
}

export const MainNavigation = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      <main className="">{children}</main>
      <footer></footer>
    </>
  );
};
