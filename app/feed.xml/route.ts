import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import RSS from 'rss';

export interface MetaData {
  title: string;
  slug: string;
  description: string;
  publish: boolean;
  date: string;
  tags: string[];
}

export async function GET() {
  const feed = new RSS({
    title: `Afe1's Blog`,
    description: '不为繁华易匠心',
    site_url: 'https://afe1-blog.vercel.app/',
    feed_url: 'https://afe1-blog.vercel.app//feed.xml',
    language: 'en', // 网站语言代码
    image_url: 'https://avatars.githubusercontent.com/u/56245609?v=4',
  });
  const data = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  data.forEach((post: Post) => {
    feed.item({
      title: post.title,
      guid: post.slug,
      url: `https://afe1-blog.vercel.app/posts/${post.slug}`,
      description: `${post.description || ''} <br/> <a href="https://afe1-blog.vercel.app/posts/${post.slug}">Continue to read</a>`,
      date: new Date(post.date),
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  });
}
