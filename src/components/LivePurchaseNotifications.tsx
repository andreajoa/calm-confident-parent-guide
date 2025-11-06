import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Notification {
  id: number;
  name: string;
  city: string;
  action: 'purchased' | 'started reading';
}

const LivePurchaseNotifications = () => {
  const [queue, setQueue] = useState<Notification[]>([]);
  const [visible, setVisible] = useState<Notification[]>([]);

  const names = ['Sarah M.', 'Jennifer L.', 'Michael T.', 'David K.', 'Emma W.', 'John C.', 'Lisa H.', 'Amanda R.'];
  const cities = ['Miami', 'NYC', 'LA', 'Chicago', 'Austin', 'Toronto', 'London', 'Sydney'];

  // Feed queue regularly
  useEffect(() => {
    const interval = setInterval(() => {
      const notification: Notification = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        action: Math.random() > 0.5 ? 'purchased' : 'started reading'
      };
      setQueue(prev => [...prev, notification].slice(-12));
    }, 3000); // add every 3s to keep cycling
    return () => clearInterval(interval);
  }, []);

  // Cycle visible items: show 2, swap every 5s
  useEffect(() => {
    if (visible.length === 0 && queue.length > 0) {
      setVisible(queue.slice(0, 2));
      setQueue(prev => prev.slice(2));
    }
    const cycle = setInterval(() => {
      setVisible(prev => {
        if (queue.length === 0) return prev;
        const next = queue.slice(0, 2);
        setQueue(q => q.slice(2));
        return next;
      });
    }, 5000);
    return () => clearInterval(cycle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue.length]);

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3 max-w-sm pointer-events-none">
      <AnimatePresence>
        {visible.map((notif, index) => (
          <motion.div
            key={notif.id}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-md text-white px-4 py-3 rounded-lg shadow-xl border border-green-400/50 flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
            <div className="flex-1 text-sm">
              <span className="font-semibold">{notif.name}</span> from {notif.city} {notif.action === 'purchased' ? 'just purchased' : 'started reading'}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LivePurchaseNotifications;

