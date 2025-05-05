/**
 * FormDataオブジェクトを文字列に変換する関数
 * @param data FormDataオブジェクトまたはその他のデータ
 * @returns JSON文字列化されたデータ
 */
export const convertFormDataToString = (data: FormData | unknown): string => {
  if (!data) return "なし";

  return JSON.stringify(
    Array.from(data instanceof FormData ? data.entries() : []).reduce(
      (obj: Record<string, string>, [key, value]) => {
        obj[key] = value.toString();
        return obj;
      },
      {}
    )
  );
};
