import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialCarousel = () => {
  return (
    <div className="relative box-border caret-transparent list-none z-[1] overflow-hidden mx-auto">
      <div
        role="list"
        className="relative caret-transparent flex h-full w-full z-[1]"
      >
        <TestimonialCard
          ariaLabel="1 / 4"
          quoteIconUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c4e16c929024c9539cc29_Quotes.svg"
          highlightedQuote="We relied on them to build our online store with AI-enhanced features that improve customer experience."
          fullTestimonial="Working with Dev Monks on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We're proud of the results and happy to continue our long-term partnership with them."
          quoteIconBottomUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c4e478408b311d20a4b00_Quotes (1).svg"
          authorImageUrl="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1e80f6247f96b1a5fa522_Sofia.avif"
          authorName="Sofia Gouveia @ Esdiac"
          authorTitle="Design Director"
          industry="Telecom"
          services="UI/UX Design, Product MVP"
        />
        <TestimonialCard
          ariaLabel="2 / 4"
          quoteIconUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c4e16c929024c9539cc29_Quotes.svg"
          highlightedQuote="Their team truly understood our vision and brought it to life through a stunning digital identity."
          fullTestimonial="Dev Monks is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development, they exceeded my expectations. I couldn't be happier with the collaboration!"
          quoteIconBottomUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c4e478408b311d20a4b00_Quotes (1).svg"
          authorImageUrl="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1e6e00d327309dd126c74_Anika.avif"
          authorName="Anika @ Coin Pulse"
          authorTitle="Founder"
          industry="Fintech"
          services="UI/UX Design, Product MVP"
        />
        <TestimonialCard
          ariaLabel="3 / 4"
          quoteIconUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c4e16c929024c9539cc29_Quotes.svg"
          highlightedQuote="Working with Dev Monks completely changed how we approached building our app website scratch."
          fullTestimonial="I've worked with Design Monks on three websites, and they've been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. For me, they're a 10/10 partner for all things design and development."
          quoteIconBottomUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c4e478408b311d20a4b00_Quotes (1).svg"
          authorImageUrl="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1e65ebe6d3e9cd0fb5550_Austin.avif"
          authorName="Austin @ Clarity LLC"
          authorTitle="CEO"
          industry="Fintech"
          services="UI/UX Design, Product MVP"
        />
        <TestimonialCard
          ariaLabel="4 / 4"
          quoteIconUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c4e16c929024c9539cc29_Quotes.svg"
          highlightedQuote="I never expected building a complex platform to feel this easy and smooth."
          fullTestimonial="I've had the pleasure of collaborating with Dev Monks for a while now on my new project. They're lightning-quick in addressing any questions or feedback I have, and they consistently go the extra mile to make sure I'm thrilled with the final outcome. I wholeheartedly endorse them"
          quoteIconBottomUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c4e478408b311d20a4b00_Quotes (1).svg"
          authorImageUrl="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1e54cb2518aaea9f2ed58_Ted Nash.avif"
          authorName="Ted Nash @ Yenex"
          authorTitle="Founder & CEO"
          industry="Renewable Energy"
          services="UI/UX Design, Product MVP"
        />
      </div>
    </div>
  );
};
