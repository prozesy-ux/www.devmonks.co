import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServiceGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1.2fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-4 md:grid-cols-[1fr_1fr_1fr]">
      <ServiceCard
        imageUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699ed1c77c306c9e7243d07b_Frame 2147258067 (2).png"
        imageAlt="AI Automation Systems"
        category="automation"
        title="AI Automation Systems"
        services={[
          { text: "Agentic AI Solutions", href: "https://www.devmonks.co/" },
          { text: "Custom LLM Solutions", href: "https://www.devmonks.co/" },
          {
            text: "Intelligent Workflow Automation",
            href: "https://www.devmonks.co/",
          },
          { text: "RAG Development", href: "https://www.devmonks.co/" },
        ]}
      />
      <ServiceCard
        imageUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699ed1d7fbdc76d5ed0d331c_Frame 2147258066.png"
        imageAlt="SaaS Platform Engineering"
        category="Engineering"
        title="SaaS Platform Engineering"
        services={[
          {
            text: "Multi-Tenant SaaS Architecture",
            href: "https://www.devmonks.co/",
          },
          { text: "Enterprise Web Portals", href: "https://www.devmonks.co/" },
          { text: "Rapid MVP Development", href: "https://www.devmonks.co/" },
          {
            text: "Backend & API Development",
            href: "https://www.devmonks.co/",
          },
        ]}
      />
      <ServiceCard
        imageUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699ed1e2fbdc76d5ed0d3538_Frame 2147258066 (1).png"
        imageAlt="Mobile App Development"
        category="DEVELOPMENT"
        title="Mobile App Development"
        services={[
          { text: "Custom iOS Development", href: "https://www.devmonks.co/" },
          { text: "Android App Development", href: "https://www.devmonks.co/" },
          { text: "IoT Companion Apps", href: "https://www.devmonks.co/" },
          {
            text: "Cross-Platform Development",
            href: "https://www.devmonks.co/",
          },
        ]}
      />
    </div>
  );
};
