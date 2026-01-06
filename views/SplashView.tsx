
import React from 'react';

const SplashView: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-[1000] animate-in fade-in duration-500">
      <div className="relative">
        {/* Animated Glow */}
        <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full scale-150 animate-pulse" />
        
        <div className="relative size-24 bg-white rounded-[2rem] flex items-center justify-center shadow-2xl animate-in zoom-in-50 duration-700 delay-200">
          <span className="material-symbols-outlined text-primary text-[56px]">auto_share</span>
        </div>
      </div>
      
      <div className="mt-8 text-center animate-in slide-in-from-bottom-4 duration-700 delay-500">
        <h1 className="text-white text-3xl font-black tracking-tighter">AutoShare</h1>
        <p className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mt-2">Drive the future</p>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="size-1.5 bg-white/30 rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default SplashView;
