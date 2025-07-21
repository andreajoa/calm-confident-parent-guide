import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Will this work if I've already tried everything?",
      answer: "This isn't generic advice you've seen before. It's specific, tested strategies from 20+ years of real family work. Many parents tell us they wish they'd found these methods earlier because they're different from typical parenting advice. The strategies are designed for neurodivergent children specifically, not adapted from neurotypical approaches."
    },
    {
      question: "Is this suitable for both ADHD and autism?",
      answer: "Absolutely! Many strategies overlap beautifully for both conditions, and we address both specifically throughout the guide. The sensory regulation techniques work for both, the routine strategies help all neurodivergent children, and the communication scripts are effective for various needs. Plus, many children have both ADHD and autism."
    },
    {
      question: "How quickly will I see results?",
      answer: "Many parents report feeling more confident and seeing small improvements within the first week. Significant changes in routines typically happen within 2-3 weeks of consistent implementation. Remember, we're changing patterns that may have been in place for years, so patience with the process is important. The guide includes timeline expectations for each strategy."
    },
    {
      question: "What ages does this cover?",
      answer: "The strategies work for children aged 3-18, with age-specific adaptations included throughout. Younger children (3-7) may need more visual supports and shorter routines. School-age children (8-12) can handle more complex systems. Teenagers (13-18) can be involved in creating their own systems with your guidance. The guide provides modifications for each developmental stage."
    },
    {
      question: "Is there ongoing support?",
      answer: "Yes! You can email tdahma2@gmail.com for personalized guidance. Margareth personally responds to help families implement strategies effectively. We also provide links to additional resources and support communities. The guide is designed to be self-sufficient, but support is available when you need it."
    },
    {
      question: "Can I print the materials?",
      answer: "Everything is designed to print beautifully and use forever! The visual schedules, checklists, and tools are formatted for standard home printers. You can print as many copies as you need for your family. Many families create laminated versions for daily use. No subscription required - once you have it, it's yours to use however works best."
    },
    {
      question: "What if it doesn't work for my family?",
      answer: "We offer a 30-day satisfaction guarantee. If you implement the strategies consistently and don't see improvements, we'll refund your purchase. However, we're confident in these methods because they've been refined over 20 years of real-world testing with thousands of families just like yours."
    },
    {
      question: "How do I access the guide?",
      answer: "Instant PDF download after purchase - start reading in minutes! You'll receive an email with download links immediately after your purchase is complete. The guide works on all devices: computers, tablets, phones. You can start implementing strategies today, not weeks from now waiting for shipping."
    },
    {
      question: "Is this just theory or practical strategies?",
      answer: "This is 100% practical, actionable strategies! Every technique includes step-by-step implementation instructions, real-world examples, and troubleshooting tips. No fluff or theory - just proven methods you can start using immediately. The guide is written by someone who has worked hands-on with families for over 20 years."
    },
    {
      question: "Will this help with school issues?",
      answer: "Yes! The guide includes specific scripts for communicating with teachers, preparing for IEP meetings, and advocating for your child's needs. You'll learn how to document concerns effectively, request appropriate accommodations, and build positive relationships with school staff. Many parents say the school communication strategies alone were worth the investment."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common concerns and make an informed decision for your family.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-fade-in-up">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-elevated px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 ml-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional Support */}
          <div className="mt-12 text-center bg-primary/5 p-8 rounded-xl border border-primary/20 animate-fade-in-up">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're here to help! Get personalized answers to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:tdahma2@gmail.com"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Email Us Directly
              </a>
              <a 
                href="https://neuropsychopedagogue.gumroad.com/l/spehk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero inline-flex items-center justify-center"
              >
                Get Started Now - $19.87
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;