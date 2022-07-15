import { Title, Subtitle } from "@/components/typography";

export default function Heading({ mainText, subText }) {
  return (
    <section className="flex-col md:flex-col flex md:justify-between mt-16 mb-16 md:mb-12">
      {subText && <Subtitle>
          {subText || 'Demo'}
      </Subtitle>}
      <Title>
        {mainText}
      </Title>
    </section>
  )
}
