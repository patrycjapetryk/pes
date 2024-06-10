type Props = {
  children: string | string[];
};
export const Title = ({ children }: Props) => {
  return (
    <h2 className='mb-6 mt-10 text-2xl tracking-tight sm:text-3xl'>
      {children}
    </h2>
  );
};
