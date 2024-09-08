import { PostContainer } from '@/components/layout/container/PostContainer';
import { Comment } from '@/components/ui/comment/Comment';

export default function About() {
  return (
    <PostContainer>
      <article className="prose max-w-full font-sans text-sm/7 text-zinc-900 dark:prose-invert dark:text-zinc-200">
        afe1
      </article>
      <Comment path={'/about-me'} serverURL={'https://waline.magren.cc'} />
    </PostContainer>
  );
}
