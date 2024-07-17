'use client';

import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import clsx from 'clsx';
import Input from '../Input';
import Button from '../Button';

const ContactForm = () => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            mobile: '',
            registration: '',
            message: '',
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios
            .post('/api/contact', {
                ...data,
            })
            .then(() => {
                setSuccess(true);
                setError(false);
                reset();
            })
            .catch(() => {
                setSuccess(false);
                setError(true);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="min-w-[50%]">
            <div className="flex flex-col gap-8">
                <Input
                    id={'name'}
                    register={register}
                    errors={errors}
                    required={true}
                    placeholder="Name"
                    label="Full Name"
                />

                <Input
                    id={'email'}
                    register={register}
                    errors={errors}
                    required={true}
                    placeholder="Email Address"
                    label="Email Address"
                />

                <Input
                    id={'mobile'}
                    register={register}
                    errors={errors}
                    required={true}
                    placeholder="Mobile Number"
                    label="Mobile Number"
                />

                <Input
                    id={'registration'}
                    register={register}
                    errors={errors}
                    required={true}
                    placeholder="Vehicle Registration"
                    label="Vehicle Registration"
                />

                <div className="flex flex-col">
                    <label
                        htmlFor="message"
                        className="mb-1 text-xl after:content-['*'] after:text-brand"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register('message', { required: true })}
                        placeholder="Message"
                        className={clsx(
                            'w-full pl-4 pt-2 bg-transparent border-2 border-white rounded-md resize-none min-h-28',
                            !errors['message'] && `border-white`,
                            errors['message'] && `border-brand`
                        )}
                    />
                </div>

                <Button type="submit">Send</Button>

                {error && (
                    <p className="text-red-600 text-xl">
                        There was an error, please try again.
                    </p>
                )}
                {success && (
                    <p className="text-green-500 text-xl">
                        Your message was sent successfully. Thankyou!
                    </p>
                )}
            </div>
        </form>
    );
};

export default ContactForm;
