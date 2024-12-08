"use client";
import { postPosts } from "@/functions/api";
import { Flex, Input, Textarea, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";

const Transition = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await postPosts({ title, body });
      setTitle("");
      setBody("");
    });
  };
  return (
    <VStack w="full" p={4}>
      <form action={handleSubmit} style={{ width: "100%" }}>
        <Flex direction="column" gap={4}>
          <Field label="タイトル">
            <Input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              borderColor="gray.300"
            />
          </Field>
          <Field label="本文">
            <Textarea
              name="body"
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              borderColor="gray.300"
            />
          </Field>
          <Button type="submit" disabled={isPending}>
            {isPending ? "送信中..." : "送信"}
          </Button>
        </Flex>
      </form>
    </VStack>
  );
};

export default Transition;
