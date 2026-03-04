
export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-charcoal text-white pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem] -mt-8 relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">

          <div className="md:col-span-5 flex flex-col gap-8">
            <a href="#" aria-label="Jack's Pool and Spa Maintenance — Home" className="block w-fit -ml-2">
              <img
                src="https://e0fd6054d2143b183706.cdn6.editmysite.com/uploads/b/7b4540c0-fc9e-11f0-888b-9fe0d273c783/logo_38AD6F3E-89FA-4C92-81B4-4E0DB9304FF3.png?width=2400&optimize=medium"
                alt="Jack's Pool and Spa Maintenance Logo"
                className="h-16 md:h-20 w-auto object-contain rounded-md"
              />
            </a>
            <div className="flex flex-col gap-2 text-cream/70 text-base">
              <a href="tel:0428226866" className="hover:text-aqua transition-colors font-medium text-white">0428 226 866</a>
              <a href="mailto:jacks.poolmaintenance@gmail.com" className="hover:text-aqua transition-colors">jacks.poolmaintenance@gmail.com</a>
              <span className="mt-2 text-sm italic">Servicing All Of Sydney 📍</span>
            </div>
            <div className="flex flex-col gap-1 text-xs text-cream/40 font-mono tracking-widest uppercase">
              <span>Mon - Fri: 5:00AM - 1:00PM</span>
            </div>
          </div>

          <nav aria-label="Services" className="md:col-span-2 md:col-start-8 flex flex-col gap-4">
            <h4 className="font-mono text-xs text-cream/40 uppercase tracking-widest mb-4">Services</h4>
            <a href="#services" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Pool Cleaning</a>
            <a href="#services" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Water Chemistry</a>
            <a href="#services" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Filter Maintenance</a>
            <a href="#services" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Commercial Pools</a>
          </nav>

          <nav aria-label="Company" className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-mono text-xs text-cream/40 uppercase tracking-widest mb-4">Company</h4>
            <a href="#story" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Our Story</a>
            <a href="#reviews" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Testimonials</a>
            <a href="#" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Careers</a>
            <a href="#" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Contact</a>
          </nav>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <p className="text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} Jack's Pool and Spa Maintenance. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-cream/60">
            <a href="#" className="hover:text-aqua transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-aqua transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
