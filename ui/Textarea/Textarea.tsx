import { useId, type ComponentPropsWithRef, forwardRef, type Ref } from 'react';
import { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<'textarea'>;

function TextareaWithRef(
  { label, error, ...rest }: Props,
  ref: Ref<HTMLTextAreaElement>,
) {
  const id = useId();

  return (
    <div className='relative mb-3 flex flex-col gap-2'>
      <label className='text-lg tracking-tight sm:text-xl' htmlFor={id}>
        {label}
      </label>

      <textarea
        className='w-full resize-none rounded-xl border border-darker-gray px-5 py-3 text-darker-gray outline-none focus:border-black'
        rows={4}
        id={id}
        ref={ref}
        autoComplete='off'
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

export const Textarea = forwardRef(TextareaWithRef);
