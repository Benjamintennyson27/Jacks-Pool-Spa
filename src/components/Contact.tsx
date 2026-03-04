import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock, Wrench, Droplets, Thermometer, HardHat } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.contact-anim', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 75%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
        });
    }, { scope: container });

    const services = [
        { icon: Droplets, name: 'Pool Cleaning', desc: 'Regular vacuum, skim, and brushing for complete pool revitalization.' },
        { icon: Wrench, name: 'Filter Maintenance', desc: 'Routine backwashing and rinsing to keep your equipment running smoothly.' },
        { icon: HardHat, name: 'Commercial Service', desc: 'Comprehensive care for gyms, hotels, and community pools.' },
        { icon: Thermometer, name: 'Airbnb Turnaround', desc: 'Quick turnaround cleaning to ensure your Airbnb guests have the perfect swim.' },
    ];

    return (
        <section id="contact" ref={container} className="py-24 md:py-32 px-6 md:px-16 bg-white" aria-label="Contact Information & Full Service List">
            <div className="max-w-7xl mx-auto">

                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                    <span className="contact-anim bg-aqua/10 text-navy px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
                        Get In Touch
                    </span>
                    <h2 className="contact-anim text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
                        Contact Jack's Pool and Spa
                    </h2>
                    <p className="contact-anim text-lg text-charcoal/70">
                        Expert pool cleaning and maintenance serving the Eastern Suburbs and all of Sydney.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="contact-anim grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <a href="tel:0428226866" className="group bg-cream hover:bg-navy rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 border border-navy/5 hover:border-aqua/30">
                        <div className="w-12 h-12 rounded-full bg-aqua/10 group-hover:bg-aqua/20 flex items-center justify-center transition-colors">
                            <Phone size={20} className="text-aqua" />
                        </div>
                        <h3 className="font-bold text-navy group-hover:text-white transition-colors">Phone</h3>
                        <p className="text-sm text-charcoal/60 group-hover:text-cream/70 transition-colors">0428 226 866</p>
                        <span className="text-xs font-mono text-aqua tracking-widest uppercase mt-1">Call Now →</span>
                    </a>

                    <a href="mailto:jacks.poolmaintenance@gmail.com" className="group bg-cream hover:bg-navy rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 border border-navy/5 hover:border-aqua/30">
                        <div className="w-12 h-12 rounded-full bg-aqua/10 group-hover:bg-aqua/20 flex items-center justify-center transition-colors">
                            <Mail size={20} className="text-aqua" />
                        </div>
                        <h3 className="font-bold text-navy group-hover:text-white transition-colors">Email</h3>
                        <p className="text-sm text-charcoal/60 group-hover:text-cream/70 transition-colors">jacks.poolmaintenance@gmail.com</p>
                        <span className="text-xs font-mono text-aqua tracking-widest uppercase mt-1">Send Email →</span>
                    </a>

                    <a href="https://www.google.com/maps/search/?api=1&query=Sydney+Eastern+Suburbs" target="_blank" rel="noopener noreferrer" className="group bg-cream hover:bg-navy rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 border border-navy/5 hover:border-aqua/30">
                        <div className="w-12 h-12 rounded-full bg-aqua/10 group-hover:bg-aqua/20 flex items-center justify-center transition-colors">
                            <MapPin size={20} className="text-aqua" />
                        </div>
                        <h3 className="font-bold text-navy group-hover:text-white transition-colors">Location</h3>
                        <p className="text-sm text-charcoal/60 group-hover:text-cream/70 transition-colors">Sydney Eastern Suburbs</p>
                        <span className="text-xs font-mono text-aqua tracking-widest uppercase mt-1">Get Directions →</span>
                    </a>

                    <div className="bg-cream rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-navy/5">
                        <div className="w-12 h-12 rounded-full bg-aqua/10 flex items-center justify-center">
                            <Clock size={20} className="text-aqua" />
                        </div>
                        <h3 className="font-bold text-navy">Working Hours</h3>
                        <p className="text-sm text-charcoal/60">Mon – Fri: 5:00AM – 1:00PM</p>
                        <span className="text-xs font-mono text-charcoal/40 tracking-widest uppercase mt-1">Emergencies: Call Anytime</span>
                    </div>
                </div>

                {/* Google Map Section */}
                <div className="contact-anim mb-20 rounded-2xl overflow-hidden border border-navy/5 h-[400px] shadow-sm">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4468600109033!2d151.24151701548174!3d-33.882415980652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aeb7b233a7e5%3A0x5017d681632ad50!2sEastern%20Suburbs%2C%20Sydney%20NSW!5e0!3m2!1sen!2sau!4v1684824345098!5m2!1sen!2sau"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sydney Eastern Suburbs Location"
                    ></iframe>
                </div>

                {/* Full Services List */}
                <div className="contact-anim">
                    <h3 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">Our Complete Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="flex gap-5 p-6 rounded-2xl bg-cream border border-navy/5 hover:border-aqua/20 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                                    <service.icon size={22} className="text-aqua" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-bold text-navy text-lg">{service.name}</h4>
                                    <p className="text-sm text-charcoal/60 leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="contact-anim mt-16 bg-navy rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8" id="quote">
                    <div className="text-white max-w-lg">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready for Crystal Clear Water?</h3>
                        <p className="text-cream/60">Call us today for a free, no-obligation quote. We service all pool types across Sydney.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="tel:0428226866" className="btn-magnetic bg-aqua text-navy px-8 py-4 text-base font-bold whitespace-nowrap">
                            📞 0428 226 866
                        </a>
                        <a href="mailto:jacks.poolmaintenance@gmail.com" className="btn-magnetic bg-white/10 text-white border border-white/20 px-8 py-4 text-base whitespace-nowrap">
                            ✉️ Email Us
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
