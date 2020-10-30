import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = join(process.cwd(), "posts");

export const getPostPaths = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (slug) => {
  const realSlug = slug.replace(/\.md$/, "");
  const path = join(postsDirectory, `${realSlug}.md`);
  const contents = fs.readFileSync(path, "utf8");
  const { content, data } = matter(contents);

  return {
    slug: realSlug,
    content,
    ...data,
  };
};

export const getPosts = () => {
  const slugs = getPostPaths();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date > b.date ? "-1" : "1"));
  return posts;
};

export const markdownToHtml = async (markdown) => {
  const res = await remark().use(html).process(markdown);
  return res.toString();
};
