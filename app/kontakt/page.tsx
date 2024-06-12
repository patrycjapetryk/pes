import { ContactForm } from '@/components';
import { Background, PageWhiteBackground } from '@/ui';

export default function Contact() {
  return (
    <main className='relative flex min-h-screen w-full flex-col items-center justify-between bg-dark-blue'>
      <Background className='opacity-1 bg-blue-pattern-mobile-4 md:bg-blue-pattern-4' />

      <PageWhiteBackground>
        <ContactForm />
      </PageWhiteBackground>
    </main>
  );
}
