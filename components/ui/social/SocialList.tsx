import Link from 'next/link';

const socialLinks: Array<{
  name: string;
  friendlyName: string;
  link: string;
}> = [
  {
    name: 'icon-[fa-brands--github-square]',
    friendlyName: 'Github',
    link: 'https://github.com/Magren0321',
  }
];

export const SocialList = () => {
  return (
    <div className="mt-14 flex space-x-4">
      {socialLinks.map((social) => {
        return (
          <Link
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl"
          >
            <span className={social.name}></span>
          </Link>
        );
      })}
    </div>
  );
};
