"use client";
import { postPosts } from "@/functions/api";
import { Flex, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useActionState, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";

const ActionState = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [error, submitAction, isPending] = useActionState(async () => {
    // titleがfooの場合はエラー
    if (title === "foo") {
      return { success: false, error: "title is foo" };
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await postPosts({ title, body });
    setTitle("");
    setBody("");
    return { success: true, message: "your post has been created" };
  }, null);

  return (
    <VStack w="full" p={4}>
      <form action={submitAction} style={{ width: "100%" }}>
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
      <Text color={error && error.success ? "teal" : "red"}>
        {error?.message}
      </Text>
    </VStack>
  );
};

export default ActionState;
