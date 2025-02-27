import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import Resume from "./Resume";

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home {...props} />} />
            <Route path="/resume" element={<Resume {...props} />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Resume</title>;
