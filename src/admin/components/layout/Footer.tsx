import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

export const Footer = () => {
  return (
    <AntFooter style={{ textAlign: "center", marginTop: "24px" }}>
      Core Admin ©{new Date().getFullYear()} Created with ❤️ by CoreUI
    </AntFooter>
  );
};
