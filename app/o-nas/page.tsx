import { ContactForm, Cooperation, Faq, PartnersLogos } from '@/components';
import { Background, PageWhiteBackground } from '@/ui';

export default function AboutUs() {
  return (
    <main className='relative flex min-h-screen w-full flex-col items-center justify-between bg-dark-blue'>
      <Background className='opacity-1 bg-blue-pattern-mobile-2 md:bg-blue-pattern-2' />

      <PageWhiteBackground>
        <Cooperation />
        <Faq />
        <PartnersLogos />
        <ContactForm />
      </PageWhiteBackground>
    </main>
  );
}
