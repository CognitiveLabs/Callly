import BlogPost from './post1';

export default function Blog() {
  return (
    <div className="blog-page">
      <header>
        <h1 className="text-4xl signika-header font-extrabold sm:text-center sm:text-6xl">
          My Calendy Blog
        </h1>
        <br />
        <p className="text-2xl signika-title font-extrabold sm:text-center">
          Insights for Aligning Your Calendar with Your Mind
        </p>
      </header>
      <br />
      <br />
      <p className="text-2xl signika-orange text-orange-500 font-extrabold sm:text-center">
        Our first blog post
      </p>
      <BlogPost />

      <h3 className="text-xl font-bold mb-4">Explore the Blog</h3>
    </div>
  );
}
