import { meta } from "@/data/site-metadata";

export function Footer() {
  return (
    <footer className="align-center h-20px flex justify-center pb-5 pt-10">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()}&nbsp;
        <a href={meta.social.x} target="_blank" rel="noopener noreferrer">
          Bryan Nonni.
        </a>
        &nbsp; All rights reserved.
      </p>
    </footer>
  );
}
