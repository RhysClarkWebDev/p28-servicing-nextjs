import clsx from 'clsx';
import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
    label?: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
    placeholder?: string;
}

const Input: FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled,
    placeholder,
}) => {
    return (
        <div className="flex flex-col w-full">
            <label
                htmlFor={id}
                className={clsx(
                    'mb-1 text-xl',
                    required && `after:content-['*'] after:text-brand`
                )}
            >
                {label}
            </label>

            <div>
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    placeholder={placeholder}
                    className={clsx(
                        'w-full pl-4 h-9 bg-transparent border-2 rounded-md',
                        !errors[id] && `border-white`,
                        errors[id] && `border-brand`
                    )}
                />
            </div>
        </div>
    );
};

export default Input;
