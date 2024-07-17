import Link from 'next/link';
import SingleService from '../SingleService';

// Images
import ServicingImage from '@/app/_assets/images/serviceSectionImage.jpg';
import WheelsImage from '@/app/_assets/images/wheel-alignment.jpg';
import TyresImage from '@/app/_assets/images/p28tyresservicing.jpg';
import BatteriesImage from '@/app/_assets/images/p28batteries.jpg';
import ExhaustsImage from '@/app/_assets/images/p28ExhaustImage2.jpg';
import BrakesImage from '@/app/_assets/images/BrakesImage.jpg';
import OilImage from '@/app/_assets/images/P28ServiceDetailwebCont-175.jpg';
import RepairsImage from '@/app/_assets/images/carBeingRepaired.jpg';
import DiagnosticsImage from '@/app/_assets/images/diagnostics.jpg';

const services = [
    {
        name: 'Servicing',
        image: ServicingImage,
        text: [
            `Servicing your car is a must to task every year to ensure your cars 
            performance is kept optimal, on top of this, a regularly serviced car 
            runs smoother and more efficiently thus saving you money on fuel and 
            prevening as many trips to the mechanic because something more 
            serious has gone wrong.`,

            `Performance28's experienced mechanics offer the very best of servicing 
            in the North East, offering you free professional advice in order for 
            you to keep your vehicle in top condition, ensuring you stay as safe 
            as possible on the road.`,
        ],
        id: 'servicing',
    },

    {
        name: 'Wheel Alignment',
        image: WheelsImage,
        text: [
            `Wheel alignment, also known as tracking, is a crucial service offered 
            by automotive servicing garages like yours in the UK. It involves 
            adjusting the angles of the wheels to ensure they are perpendicular 
            to the ground and parallel to each other, as specified by the 
            manufacturer's recommendations. This process is essential for 
            maintaining optimal vehicle performance, safety, and longevity.`,

            `Customers may need wheel alignment for several reasons. Firstly, regular 
            wear and tear on the suspension and steering components can gradually 
            misalign the wheels over time. Potholes, curbs, and other road hazards 
            can also knock the wheels out of alignment suddenly. When the wheels 
            are not properly aligned, it can lead to uneven tire wear, causing 
            tires to wear out prematurely and necessitating costly replacements.`,

            `Moreover, misaligned wheels can negatively impact fuel efficiency and 
            handling, resulting in decreased stability and control while driving. 
            By offering professional wheel alignment services, your garage helps 
            customers ensure their vehicles perform at their best, promoting safety 
            on the road and saving them money in the long run by avoiding 
            unnecessary tire replacements and improving fuel economy.`,
        ],
        id: 'wheel-alignment',
    },

    {
        name: 'Tyres',
        image: TyresImage,
        text: [
            `Tyres ensure efficient handling, braking and overall performance of your car. 
            The pressure of your tyres can also affect your fuel consumption, having too 
            low a pressure can make you use more fuel consumption than you would if your 
            tyres were at the proper pressure. Here at Performance28 we offer different 
            varieties of tyres, such as all season, summer, winter and low profile.`,

            `Our Mechanics here at Performance28 are more than happy to help you if you 
            dont know which tyre to choose from.`,

            `The UK legal limit for the depth of the tyre tread limit is 1.6mm. However, 
            we would usually advise replacing your tyres with a tread between 2mm and 
            3mm to avoid your tyres slipping under the legal limit without you noticing.`,
        ],
        id: 'tyres',
    },

    {
        name: 'Batteries',
        image: BatteriesImage,
        text: [
            `A reliable car battery is essential for the smooth operation of your vehicle. 
            At Performance28, we offer a range of high-quality car batteries suitable for 
            various makes and models.`,
            `Our expert technicians can test your battery’s 
            performance, ensuring it holds a charge and operates efficiently. If your 
            battery needs replacement, we provide professional installation services, 
            ensuring your vehicle starts reliably every time. Our team is committed 
            to keeping you on the road with reliable and efficient battery services, 
            ensuring your car’s electrical systems function perfectly.`,
        ],
        id: 'batteries',
    },

    {
        name: 'Exhausts',
        image: ExhaustsImage,
        text: [
            `The exhaust system plays a vital role in your car’s performance and 
            environmental impact. Performance28 offers expert exhaust system 
            services, including inspections, repairs, and replacements.`,

            `Our technicians are skilled in identifying and fixing exhaust issues such as 
            leaks, rust, and blockages, ensuring your car runs efficiently and meets 
            emissions standards. A well-maintained exhaust system improves fuel efficiency, 
            reduces noise, and minimises harmful emissions, contributing to a cleaner 
            environment and better driving experience. Trust Performance28 to keep your 
            exhaust system in top condition with our comprehensive services.`,
        ],
        id: 'exhausts',
    },

    {
        name: 'Brakes',
        image: BrakesImage,
        text: [
            `Brakes are a critical safety component of your vehicle. At Performance28, 
            we provide superior brake services, including inspections, repairs, and 
            replacements.`,

            `Our experienced technicians check for wear and tear on brake pads, discs, 
            and fluids, ensuring your braking system operates effectively and safely.`,

            `Regular brake maintenance enhances your vehicle’s stopping power, reduces the 
            risk of accidents, and ensures compliance with safety standards. Whether you 
            need a routine check-up or urgent brake repairs, Performance28 is here to 
            provide reliable and efficient brake services to keep you safe on the road.`,
        ],
        id: 'brakes',
    },

    {
        name: 'Oil Change',
        image: OilImage,
        text: [
            `Regular oil changes are essential to keep your engine running smoothly and 
            efficiently. Performance28 offers efficient oil change services, using 
            high-quality oils and filters to ensure optimal engine performance.`,

            `Our skilled technicians drain the old oil, replace the oil filter, and 
            refill with the appropriate grade of fresh oil, enhancing your engine’s 
            longevity and performance.`,

            `Regular oil changes help prevent engine wear, reduce emissions, and 
            improve fuel efficiency, ensuring your car runs at its best. Trust 
            Performance28 for quick and professional oil change services that 
            keep your vehicle in top condition.`,
        ],
        id: 'oil-change',
    },

    {
        name: 'Repairs',
        image: RepairsImage,
        text: [
            `Performance28 offers comprehensive car repair services to address any 
            issues your vehicle may encounter.`,

            `Our team of skilled mechanics is equipped to handle a wide range of 
            repairs, from minor fixes to major overhauls. We use advanced diagnostic 
            tools to identify problems accurately and provide effective solutions, 
            ensuring your car is back on the road quickly and safely. Whether it’s 
            engine repairs, suspension work, or electrical fixes, Performance28 
            is committed to delivering high-quality repair services that restore 
            your vehicle’s performance and reliability.`,
        ],
        id: 'repairs',
    },

    {
        name: 'Diagnostics',
        image: DiagnosticsImage,
        text: [
            `At Performance28, we provide advanced car diagnostic services to 
            detect and address any underlying issues with your vehicle. `,

            ` Our state-of-the-art diagnostic equipment allows us to perform 
            thorough checks on your car’s engine, transmission, brakes, and 
            other critical systems. By identifying potential problems early, 
            we can prevent costly repairs and ensure your vehicle operates 
            efficiently.`,

            `Our experienced technicians interpret diagnostic results 
            accurately, offering you professional advice and solutions to 
            maintain your car’s optimal performance. Rely on Performance28 
            for precise and reliable diagnostic services that keep your 
            vehicle running smoothly.`,
        ],
        id: 'diagnostics',
    },
];

const AllServicesList = () => {
    return (
        <section className="h-auto flex flex-col gap-x-14 lg:flex-row">
            <div className="flex flex-col gap-y-28 w-full md:w-9/12">
                {services.map((service) => (
                    <SingleService
                        key={service.id}
                        title={service.name}
                        text={service.text}
                        image={service.image}
                        id={service.id}
                    />
                ))}
            </div>
            <ol className="sticky top-48 hidden w-full h-max md:block md:w-3/12 list-decimal ml-8">
                {services.map((service) => (
                    <Link
                        key={`#${service.id}`}
                        href={`#${service.id}`}
                        className="hover:text-brand transition-colors duration-300 text-xl"
                    >
                        <li>{service.name}</li>
                    </Link>
                ))}
            </ol>
        </section>
    );
};

export default AllServicesList;
