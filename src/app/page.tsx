import { BlogCard } from "@/components/blog-card";
import { SocialLink } from "@/components/social-link";
import { LINKS } from "@/lib/constants";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SOCIALS } from "../data/socials";

export default function Home() {
  const blogs = allBlogs.slice(0, 2).sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <React.Fragment>
      <section className="mb-5">
        <Image
          src="/_static/nonni-org-profile.jpg"
          width={250}
          height={250}
          alt="avatar"
          className="mb-5 cursor-pointer hover:grayscale"
          priority
        />
        <h1 className="text-2xl font-bold">Bryan Nonni</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I&apos;m a full stack software engineer specializing in building
            intuitive web and mobile frontends, scalable and well desinged API
            backends and seamless integrations.
          </p>
          <p className="my-4">
            Over the years, I&apos;ve worked for startups and large corporations
            building proof-of-concepts, internal tooling, user-facing web and
            mobile apps and full stack applications. My work has spanned across
            many different verticals including: digital marketing, retail,
            restaurant, banking, payments, money services and mortgage lending.
            I actively contribute to various open source projects and am a big
            supporter of and believer in Free and Open Source Software (FOSS).
          </p>
          <p className="my-4">
            I have a strong passion for the intersection of fintech and
            decentralization. My career north star is to build solutions that
            maximize human freedom, individual rights and sovereignty to allow
            people the choice to take control and ownership of the most
            important parts of their lives online: money, identity and data.
          </p>
          <p className="my-4">
            If you&apos;d like to see more about my projects, please&nbsp;
            <Link href={"/projects"} className="inline-block border-b">
              visit my projects page
            </Link>
          </p>
          <p className="mb-4">
            If you&apos;d like to collaborate, please&nbsp;
            <a
              href="mailto:bryan@nonni.work"
              className="inline-block border-b"
              rel="noopener noreferrer"
            >
              send me an email
            </a>
          </p>
        </div>
        <div className="mb-2 mt-4 flex space-x-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
        <p className="mt-4 inline-block cursor-pointer border-b">
          <a href={LINKS.RESUME.VIEW} target="_blank" rel="noopener noreferrer">
            View my resume
          </a>
        </p>
        <br />
        <p className="mt-4 inline-block cursor-pointer border-b">
          <a
            href={LINKS.RESUME.DOWNLOAD}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download my resume
          </a>
        </p>
      </section>
      <div className="my-8 w-full border-t border-gray-200 dark:border-gray-800" />
      <div>
        <h2 className="mb-6 text-2xl font-bold">Latest posts</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.slug} className="py-1">
              <Link href={`/blog/${blog.slug}`}>
                <BlogCard blog={blog} key={blog.slug} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
