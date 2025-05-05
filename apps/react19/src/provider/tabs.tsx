"use client";

import ActionState from "@/app/_components/ActionState";
import FormStatus from "@/app/_components/FormStatus";
import Transition from "@/app/_components/Transition";
import { createContext, useState } from "react";

export const tabs = [
  { label: "useTransition", components: Transition },
  { label: "useActionState", components: ActionState },
  { label: "useFormStatus", components: FormStatus },
];
type TabContextType = (typeof tabs)[number]["label"];

export const TabsContext = createContext({
  activeTab: "useTransition",
  setActiveTab: (tab: TabContextType) => {},
});

export const Tabs = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<TabContextType>("useTransition");
  return (
    <TabsContext value={{ activeTab, setActiveTab }}>{children}</TabsContext>
  );
};
