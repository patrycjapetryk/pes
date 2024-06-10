import { FaqListItem } from './FaqListItem';
import { faqData } from './faqData';

export const FaqList = () => {
  return (
    <ul className='border-darker-gray mt-10 border-t'>
      {faqData.map((data, index) => (
        <FaqListItem
          key={index}
          question={data.question}
          answer={data.answer}
        />
      ))}
    </ul>
  );
};
