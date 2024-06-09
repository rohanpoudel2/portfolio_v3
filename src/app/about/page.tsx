import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Rohan Poudel, a tech enthusiast and an Amateur guitarist.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Rohan Poudel, a tech enthusiast and an Amateur guitarist.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Since the moment I first saw a computer in my father&apos;s office as a kid,
              I&apos;ve been fascinated by the endless possibilities of technology.
              This curiosity has guided me through my academic and professional
              journey into the world of computer science.
            </p>
            <p>
              Since my teenage years, my interests have expanded beyond technology.
              I&apos;ve been captivated by music, and recently, I&apos;ve taken up playing the guitar.
              It&apos;s become a source of joy and creative expression for me,
              adding another dimension to my life.
            </p>
            <p>
              In addition to my love for music, I have a passion for adventure and exploration.
              Riding my Honda XR 190L motorbike, I&apos;ve embarked on thrilling journeys to remote parts of Nepal.
              From traversing the rugged terrain of Upper Mustang to exploring the serene beauty of Rara Lake,
              I&apos;ve had unforgettable experiences on the road. Each journey fuels my sense of
              adventure and appreciation for the natural wonders of Nepal.
            </p>
            <p>
              Just as I&apos;ve pursued my interests in technology and music,
              I&apos;ve embraced the thrill of exploration on two wheels.
              It&apos;s all part of my journey towards discovering new horizons and making the most of life&apos;s adventures.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/rohanpoudel02"
              icon={XIcon}
            >
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/rohanpoudel2"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/rohanpoudel2/"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/rohanpoudel2/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:nsrapoudel@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              nsrapoudel@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
