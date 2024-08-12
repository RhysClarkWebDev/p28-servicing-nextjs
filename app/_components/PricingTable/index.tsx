import { FC } from 'react';

interface PricingTableProps {
    title: string;
    options: {
        name: string;
        description: string;
        pricing: string;
    }[];
}

const PricingTable: FC<PricingTableProps> = ({ title, options }) => {
    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-white text-3xl text-center mb-8">{title}</h2>
            {options.map((option, index) => (
                <div
                    key={index}
                    className="flex flex-col md:flex-row justify-between items-center p-4 bg-transparent border border-white rounded-lg"
                >
                    <div className="flex-1 text-white mb-2 md:mb-0 md:mr-4">
                        <p className="text-xl font-semibold capitalize">
                            {option.name}
                        </p>
                        <p className="capitalize">{option.description}</p>
                    </div>
                    <div className="text-white font-bold text-xl">
                        {option.pricing}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PricingTable;
