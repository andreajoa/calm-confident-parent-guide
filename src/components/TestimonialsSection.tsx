import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "This guide saved my sanity. Finally, someone who truly understands what we go through every single day. The strategies actually work!",
      author: "Sarah M.",
      details: "Mom of ADHD 7-year-old",
      rating: 5
    },
    {
      text: "The routines actually work! Our mornings went from chaos to peaceful in just two weeks. I wish I had found this years ago.",
      author: "Michael T.",
      details: "Dad of autistic twins",
      rating: 5
    },
    {
      text: "I'm not just surviving anymore - I'm thriving as a parent. This guide gave me the confidence I desperately needed.",
      author: "Jennifer L.",
      details: "Single mom of three",
      rating: 5
    },
    {
      text: "The scripts for talking to teachers changed everything. My daughter finally got the support she needs at school.",
      author: "Amanda R.",
      details: "Mom of ADHD 9-year-old",
      rating: 5
    },
    {
      text: "My son's meltdowns decreased by 80% after implementing these strategies. This guide is a game-changer.",
      author: "David K.",
      details: "Dad of autistic 6-year-old",
      rating: 5
    },
    {
      text: "As a working mom, I needed practical solutions that actually fit into our busy life. This delivered exactly that.",
      author: "Lisa H.",
      details: "Working mom of two",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Real Families, <span className="text-primary">Real Transformation</span>
            </h2>
            
            {/* Rating Display */}
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-semibold text-foreground">4.9/5</span>
              <span className="text-lg text-muted-foreground">from 2,000+ parents</span>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what families are saying about their transformation:
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="card-elevated p-6 space-y-4 text-left hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="h-5 w-5 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8 animate-fade-in-up">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">2,000+</div>
              <div className="text-muted-foreground">Families Helped</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>

          {/* Social Proof Statement */}
          <div className="mt-12 bg-secondary/20 p-8 rounded-2xl border-2 border-secondary animate-fade-in-up">
            <p className="text-xl md:text-2xl font-semibold text-center text-balance">
              "The transformation in our daily life has been incredible. I actually look forward to mornings now!"
            </p>
            <p className="text-center text-muted-foreground mt-4 font-medium">
              — Most common feedback from families using this guide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;