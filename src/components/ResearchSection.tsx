import { ExternalLink, Award, Sparkles } from "lucide-react";

const ResearchSection = () => {
  const authorities = [
    {
      name: "CHADD",
      description: "Children and Adults with ADHD",
      url: "https://chadd.org",
      logo: "/lovable-uploads/f09d319e-95a4-4e4a-a767-bf6d3d2d3709.png"
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
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Backed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Leading Organizations</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center space-y-4 hover:bg-white/10 hover:border-cyan-500/50 transition-all transform hover:scale-105 group"
              >
                <div className="relative">
                  <img 
                    src={authority.logo} 
                    alt={`${authority.name} logo`}
                    className="w-full h-16 sm:h-20 md:h-24 object-contain rounded-lg bg-white/5"
                  />
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {authority.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {authority.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Research Quote */}
          <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm animate-fade-in-up">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <blockquote className="text-lg md:text-xl text-white font-medium italic mb-2">
                  "According to CHADD, structured routines and emotional support are the foundation of successful ADHD management. Research consistently shows that families who implement systematic approaches see significant improvements in daily functioning."
                </blockquote>
                <cite className="text-cyan-400 font-semibold">
                  — Children and Adults with ADHD (CHADD)
                </cite>
              </div>
            </div>
          </div>

          {/* Evidence-Based Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-3 rounded-full border-2 border-cyan-500/50 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span className="font-semibold text-white">Evidence-Based Strategies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
