import { Tabs } from "./tabs";

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Tabs>{children}</Tabs>;
};
