type Props = {
  message: string;
};

export function FormMessage({ message }: Props) {
  return (
    <div className='animate-fade-in fixed bottom-16 left-0 right-0 z-10 flex justify-center'>
      <p className='mx-6 rounded-md border border-darker-gray bg-white px-8 py-3 text-center text-sm text-gray'>
        {message}
      </p>
    </div>
  );
}
