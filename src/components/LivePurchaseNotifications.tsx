import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Notification {
  id: number;
  name: string;
  city: string;
  action: 'purchased' | 'started reading';
}

const LivePurchaseNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const names = ['Sarah M.', 'Jennifer L.', 'Michael T.', 'David K.', 'Emma W.', 'John C.', 'Lisa H.', 'Amanda R.'];
  const cities = ['Miami', 'NYC', 'LA', 'Chicago', 'Austin', 'Toronto', 'London', 'Sydney'];

  useEffect(() => {
    // Simulate real purchases (connect to actual backend in production)
    const interval = setInterval(() => {
      const notification: Notification = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        action: Math.random() > 0.5 ? 'purchased' : 'started reading'
      };
      
      setNotifications(prev => [notification, ...prev].slice(0, 5));
    }, 15000); // Every 15 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3 max-w-sm">
      <AnimatePresence>
        {notifications.map((notif, index) => (
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

