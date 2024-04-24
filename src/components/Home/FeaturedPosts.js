import { sortBlogs } from "@/src/utils";
import LayoutBlogOne from "../Blog/LayoutBlogOne";
import LayoutBlogTwo from "../Blog/LayoutBlogTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Популярные статьи
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-10 sm:mt-16">
        <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
          <LayoutBlogOne blog={sortedBlogs[1]} />
        </article>
        <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
          <LayoutBlogTwo blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <LayoutBlogTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
