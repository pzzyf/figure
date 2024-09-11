import { PostContainer } from '@/components/layout/container/PostContainer';

export default function About() {
  return (
    <PostContainer>
      <article className="prose max-w-full font-sans text-sm/7 text-zinc-900 dark:prose-invert dark:text-zinc-200">
        <h2>👋 About Me</h2>
        <span>
          Hi, My name is afe1. I&#39;m <s>a student</s> a software engineer who code for fun.
        </span>
        <h2>🛸 Find me</h2>
        <ul>
          <li>
            Github:{' '}
            <a target="_blank" href="https://github.com/pzzyf">
              pzzyf
            </a>
          </li>
          <li>
            E-mail:{' '}
            <span>
              2279948211@qq.com
            </span>
          </li>

        </ul>
      </article>
    </PostContainer>
  );
}
