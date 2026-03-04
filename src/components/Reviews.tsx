import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { name: 'David Smith', suburb: 'Bondi', text: 'Jack has been maintaining our pool for a year now and it look incredible. Not only that, but he does it with a smile and is always happy to answer any questions we have. Highly recommended.' },
  { name: 'Sarah Jenkins', suburb: 'Coogee', text: 'Highly impressed with Jack\'s Pool and Spa Maintenance. Quick, communicative, and excellent results on our pool recovery.' },
  { name: 'Michael T', suburb: 'Randwick', text: 'Great service! They always show up on time and my pool has never been clearer.' },
  { name: 'Emily P', suburb: 'Double Bay', text: 'We swapped to Jack recently and the service has been exceptional. Very thorough and leaves everything spotless.' },
  { name: 'Robert C', suburb: 'Vaucluse', text: 'Professional, reliable, and knowledgeable. They managed to sort out a chemical imbalance that had been bothering us for weeks.' },
  { name: 'James W', suburb: 'Rose Bay', text: 'Fantastic attention to detail and extremely friendly team. My pool is always ready for a swim.' },
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const clientWidth = scrollRef.current?.clientWidth || 0;

    gsap.to(scrollRef.current, {
      x: -(scrollWidth - clientWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section id="reviews" ref={containerRef} aria-label="Client reviews and testimonials" className="py-32 bg-navy text-white overflow-hidden">
      <div className="px-6 md:px-16 mb-16 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Client Feedback.</h2>
          <p className="text-cream/60 font-sans max-w-md">
            Don't just take our word for it. Read what families across Sydney have to say about our premium care.
          </p>
        </div>
        <div className="flex items-center gap-2" aria-label="5 out of 5 stars Google rating">
          <div className="flex text-aqua" aria-hidden="true">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <span className="font-mono text-sm tracking-widest ml-2">5.0 GOOGLE RATING</span>
        </div>
      </div>

      <div className="pl-6 md:pl-16">
        <div ref={scrollRef} className="flex gap-6 w-max pr-16 pb-12">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="w-[350px] md:w-[450px] bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-6 backdrop-blur-sm"
              aria-label={`Review by ${review.name} from ${review.suburb}`}
            >
              <div className="flex text-aqua" aria-hidden="true">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-cream/90 leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="font-bold font-sans">{review.name}</span>
                <span className="font-mono text-xs text-aqua uppercase tracking-widest">{review.suburb}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
