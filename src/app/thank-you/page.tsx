import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for subscribing."
      intro="Whenever I have new content such as blog posts or projects, or if there's something fascinating I believe you'd be interested in, I'll notify you through email. Feel free to opt-out whenever you choose, with no ill will."
    />
  )
}
