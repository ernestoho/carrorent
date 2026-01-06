
import React from 'react';

interface LandingViewProps {
  onGetStarted: () => void;
}

const LandingView: React.FC<LandingViewProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark max-w-lg mx-auto animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="relative h-[65vh] overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuALr62Y_4kPM8ISu-gOjLAITMRdq-lXGFrjin5mDVITogTnQNVf4xIFg9UwZw6mDV5B6aH1QM3CiGJehFgNA94KgzFjmcmDwtTPrUiB8OzGtBW-dtTRXhBJ5VV3huR3fMrIJcC0N7nAWCG1-hAOHkxp9Z7GynfowmM67ovDVOJow41eQtA84Bobs-rLts6fP-yn8wd4cm-duZcace6vuqY-vnV7VRwUalp5dey6lRpA1P2iSSzJ0xFOcFaBJ_uQFqgpvWmmDiB2DxAN" 
          alt="Premium Car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-12">
          <div className="size-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-lg">
            <span className="material-symbols-outlined text-[32px]">auto_share</span>
          </div>
          <h1 className="text-white text-[42px] font-black leading-[1.1] tracking-tight mb-4">
            The car you want,<br/>
            <span className="text-primary">from a neighbor.</span>
          </h1>
          <p className="text-white/70 text-lg font-medium leading-relaxed max-w-[90%]">
            Premium peer-to-peer car sharing. No counters, no lines, no hidden fees.
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="px-6 py-10 flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-surface-dark p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800">
            <span className="material-symbols-outlined text-primary text-3xl mb-3">verified</span>
            <h3 className="font-bold text-sm mb-1">Trust First</h3>
            <p className="text-[10px] text-slate-500 leading-normal">Fully insured trips and verified community members.</p>
          </div>
          <div className="bg-slate-50 dark:bg-surface-dark p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800">
            <span className="material-symbols-outlined text-emerald-500 text-3xl mb-3">payments</span>
            <h3 className="font-bold text-sm mb-1">Earn Daily</h3>
            <p className="text-[10px] text-slate-500 leading-normal">Turn your idle car into a high-performance asset.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight">How it works</h2>
          <div className="space-y-6 mt-2">
            {[
              { icon: 'search', title: 'Find your ride', desc: 'Browse curated collections of local vehicles.' },
              { icon: 'bolt', title: 'Instant Booking', desc: 'Book with a tap and coordinate pickup via chat.' },
              { icon: 'key', title: 'Pick up & Drive', desc: 'Meet your host or use remote unlock to start.' }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">{step.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={onGetStarted}
          className="w-full h-16 bg-primary text-white rounded-full font-bold text-lg shadow-xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
        >
          Get Started
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>

        <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest pb-8">
          Trusted by 50,000+ drivers in SF & LA
        </p>
      </div>
    </div>
  );
};

export default LandingView;
