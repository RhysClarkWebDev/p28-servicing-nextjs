import SinglePackage from '../SinglePackage';

export type ServicePackage = {
    name: string;
    points: string[];
    price?: number;
    href?: string;
};

const packages: ServicePackage[] = [
    {
        name: 'Minor Service',
        points: [
            `All makes and Models`,
            `Oil`,
            `Oil Filter`,
            `Vehicle Check`,
            `Up to 40 point check`,
        ],
        price: 100,
    },

    {
        name: 'Full Service',
        points: [
            `All makes and Models`,
            `Oil`,
            `Oil Filter`,
            `Comprehensive Vehicle Check`,
            `Up to 71 point check`,
        ],
        price: 180,
    },

    {
        name: 'Major Service',
        points: [
            `All makes and Models`,
            `Oil`,
            `Oil Filter`,
            `Comprehensive Vehicle Check`,
            `All Filters`,
            `Brake & Coolant Fluid`,
            `Sparkplug Replacement`,
            `Up to 71 point check`,
        ],
        price: 220,
    },

    {
        name: 'Modifications',
        points: [
            `Tesla Modifications`,
            `Full Bodykits`,
            `Springs and Handling`,
            `ABT`,
            `Maxton Design`,
            `XPEL Paint Protection Film`,
            `And many more..`,
        ],
        href: 'https://performance28.com/car-tuning-modification/',
    },
];

const AllPackages = () => {
    return (
        <article className="flex flex-col md:flex-row gap-x-9 gap-y-9 justify-between flex-wrap">
            {packages.map((servicePackage) => (
                <SinglePackage
                    key={servicePackage.name}
                    name={servicePackage.name}
                    points={servicePackage.points}
                    price={servicePackage.price}
                    href={servicePackage.href}
                />
            ))}
        </article>
    );
};

export default AllPackages;
