"use client";
import { postPosts } from "@/functions/api";
import { Flex, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const FormStatus = () => {
  const handleSubmit = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await postPosts({
      title: "サーバーアクションのテスト",
      body: formData.get("body") as string,
    });
    console.log(formData.get("body"));
  };

  return (
    <VStack w="full" p={4}>
      <Flex fontSize="sm" color="gray.500" mb={4} w="full">
        useFormStatusで送信中のボタンのdisabledを管理するデモです。
        <br />
        子コンポーネントで送信中のformStatusを表示します。(methodはgetと判定されてる)
      </Flex>
      <form action={handleSubmit} style={{ width: "100%" }}>
        <Flex direction="column" gap={4}>
          <Field label="本文">
            <Textarea name="body" rows={4} borderColor="gray.300" />
          </Field>
          <FormButton />
          <FormStatusOutput />
        </Flex>
      </form>
    </VStack>
  );
};

export default FormStatus;

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "送信中..." : "送信"}
    </Button>
  );
};

const FormStatusOutput = () => {
  const { pending, data, method } = useFormStatus();

  // FormDataオブジェクトを文字列に変換する方法
  const formDataString = data
    ? JSON.stringify(
        Array.from(data instanceof FormData ? data.entries() : []).reduce(
          (obj: Record<string, string>, [key, value]) => {
            obj[key] = value.toString();
            return obj;
          },
          {}
        )
      )
    : "なし";

  return (
    <Stack>
      <Text>pending: {pending ? "true" : "false"}</Text>
      <Text>data: {formDataString}</Text>
      <Text>method: {method || "なし"}</Text>

      <Text as="span" fontSize="xs" color="gray.500">
        (※内部的にはPOSTリクエストが使用されていますが、formタグにmethod="POST"を指定していないため、useFormStatusではGETと表示されます。)
      </Text>
    </Stack>
  );
};
