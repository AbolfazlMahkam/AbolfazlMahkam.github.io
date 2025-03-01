import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import Resume from "./Resume";

const IndexPage: React.FC<PageProps> = (props) => {
  const [title, setTitle] = React.useState("Home");
  const [showHome, setShowHome] = React.useState<boolean>(true);
  const [showResume, setShowResume] = React.useState<boolean>(false);
  return (
    <>
      <main>
        {showHome && (
          <Home
            {...props}
            setShowHome={setShowHome}
            setShowResume={setShowResume}
            setTitle={setTitle}
          />
        )}
        {showResume && (
          <Resume
            {...props}
            setShowHome={setShowHome}
            setShowResume={setShowResume}
          />
        )}
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Abolfazl Mahkam</title>;
