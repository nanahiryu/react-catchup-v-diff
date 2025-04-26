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
      <Flex fontSize="sm" color="gray.500" mb={4}>
        useTransitionを使用して、非同期処理中のローディング状態を管理し、ユーザーフィードバックを提供するデモです。
        <br />
        送信ボタンのクリックによって、非同期処理が開始され、非同期処理が完了するまでpending状態になります。
      </Flex>
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
