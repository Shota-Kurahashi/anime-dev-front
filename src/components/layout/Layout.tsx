import Head from "next/head";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const Layout: FC<Props> = ({ title = "Home", children }) => (
  <div className="relative z-0  h-screen w-screen items-center overflow-hidden 2xl:container 2xl:mx-auto">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className="fixed top-0 z-10 h-16 w-full border-r  border-b bg-white/[0.8] md:pl-20 2xl:container">
      a
    </header>
    <div className="relative z-0 flex h-full w-full overflow-hidden pt-16 md:pl-20">
      <main className=" h-full w-full basis-2/3 overflow-y-auto pb-20 md:pb-0">
        {children}
      </main>
      <aside className="hidden h-full basis-1/3 overflow-y-auto  border-x bg-white  xl:block">
        a
      </aside>
    </div>
    <footer className="fixed bottom-0 z-10 h-20 w-full border-t  bg-white md:z-10 md:h-full md:w-20 md:border-t-0 md:border-r">
      c
    </footer>
  </div>
);
