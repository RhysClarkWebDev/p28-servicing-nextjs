// components/Select.tsx
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';
import { FC } from 'react';

interface SelectProps {
    id: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    required?: boolean;
    label: string;
    options: string[];
}

const Select: FC<SelectProps> = ({
    id,
    register,
    errors,
    required = false,
    label,
    options,
}) => {
    return (
        <div className="flex flex-col">
            <label
                htmlFor={id}
                className="mb-1 text-xl after:content-['*'] after:text-brand"
            >
                {label}
            </label>
            <select
                id={id}
                {...register(id, { required })}
                className={clsx(
                    'w-full pl-4 bg-transparent border-2 border-white rounded-md min-h-10 capitalize',
                    !errors[id] && 'border-white',
                    errors[id] && 'border-brand'
                )}
            >
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option}
                        className="text-black capitalize"
                    >
                        {option}
                    </option>
                ))}
            </select>
            {errors[id] && (
                <span className="text-red-600 text-sm">
                    {label} is required
                </span>
            )}
        </div>
    );
};

export default Select;
