import { Award, Users, Clock, CheckCircle } from "lucide-react";

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
      description: "Certified Neuropsychopedagogue serving the State Government of São Paulo, Brazil"
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

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/27aa0240-7cb8-45b5-a423-a71e022a91f7.png" 
                alt="Margareth Almeida - Neuropsychopedagogue" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Meet <span className="text-primary">Margareth Almeida</span>, Your Guide
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Certified Neuropsychopedagogue with over 20 years of hands-on experience helping families navigate the challenges of ADHD and autism.</strong>
              </p>
              <p>
                Margareth has personally guided and supported thousands of families in transforming their daily routines using simple, effective, and proven strategies. Her methods are not theoretical—they've been tested and refined inside real homes, with real children, over two decades.
              </p>
              <p>
                This guide brings together her most powerful tools, built from years of real-world problem-solving and deep psychological insight. If you're looking for clarity, confidence, and practical results, you're in the right place.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {credentials.map((credential, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <credential.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {credential.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;