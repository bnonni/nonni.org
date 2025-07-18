import { LinkIcon } from "@/components/icons";
import { SocialLink } from "@/components/social-link";
import Image from "next/image";

type Project = {
  title: string;
  repo: string;
  thumbnail: string;
  website: string;
  description: string;
  tags: readonly string[];
};

type ProjectProps = {
  project: Project;
};

export const PatentCard = ({ project }: ProjectProps) => {
  const { title, repo, thumbnail, website, description, tags } = project ?? {};
  return (
    <a href={website} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white">
      <div
        className="flex cursor-pointer flex-col rounded-xl transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50"
        key={title}
      >
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`Logo of ${title}`}
            className="h-50 w-full rounded-t-lg bg-no-repeat object-cover"
            width={0}
            height={0}
            unoptimized
          />
        ) : (
          <></>
        )}
        <div className="p-4">
          <a className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            {title}
          </a>
          <div className="z-10 mt-2 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </div>
          <div className="z-10 mb-6 mt-6 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <p
                className="hover:text-primary dark:hover:text-primary inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                key={tag}
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="flex items-center">
            <SocialLink
              icon={LinkIcon}
              href={repo}
              className="h-6 w-6 flex-none"
            />
          </div>
        </div>
      </div>
    </a>
  );
};
