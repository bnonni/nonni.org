import NotFound from "@/app/not-found";
import { Mdx } from "@/components/mdx";
import { meta } from "@/data/site-metadata";
import { formatDate } from "@/lib/utils";
import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";

export async function generateStaticParams() {
  const paths = allBlogs.map((blog) => ({ slug: blog.slug }));

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const blog = allBlogs.find((p) => p.slug === params.slug);
  if (!blog) {
    return;
  }

  const ogImage = `${meta.siteUrl}/og?title=${blog.title}`;

  return {
    title: blog.title,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      siteName: meta.title,
      locale: "en_US",
      type: "article",
      publishedTime: blog.publishedAt,
      url: "./",
      authors: meta.author,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold tracking-tighter">
        <Balancer>{blog.title}</Balancer>
      </h1>
      <div className="mb-8 mt-2 flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
        <p>
          {formatDate(blog.publishedAt)} - {blog.readingTime.text}
        </p>
      </div>
      <Mdx code={blog.body.code} />
    </section>
  );
}
