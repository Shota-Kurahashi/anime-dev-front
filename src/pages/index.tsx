import type { NextPage } from "next";
import { Login } from "../components/auth/Login";
import { Layout } from "../components/layout/Layout";

const Home: NextPage = () => (
  <Layout title="home">
    <Login />
  </Layout>
);

export default Home;
