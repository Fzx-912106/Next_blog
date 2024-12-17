import { getPostsFiles } from "../../lib/posts";
import Link from "next/link";

export default function Home() {
  const posts = getPostsFiles();
  return (
    <div>
      <h2>MyBlog</h2>
      <ul>{posts.map((post) => (
        <li>
          <Link href={`/posts/${post.slug}`}> {post.title} </Link>
          <p> { post.date} </p>
        </li>
      ))}</ul>
    </div>
  )
}