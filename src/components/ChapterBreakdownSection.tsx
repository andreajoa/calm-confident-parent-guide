import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ChapterBreakdownSection = () => {
  const chapters = [
    {
      title: "Chapter 1-3: Understanding Your Child's Brain",
      content: "What ADHD and Autism really are (beyond the myths) • Why behavior is communication, not defiance • The neuroscience that changes everything"
    },
    {
      title: "Chapter 4-7: Connection & Regulation",
      content: "Connection before correction (the shift that changes everything) • Meltdowns vs tantrums (and how to respond to each) • Creating peaceful routines that actually work • Co-regulation strategies"
    },
    {
      title: "Chapter 8-11: Daily Life Strategies",
      content: "Screens, sleep, and sensory triggers • Food, movement & the nervous system • Simple tools that actually work • Emotional regulation for kids"
    },
    {
      title: "Chapter 12-16: Beyond the Home",
      content: "Fostering social skills gently • Sibling support strategies • Dealing with school and IEPs • Building your support network • Self-care for the exhausted parent"
    }
  ];

  return (
    <section className="pt-0 pb-16 md:pb-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white" style={{ marginTop: 0, paddingTop: 0 }}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Here's Exactly What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Discover Inside:</span>
          </h2>
          <p className="text-xl text-gray-400">
            178 pages of actionable strategies organized into 16 comprehensive chapters
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem 
                value={`chapter-${index}`}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-6 hover:bg-white/10 hover:border-cyan-500/50 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:text-cyan-400 py-6">
                  <div className="flex items-start space-x-4 w-full">
                    <BookOpen className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-lg">{chapter.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pb-6 ml-10">
                  <div className="space-y-2">
                    {chapter.content.split(' • ').map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">→</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ChapterBreakdownSection;

