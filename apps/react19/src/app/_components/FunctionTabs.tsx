"use client";

import { Flex, Tabs } from "@chakra-ui/react";
import { tabs, TabsContext } from "@/provider/tabs";
import { useContext } from "react";

export const FunctionTabs = () => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <Tabs.Root defaultValue={activeTab} w="full">
      <Tabs.List p={4} w="full">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.label}
            value={tab.label}
            onClick={() => setActiveTab(tab.label)}
          >
            <Flex px={2}>{tab.label}</Flex>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Content key={tab.label} value={tab.label} w="full">
          <tab.components />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
