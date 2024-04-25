import { allBlogs } from "@/.contentlayer/generated";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMDX from "@/src/components/Blog/RenderMDX";
import Tag from "@/src/components/Elemets/Tag";
import Image from "next/image";
import { slug } from "github-slugger";
import siteMetadata from "@/src/utils/siteMetadata";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString;

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      //url: siteMetadata + "/blogs" + params.slug,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      images: ogImages,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      discriprion: blog.description,
      images: ogImages, // Must be an absolute URL
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${slug(blog.tags[0])}`}
            className="px-6 taxt-sm py-2"
          />
          <h1 className="inline-block mt-6 font-semibold  text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.width}
          className="aspect-square w-full h-full object-cover object-center "
        />
      </div>
      <BlogDetails blog={blog} slug={params.slug} />
      <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12 lg:col-span-4">
          <details className="border-[1px] border-solid border-dark dark:border-light dark:text-light text-dark rounded-lg sticky top-6 p-4 max-h-[80vh] overflow-hidden overflow-y-auto">
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Краткое содержание
            </summary>
            <ul className="mt-4 font-in text-base">
              {blog.toc.map((heading) => {
                return (
                  <li key={heading.slug} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2
                      data-[level=two]:border-t border-solid border-dark/40 dark:border-light/40
                      data-[level=three]:pl-4 
                      sm:data-[level=three]:pl-6 
                      flex items-center justify-start"
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full dark:bg-light bg-dark mr-2">
                          &nbsp;
                        </span>
                      ) : null}

                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <RenderMDX blog={blog} />
      </div>
    </article>
  );
}
