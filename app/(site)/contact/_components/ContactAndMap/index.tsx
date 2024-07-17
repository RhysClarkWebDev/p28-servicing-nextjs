import ContactForm from '@/app/_components/ContactForm';
import GoogleIframe from '@/app/_components/GoogleIframe';

const ContactAndMap = () => {
    return (
        <section className="flex flex-col lg:flex-row gap-8">
            <ContactForm />

            <div className="flex grow">
                <GoogleIframe />
            </div>
        </section>
    );
};

export default ContactAndMap;
