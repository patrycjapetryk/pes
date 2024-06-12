import { Title } from '@/ui';
import { Form } from './Form';

type Props = {
  label?: string;
};

export const ContactForm = ({ label = 'Kontakt' }: Props) => {
  return (
    <section>
      <Title>{label}</Title>
      <Form />
    </section>
  );
};
