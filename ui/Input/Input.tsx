import { useId, type ComponentPropsWithRef, forwardRef, type Ref } from 'react';
import { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<'input'>;

function InputWithRef(
  { label, error, ...rest }: Props,
  ref: Ref<HTMLInputElement>,
) {
  const id = useId();

  return (
    <div className='relative flex w-full flex-col gap-2'>
      <label className='text-lg tracking-tight sm:text-xl' htmlFor={id}>
        {label}
      </label>

      <input
        className='w-full rounded-xl border border-darker-gray px-5 py-3 font-medium text-darker-gray  outline-none focus:border-black'
        id={id}
        ref={ref}
        autoComplete='on'
        {...rest}
      />
      {error && (
        <p className='absolute -bottom-6 right-0 text-sm text-blue'>
          {error.message}
        </p>
      )}
    </div>
  );
}

export const Input = forwardRef(InputWithRef);
