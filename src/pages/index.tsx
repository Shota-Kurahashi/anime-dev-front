import type { NextPage } from "next";
import { DashBoard } from "../components/DashBoard";
import { Layout } from "../components/layout/Layout";

const Home: NextPage = () => (
  <Layout title="home">
    <DashBoard />
  </Layout>
);

export default Home;
