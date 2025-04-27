"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Tabs } from "./tabs";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Tabs>{children}</Tabs>
    </ChakraProvider>
  );
};
