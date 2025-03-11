import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Home from "./Home";
import { Flex, Spin } from "antd";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [percent, setPercent] = React.useState(-50);
  let timerId: ReturnType<typeof setTimeout>;

  React.useEffect(() => {
    timerId = setTimeout(() => {
      setPercent((v) => {
        const nextPercent = v + 5;
        return nextPercent > 150 ? -50 : nextPercent;
      });
    }, 100);
    return () => clearTimeout(timerId);
  }, [percent]);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <main className="bg-black">
        {loading ? (
          <Flex align="center" justify="center" style={{ height: "100vh" }}>
            <Spin
              size="large"
              className="custom-spin ant-spin-dot-item ant-spin-dot"
            />
          </Flex>
        ) : (
          <Home {...props} />
        )}
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
