import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    // ---
    // title: Hello
    // slug: home
    // ---
    // <h1>Hello world!</h1>
    // Above string will be converted to json using matter
    // {
    //   content: '<h1>Hello world!</h1>',
    //   data: {
    //     title: 'Hello',
    //     slug: 'home'
    //   }
    // }
    const matterResult = matter(fileContents);

    // Returns
    // {
    //   id: "what-is-zujo",
    //   title: "Hello",
    //   slug: "home"
    // }
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
