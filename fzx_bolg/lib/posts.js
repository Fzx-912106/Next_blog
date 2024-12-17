import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postDir = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  const fileNames = fs.readdirSync(postDir);
  return fileNames.map((fileName) => {
    // console.log(fileName)
    // const slug = fileName.replace(".md", "");
    const filePath = path.join(postDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
      params: {
        slug: fileName.replace(".md", ""),
      },
      content,
      ...data,
    };
  })
}