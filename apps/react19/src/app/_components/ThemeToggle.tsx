"use client";

import { ColorModeIcon } from "@/components/ui/color-mode";
import { Center, Flex } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Flex alignItems="center" justifyContent="flex-end" gap={2} w="full">
      <Center
        p={4}
        borderRadius="full"
        bg={theme === "light" ? "gray.200" : "gray.600"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        cursor="pointer"
      >
        <ColorModeIcon />
      </Center>
    </Flex>
  );
};
