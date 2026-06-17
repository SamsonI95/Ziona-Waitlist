import { AlertTriangle, Volume2, Eye, Users } from "lucide-react";

const problems = [
  { icon: AlertTriangle, text: "Do not prioritize faith-based content" },
  { icon: Volume2, text: "Reward outrage over substance" },
  { icon: Eye, text: "Expose users to conflicting values" },
  { icon: Users, text: "Fragment Christian community across platforms" },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
          The Problem
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Christians today rely on mainstream social platforms that:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 text-left mb-10">
          {problems.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-4 rounded-xl bg-card p-5 border border-border"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-foreground font-medium text-sm leading-relaxed pt-2">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xl font-heading text-gradient">
          It's time for something different.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
