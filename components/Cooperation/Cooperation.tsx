import Image from 'next/image';

import { Title } from '@/ui';

export const Cooperation = () => {
  return (
    <section>
      <Title>Współpraca</Title>
      <Image
        className='-ml-4 h-auto w-[260px]'
        src='/images/wuot-logo.png'
        width='474'
        height='195'
        alt='WUT Logo'
        priority
      />
    </section>
  );
};
