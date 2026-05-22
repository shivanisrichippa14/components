
import HeroHeading from '@/components/text/Headings/HeroHeading/HeroHeading';
import HeroParagraph from '@/components/text/paragraphs/HeroParagraph/HeroParagraph';
import SectionHeading from '@/components/text/Headings/SectionHeading/SectionHeading';
import SmallHeading from '@/components/text/Headings/SmallHeading/SmallHeading';
import CardHeading from '@/components/text/Headings/CardHeading/CardHeading';
import SectionParagraph from '@/components/text/paragraphs/SectionParagraph/SectionParagraph';
import SmallParagraph from '@/components/text/paragraphs/SmallParagraph/SmallParagraph';
import GradientButton from '@/components/buttons/GradientButton/GradientButton';
import BlackButton from '@/components/buttons/BlackButton/BlackButton';
import Dot from '@/components/decorations/Dot/Dot';
import NumberStat from '@/components/decorations/NumberStat/NumberStat';

export default function Page() {
  return (
    <main style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

      <SectionHeading text="INTELLIGENTLY PRECISE" />
     <HeroHeading
  normalText="Your next great "
  highlightText="engineering hire"
  
/>
      <HeroParagraph text="We work with enterprises to place experienced engineers who fit the role, the team, and the long run." />
      <SmallHeading
  normalText="Your next great "
  highlightText="engineering hire"
  endText={"\nis already in our \nnetwork."}
/>
      <CardHeading text="Delivery Slows" />
      <SectionParagraph text="Replacing a mis-hired engineer costs up to 150% of their annual salary." />
      <SmallParagraph text="Every week spent getting someone up to speed is a week your roadmap is waiting." />
      <GradientButton label="Get Started" />
      <BlackButton label="Let's Find You a Great Hire" />
      <Dot />
      <NumberStat value="03" />

    </main>
  );
}