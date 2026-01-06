
import React from 'react';

interface AuthViewProps {
  onLogin: (id: string) => void;
  onBack?: () => void;
}

const AuthView: React.FC<AuthViewProps> = ({ onLogin, onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-background-dark p-6 max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {onBack && (
        <button 
          onClick={onBack}
          className="absolute top-12 left-6 size-10 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center text-slate-400"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      )}

      <div className="size-20 bg-primary rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl mb-8">
        <span className="material-symbols-outlined text-[48px]">auto_share</span>
      </div>
      
      <h1 className="text-3xl font-extrabold text-center mb-2 tracking-tight">Choose Persona</h1>
      <p className="text-slate-500 text-center mb-12 font-medium">Experience the platform from any angle</p>

      <div className="w-full flex flex-col gap-4">
        {[
          { id: 'alex', name: 'Alex (Renter)', role: 'Browse & Rent', icon: 'directions_car', color: 'bg-blue-500' },
          { id: 'sarah', name: 'Sarah (Owner)', role: 'List & Manage', icon: 'payments', color: 'bg-emerald-500' },
          { id: 'admin', name: 'Super Admin', role: 'Full Platform Oversight', icon: 'shield_person', color: 'bg-indigo-600' }
        ].map(persona => (
          <button
            key={persona.id}
            onClick={() => onLogin(persona.id)}
            className="group relative w-full bg-white dark:bg-surface-dark p-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 flex items-center gap-5 overflow-hidden active:scale-[0.98]"
          >
            <div className={`size-14 rounded-2xl ${persona.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
              <span className="material-symbols-outlined text-[32px]">{persona.icon}</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold group-hover:text-primary transition-colors">{persona.name}</span>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{persona.role}</span>
            </div>
            <div className="ml-auto">
              <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
            </div>
            <div className={`absolute top-0 right-0 h-full w-1 ${persona.color} opacity-20`} />
          </button>
        ))}
      </div>

      <p className="mt-16 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Premium P2P Sharing Platform</p>
    </div>
  );
};

export default AuthView;
