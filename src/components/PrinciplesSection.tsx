import { Sparkles, Scale, Smartphone, Shield, PenTool } from "lucide-react";

const principles = [
  { icon: PenTool, title: "Everyone Can Create" },
  { icon: Scale, title: "Values Before Virality" },
  { icon: Sparkles, title: "Simple & Familiar" },
  { icon: Shield, title: "Community Safety" },
  { icon: Smartphone, title: "Mobile-First" },
];

const PrinciplesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">
          Our Principles
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <span className="font-semibold text-foreground text-sm">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
