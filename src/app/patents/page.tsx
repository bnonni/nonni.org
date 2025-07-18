import { generatePageMetadata } from "@/app/seo";
import { PatentCard } from "@/components/patent-card";
import { PATENTS } from "@/data/patents";
import React from "react";

export const metadata = generatePageMetadata({
  title: "Patents",
  description: "View my patent grants and applications.",
});

export default function Patents() {
  return (
    <React.Fragment>
      {Object.entries(PATENTS).map(([title, patents], tidx) => (
        <section key={tidx}>
          <h1 className="mb-4 text-2xl font-bold tracking-tighter">
            Patent {title}
          </h1>
          <div
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
          >
            {patents.map((patent, pidx) => (
              <PatentCard project={patent} key={pidx} />
            ))}
          </div>
          <br />
          <br />
        </section>
      ))}
    </React.Fragment>
  );
}
