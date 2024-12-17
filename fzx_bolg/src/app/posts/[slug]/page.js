import getPostsFiles from "@lib/posts";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

async function fetchPost(slug) { 
  const posts = getPostsFiles();
  return posts.find((post) => post.slug === slug);
}


export const Post = async ({ params }) => {
  const post = await fetchPost(params.slug);

  if (!post) notFound();


  const htmlConverter = md.render(post.content);


  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlConverter }} />
    </article>
  )
}