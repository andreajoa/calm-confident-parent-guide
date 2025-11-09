import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

interface SectionBridgeProps {
  text: string;
  variant?: 'default' | 'urgent' | 'benefit' | 'social-proof';
  icon?: 'arrow' | 'sparkles' | 'check' | 'trending';
}

const SectionBridge = ({ 
  text, 
  variant = 'default',
  icon = 'arrow'
}: SectionBridgeProps) => {
  const iconComponent = {
    arrow: <ArrowDown className="w-5 h-5" />,
    sparkles: <Sparkles className="w-5 h-5" />,
    check: <CheckCircle2 className="w-5 h-5" />,
    trending: <TrendingUp className="w-5 h-5" />
  };

  const variantStyles = {
    default: 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-y border-cyan-500/20',
    urgent: 'bg-gradient-to-r from-red-500/10 to-orange-500/10 border-y border-red-500/20',
    benefit: 'bg-gradient-to-r from-green-500/10 to-cyan-500/10 border-y border-green-500/20',
    'social-proof': 'bg-gradient-to-r from-yellow-500/10 to-pink-500/10 border-y border-yellow-500/20'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`${variantStyles[variant]} py-6 md:py-8 px-4 text-center`}
      style={{ marginTop: 0, marginBottom: 0 }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="flex items-center justify-center gap-3 text-white/90 text-lg md:text-xl font-semibold"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-cyan-400">
            {iconComponent[icon]}
          </span>
          <span>{text}</span>
          <span className="text-cyan-400">
            {iconComponent[icon]}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SectionBridge;

