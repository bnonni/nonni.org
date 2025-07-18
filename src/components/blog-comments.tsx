"use client";

import Giscus from "@giscus/react";

export const BlogComments = () => {
  return (
    <Giscus
      repo="bnonni/nonni.org"
      repoId="R_kgDOMukdeQ"
      category="General"
      categoryId="DIC_kwDOMukdec4CmCU3"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
};
