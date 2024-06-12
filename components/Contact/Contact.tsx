import { Paragraph, Title } from '@/ui';

export const Contact = () => {
  return (
    <section>
      <Title>Skontaktuj się z nami</Title>

      <article className='mb-20 mt-10 flex flex-col gap-5'>
        <Paragraph>
          <span>FUNDACJA NAUKOWO-EDUKACYJNA</span>
          <span>PORTAL ENERGETYKI STOSOWANEJ</span>
          <span>05-600 Grójec, ul. Kochanowskiego 17/2</span>
          <span>
            e-mail:{' '}
            <a href='mailto:fundacja@grupapzw.com'>fundacja@grupapzw.com</a>
          </span>
        </Paragraph>
        <Paragraph>
          <span>Przemysław Zalewski Prezes Zarządu Fundacji</span>
          <span>
            e-mail:{' '}
            <a href='mailto:pzalewski@grupapzw.com'>pzalewski@grupapzw.com</a>
          </span>
        </Paragraph>
        <Paragraph>
          <span>dr inż. Zenon Spik Przewodniczący Rady Naukowej Fundacji</span>
          <span> e-mail:</span>
        </Paragraph>
      </article>
    </section>
  );
};
