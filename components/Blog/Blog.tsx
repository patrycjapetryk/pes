import Image from 'next/image';

import { Title } from '@/ui';

const newsData = [
  {
    id: 1,
    title: 'Why we decided to create Build Your DXP',
    date: 'August 27, 2020',
    image: {
      url: '/images/wind-farms-fields.jpg',
      alt: 'Wind farms fields',
    },
  },
  {
    id: 2,
    title: 'Why we decided to create Build Your DXP',
    date: 'August 27, 2020',
    image: {
      url: '/images/wind-farms-fields.jpg',
      alt: 'Wind farms fields',
    },
  },
  {
    id: 3,
    title: 'Why we decided to create Build Your DXP',
    date: 'August 27, 2020',
    image: {
      url: '/images/wind-farms-fields.jpg',
      alt: 'Wind farms fields',
    },
  },
  {
    id: 4,
    title: 'Why we decided to create Build Your DXP',
    date: 'August 27, 2020',
    image: {
      url: '/images/wind-farms-fields.jpg',
      alt: 'Wind farms fields',
    },
  },
];

export const Blog = () => {
  return (
    <section>
      <Title>News</Title>

      <div className='mt-8 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-5'>
        {newsData.map((news, index) => {
          return (
            <figure key={news.id}>
              <div className='relative h-[190px] rounded-2xl sm:h-[170px] xl:h-[220px]'>
                <Image
                  className='rounded-2xl object-cover'
                  src={news.image.url}
                  alt={news.image.alt}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  priority={index === 0 ? true : false}
                />
              </div>

              <figcaption className='text-blue-gray px-5 py-3 font-sans'>
                <span className='text-xs'>{news.date}</span>
                <h3 className='font-display text-sm'>{news.title}</h3>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
};
