import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface Props {
  children: ReactNode;
}

export const MainNavigation = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col items-center h-screen w-full max-w-screen-lg mx-auto">{children}</main>
      <Footer></Footer>
    </>
  );
};
