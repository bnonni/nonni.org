import { BlogCard } from "@/components/blog-card";
import { ENV } from "@/lib/env";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { generatePageMetadata } from "../seo";

export const metadata = generatePageMetadata({
  title: "Blog",
  description: "Read my blogs on web development, design and more.",
});

const isProd = ENV.NODE_ENV === "production";

export default function Blog() {
  const blogs = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const undraftedBlogs = isProd ? blogs.filter((blog) => !blog.draft) : blogs;

  return (
    <section>
      <ul>
        {undraftedBlogs.map((blog) => (
          <li
            key={blog.slug}
            className="divide-y divide-gray-200 py-1 dark:divide-gray-700"
          >
            <Link href={`/blog/${blog.slug}`}>
              <BlogCard blog={blog} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
