"use client";

import { VStack } from "@chakra-ui/react";
import { FunctionTabs } from "./_components/FunctionTabs";

const Page = () => {
  return (
    <VStack w="full" p={4}>
      <FunctionTabs />
    </VStack>
  );
};

export default Page;
