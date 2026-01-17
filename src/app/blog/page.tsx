import BlogPostItem from "@/components/blog-post-item";
import BlurFade from "@/components/magicui/blur-fade";
import { posts } from "@/data/posts";

export const metadata = {
  title: "My Articles - My Content Related Work",
  description:
    "Explore a curated list of my content-related work, including articles, research papers, and journals published across various platforms. Discover insights and knowledge shared through my writing.",
  keywords:
    "blogs, articles, research papers, content writing, journals, publications",
  robots: "index, follow",
};

const BLUR_FADE_DELAY = 0.04;

export const revalidate = 3600;

export default async function BlogPage() {
  let delayIndex = 0;

  return (
    <section className="mx-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-3xl font-semibold mb-8 tracking-tighter">
          My Articles
        </h1>
        <p className="mb-8 text-muted-foreground text-sm">
        </p>
      </BlurFade>
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => {
          delayIndex++;
          return (
            <BlurFade
              key={post.slug}
              delay={BLUR_FADE_DELAY * 2 + delayIndex * 0.05}
            >
              <BlogPostItem
                title={post.title}
                slug={post.slug}
                href={`/blog/${post.slug}`}
                publishedAt=""
              />
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
