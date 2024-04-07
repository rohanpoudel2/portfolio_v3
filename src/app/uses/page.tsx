import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'A list of recommended software, favorite gadgets, and other recommended items.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="A list of recommended software, gadgets, games, and other items by me."
      intro="These are the list of things that I use and recommend to others. 😀"
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2021)">
            Previously, I was using a 13-inch MacBook Pro from 2015 that had an Intel processor, but switching to the new model has shown a remarkable improvement. Even with the demanding tasks I perform, the cooling fans have remained silent, not activating even once.
          </Tool>
          <Tool title="Samsung Galaxy S23 Ultra">
            While I have a preference for MacBook laptops, my choice in smartphones is the exact opposite. Since 2017, I have been a loyal user of the Samsung Galaxy S8 Plus, which was reliable until it unexpectedly broke after falling on a tiled floor for the umpteenth time, resulting in a shattered screen. Following this incident, I promptly upgraded to the then-latest model in the Galaxy series. Say cheese 🌕
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            I don&apos;t need to say much about VSCode. It maybe slow but its the GOAT.
          </Tool>
          <Tool title="iTerm2">
            Started to use this when I read about it on a medium blog post. Not sure I am using all the features though 😅.
          </Tool>
          <Tool title="TablePlus">
            Heard about it when I was learning Laravel from Laracasts. Have been using it ever since.
          </Tool>
          <Tool title="ChatGPT">
            😅
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Illustrator">
            I use Illustrator to design logos for my side projects and for my friends if they need something done.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Motorbike">
          <Tool title="Honda XR 190L">
            It does not look the most modern and does not have all the latest features, but it can take you anywhere.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Camera">
          <Tool title="GoPro Hero 8 Black">
            Not the most reliable GoPro model in my opinion. Even after several years of its release, it still has bugs. But can&apos;t complain about the video quality and the stabilization.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
