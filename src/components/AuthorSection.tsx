import { Award, Users, Clock, CheckCircle, Video, ArrowRight } from "lucide-react";

const AuthorSection = () => {
  const credentials = [
    {
      icon: Clock,
      title: "20+ Years Experience",
      description: "Two decades of hands-on experience with ADHD and autism families"
    },
    {
      icon: Award,
      title: "Government Certified",
      description: "Government-Certified Neuropsychopedagogue with extensive experience supporting families and educational systems"
    },
    {
      icon: Users,
      title: "Thousands Helped",
      description: "Has personally supported thousands of ADHD and autism families worldwide"
    },
    {
      icon: CheckCircle,
      title: "Battle-Tested Strategies",
      description: "Every technique in this guide has been proven to work in real-world situations"
    }
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "2,000+", label: "Families Helped" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
              <div className="relative bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl p-8 transform group-hover:scale-105 transition-transform">
                <img 
                  src="/lovable-uploads/27aa0240-7cb8-45b5-a423-a71e022a91f7.png" 
                  alt="Margareth Almeida - Neuropsychopedagogue" 
                  className="w-full rounded-2xl shadow-2xl object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
            
            {/* Floating credentials */}
            <div className="absolute -top-4 -right-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-full flex items-center gap-2 animate-pulse shadow-lg">
              <Award className="w-4 h-4" />
              Certified
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg">
              20+ Years
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                You're in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Expert Hands</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300">
              <p>
                <strong className="text-white">Meet Margareth Almeida</strong> — Certified Neuropsychopedagogue with over 20 years of hands-on experience helping families navigate the challenges of ADHD and autism.
              </p>
              <p>
                Margareth has personally guided and supported thousands of families in transforming their daily routines using simple, effective, and proven strategies. Her methods are not theoretical—they've been tested and refined inside real homes, with real children, over two decades.
              </p>
              <p>
                This guide brings together her most powerful tools, built from years of real-world problem-solving and deep psychological insight. If you're looking for clarity, confidence, and practical results, you're in the right place.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all">
                  <div className="text-3xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
                >
                  <div className="text-cyan-400">
                    <credential.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {credential.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Link */}
            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group">
              <Video className="w-5 h-5" />
              <span className="underline">Watch introduction video</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
