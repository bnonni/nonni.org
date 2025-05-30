import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="md:leading-14 text-6xl font-extrabold leading-9 tracking-tight md:border-r-2 md:px-6 md:text-8xl">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn&apos;t find this page.
        </p>

        <Link href="/" className="underline">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
