import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Home from "./Home";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <>
      <main className="bg-black">
        <Home {...props} />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
