export const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
};

type Post = {
  title: string;
  body: string;
};

export const postPosts = async (post: Post) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: post.title,
      body: post.body,
      userId: 1,
    }),
  });
  const data = await res.json();
  return data;
};
