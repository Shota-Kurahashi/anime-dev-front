import Head from "next/head";
import React, { FC, ReactNode } from "react";

import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
  title: string;
};

export const Layout: FC<Props> = ({ title = "Home", children }) => (
  <div className="relative z-0  h-screen w-screen items-center 2xl:container 2xl:mx-auto">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="relative z-0 flex h-full w-full  md:pl-20">
      <main className="relative h-full w-full overflow-y-auto bg-gray-50 pb-20 md:pb-0 lg:basis-2/3">
        <div className="fixed top-0 h-16 w-full border-b bg-white/[0.9] lg:absolute   lg:bg-gray-50">
          a
        </div>
        <div className="h-full w-full  pt-16">{children}</div>
      </main>
      <aside className="hidden h-full basis-1/3 border-l lg:block">a</aside>
    </div>
    <Footer />
  </div>
);
