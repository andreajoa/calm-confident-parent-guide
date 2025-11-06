import { motion } from 'framer-motion';

const AuthorityProofSection = () => {
  const logos = [
    { alt: 'Podcast 1', src: '/lovable-uploads/podcast-1.png' },
    { alt: 'Podcast 2', src: '/lovable-uploads/podcast-2.png' },
    { alt: 'Podcast 3', src: '/lovable-uploads/podcast-3.png' },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-purple-950/70 to-slate-950/40 text-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            As Featured & Recommended By
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12 opacity-80">
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-12 object-contain"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-4">
            "Margareth Almeida's approach to ADHD and autism parenting is both scientifically grounded and deeply compassionate. This guide is essential for every parent navigating neurodiversity."
          </p>
          <footer className="text-gray-400">— Margareth Almeida, Parenting Expert</footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default AuthorityProofSection;
