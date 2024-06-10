import { Loader } from '@/ui';

type Props = {
  label: string;
  pending?: boolean;
};

export function Button({ label, pending }: Props) {
  return (
    <button
      className={`
        relative w-full rounded-xl bg-blue px-14 py-3 text-sm uppercase
        text-white outline-none transition-all
        ${pending ? '' : 'hover:bg-dark-blue'}
        lg:text-base
      `}
    >
      <span className={pending ? 'opacity-0' : ''}>{label}</span>
      {pending ? <Loader /> : ''}
    </button>
  );
}
