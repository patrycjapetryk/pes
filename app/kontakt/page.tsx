import { Contact, ContactForm } from '@/components';
import { Background, PageWhiteBackground } from '@/ui';

export default function ContactPage() {
  return (
    <main className='relative flex min-h-screen w-full flex-col items-center justify-between bg-dark-blue'>
      <Background className='opacity-1 bg-blue-pattern-mobile-4 md:bg-blue-pattern-4' />

      <PageWhiteBackground>
        <Contact />
        <ContactForm />
      </PageWhiteBackground>
    </main>
  );
}
