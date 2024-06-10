'use client';

import { useState } from 'react';

import { MinusIcon, PlusIcon } from '@/ui';
import { useElementDimensions } from '@/hooks/useElementDimensions';

type Props = {
  question: string;
  answer: string;
};

export const FaqListItem = ({ question, answer }: Props) => {
  const [showQA, setShowQA] = useState(false);
  const { dimensions, ref } = useElementDimensions();
  const { height } = dimensions ?? {};

  return (
    <li className='border-darker-gray w-full border-b py-4'>
      <button
        className='flex w-full items-center justify-between gap-4'
        onClick={() => setShowQA((showQA) => !showQA)}
      >
        <span className='text-left text-lg'>{question}</span>
        {showQA ? <MinusIcon /> : <PlusIcon />}
      </button>

      <p
        className='block max-w-[94%] overflow-hidden duration-500 ease-in-out'
        style={{ maxHeight: showQA && height ? `${height}px` : 0 }}
      >
        <span className='block w-full pb-2 pt-4' ref={ref}>
          {answer}
        </span>
      </p>
    </li>
  );
};
