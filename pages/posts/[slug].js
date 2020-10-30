import React from "react";
import { getPostPaths, getPostBySlug, markdownToHtml } from "../../lib/posts";

const Post = ({ post }) => {
  return <div dangerouslySetInnerHTML={{ __html: post.content }}></div>;
};

export const getStaticPaths = () => {
  const paths = getPostPaths();
  return {
    paths: paths.map((path) => {
      return {
        params: {
          slug: path.replace(/\.md$/, ""),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug);
  post.content = await markdownToHtml(post.content || "");
  return {
    props: {
      post: {
        ...post,
      },
    },
  };
};

export default Post;
