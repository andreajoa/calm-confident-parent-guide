import { Users, TrendingUp, Clock } from "lucide-react";
import { useState, useEffect } from 'react';

const LiveSocialProof = () => {
  const [viewingCount, setViewingCount] = useState(47);
  const [recentPurchases, setRecentPurchases] = useState(2847);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate viewing count changes
      setViewingCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(35, Math.min(65, prev + change));
      });

      // Simulate occasional purchases
      if (Math.random() > 0.7) {
        setRecentPurchases(prev => prev + 1);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-y border-cyan-500/30 py-4 z-40 backdrop-blur-sm relative" style={{ marginTop: 0, marginBottom: 0 }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <Users className="w-4 h-4" />
            <span className="font-semibold">{viewingCount} people viewing now</span>
          </span>
          <span className="hidden md:flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="font-semibold">{recentPurchases.toLocaleString()} families purchased last month</span>
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Last sale {Math.floor(Math.random() * 5) + 1} minutes ago</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveSocialProof;

