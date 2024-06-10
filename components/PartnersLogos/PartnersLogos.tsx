import Image from 'next/image';

import { Title } from '@/ui';

export const PartnersLogos = () => {
  return (
    <section>
      <Title>Partnerzy</Title>
      <div>
        <Image
          className='h-auto max-w-[96%]'
          src='/images/logos.png'
          width={838}
          height={187}
          alt=''
        />
      </div>
    </section>
  );
};
