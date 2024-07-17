import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className="my-24">
            <div
                className="mx-auto w-11/12 gap-48 flex flex-col"
                style={{ maxWidth: 'var(--max-width)' }}
            >
                {children}
            </div>
        </div>
    );
};

export default Wrapper;
