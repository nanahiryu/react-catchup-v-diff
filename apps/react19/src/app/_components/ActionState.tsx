"use client";
import { postPosts } from "@/functions/api";
import { Flex, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";

const ActionState = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [error, submitAction, isPending] = useActionState(async () => {
    // titleがfooの場合はエラー
    if (title === "foo") {
      return { success: false, message: "title is foo" };
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await postPosts({ title, body });
    setTitle("");
    setBody("");
    return { success: true, message: "your post has been created" };
  }, null);

  return (
    <VStack w="full" p={4}>
      <Flex fontSize="sm" color="gray.500" mb={4} w="full">
        useActionStateを使用して、非同期処理中のローディング状態を管理し、ユーザーフィードバックを提供するデモです。
        <br />
        送信ボタンのクリックによって、非同期処理が開始され、非同期処理が完了するまでpending状態になります。
        <br />
        エラーが発生した場合は、エラーメッセージが表示されます。(titleがfooの場合)
      </Flex>
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
