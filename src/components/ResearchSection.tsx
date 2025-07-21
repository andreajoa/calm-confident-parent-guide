import { ExternalLink, Award } from "lucide-react";

const ResearchSection = () => {
  const authorities = [
    {
      name: "CHADD",
      description: "Children and Adults with ADHD",
      url: "https://chadd.org",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center"
    },
    {
      name: "Understood.org",
      description: "For learning and thinking differences",
      url: "https://www.understood.org",
      logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=100&fit=crop&crop=center"
    },
    {
      name: "ADDitude Magazine",
      description: "ADHD & Learning Disability Resources",
      url: "https://additudemag.com",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=100&fit=crop&crop=center"
    },
    {
      name: "CDC ADHD",
      description: "Centers for Disease Control",
      url: "https://www.cdc.gov/ncbddd/adhd",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Backed by <span className="text-primary">Leading ADHD & Autism Organizations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategies align with recommendations from the most trusted authorities in neurodevelopmental research and family support.
            </p>
          </div>

          {/* Authority Logos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {authorities.map((authority, index) => (
              <a
                key={index}
                href={authority.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevated p-6 text-center space-y-4 hover:scale-105 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={authority.logo} 
                    alt={`${authority.name} logo`}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {authority.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {authority.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Research Quote */}
          <div className="mt-16 bg-primary/5 border-l-4 border-primary p-8 rounded-lg animate-fade-in-up">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <blockquote className="text-lg md:text-xl text-foreground font-medium italic mb-2">
                  "According to CHADD, structured routines and emotional support are the foundation of successful ADHD management. Research consistently shows that families who implement systematic approaches see significant improvements in daily functioning."
                </blockquote>
                <cite className="text-muted-foreground font-semibold">
                  — Children and Adults with ADHD (CHADD)
                </cite>
              </div>
            </div>
          </div>

          {/* Evidence-Based Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/20 px-6 py-3 rounded-full border-2 border-secondary">
            <Award className="h-5 w-5 text-secondary" />
            <span className="font-semibold text-foreground">Evidence-Based Strategies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;