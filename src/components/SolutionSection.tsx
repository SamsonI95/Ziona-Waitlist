import { Search, Heart, ShieldCheck, MessageCircle } from "lucide-react";

const solutions = [
  { icon: Search, title: "Faith-centered discovery", description: "Content that uplifts and inspires your walk." },
  { icon: Heart, title: "Community-first engagement", description: "Built around genuine connection, not clout." },
  { icon: ShieldCheck, title: "Christian moderation standards", description: "Clear guidelines rooted in biblical values." },
  { icon: MessageCircle, title: "Safe & meaningful interaction", description: "A space where your faith is respected." },
];

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            The Solution
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ziona is a mobile-first Christian social platform designed around:
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {solutions.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-tint flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
