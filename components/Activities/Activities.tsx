import Image from 'next/image';

import { Title } from '@/ui';

const activitiesData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor it',
    text: 'UX/UI Design',
    image: {
      url: '/images/electricity-transmission-towers.jpg',
      alt: 'Wind farms fields',
    },
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor it',
    text: 'UX/UI Design',
    image: {
      url: '/images/electricity-transmission-towers.jpg',
      alt: 'Wind farms fields',
    },
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor it',
    text: 'UX/UI Design',
    image: {
      url: '/images/electricity-transmission-towers.jpg',
      alt: 'Wind farms fields',
    },
  },
];

export const Activities = () => {
  return (
    <section>
      <Title>Activities</Title>

      <div className='mt-8 grid grid-cols-1 gap-5 gap-y-5 sm:mt-14 sm:grid-cols-3 xl:gap-x-7'>
        {activitiesData.map((news) => {
          return (
            <figure key={news.id}>
              <div className='relative h-[190px] rounded-2xl sm:h-[100px] xl:h-[140px]'>
                <Image
                  className='rounded-2xl object-cover'
                  src={news.image.url}
                  alt={news.image.alt}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>

              <figcaption className='text-blue-gray flex flex-col items-center py-3 font-sans'>
                <h3 className='font-display text-xs'>{news.title}</h3>
                <span className='text-xs'>{news.text}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
};
