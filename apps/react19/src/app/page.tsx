"use client";
import { VStack } from "@chakra-ui/react";
import { ThemeToggle } from "./_components/ThemeToggle";
import { FunctionTabs } from "./_components/FunctionTabs";

const Page = () => {
  return (
    <VStack w="full" p={4}>
      <ThemeToggle />
      <FunctionTabs />
    </VStack>
  );
};

export default Page;
