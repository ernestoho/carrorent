
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListCarWizard: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState(54);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-background-dark min-h-screen">
      <header className="flex items-center justify-between px-4 pt-12 pb-2 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <button onClick={() => navigate(-1)} className="size-10 rounded-full hover:bg-slate-100 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`h-1.5 w-8 rounded-full transition-all ${i <= step ? 'bg-primary' : 'bg-slate-200'}`} />
          ))}
        </div>
        <button className="text-slate-500 font-bold text-sm">Save</button>
      </header>

      <main className="p-6 pb-40">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Show off your ride</h1>
          <p className="text-slate-500 mb-8">Great photos build trust. Upload at least 3 photos to help renters imagine their trip.</p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="col-span-2 relative aspect-video rounded-2xl overflow-hidden group shadow-md">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuASJ3ERFIKdR4MLdqB_LnbtYgGryl4CR3KVe-tj1uJ3eH3LfF_8Yx9QvmlEYWiMRZ3Kp6PqSw_PZDDSJlMuc2UYDyHc1PC80wu64UBFlgmQTLuHJaBAGU53uiQY2tyaC0uV2byXNTSt4ryf94QVcK9sC-9xRIznW-bx2zBtBre_eUa6s0BWNC1WzsIVrK7PHdsRJcbDOnHyGXJ4d3wqnowuUK_NWTRE0ohJ0pKAre0BcudRbQPDHcBNRY93Iwnq0O3vE343tt8pF311" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <p className="text-white text-[10px] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Cover Photo
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzZ_SIxW93okRaTm6EiLrTqnTEhNi9rHm4s5RxSRNxSelQAkD_vAYTj9vL_xxNGcjFr7Tf7KgCRFF4H2q0FCdIXi02ruZDazhkjr2YTZqcwX3QlX0YT1quNR-ARRgGn-epMtzMPK_ZmmI-Wn1PDGe8wA3Dqk9zEqD_vbOBuXjkAfU1Qd8hDsRWwqEolJ7wMe3AnY3wMuX2Ycw1H6QVvT3yLMvisrmtKQPhRy-EiWpu0ZvFuwGXf8EswUrn-bk8xM4iyBj4l5767RYD" className="w-full h-full object-cover" />
            </div>
            <button className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 transition-colors group">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">add_a_photo</span>
              </div>
              <span className="text-xs font-bold text-slate-400">Add More</span>
            </button>
          </div>

          <div className="bg-slate-50 dark:bg-surface-dark p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500">payments</span>
                <h3 className="font-bold">Smart Pricing</h3>
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">Recommended</span>
            </div>
            <div className="mb-6">
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">Estimated daily rate</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">${price}</span>
                <span className="text-slate-400 text-sm">/ day</span>
              </div>
            </div>
            <input 
              type="range" 
              min="20" 
              max="200" 
              value={price} 
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-full appearance-none accent-primary cursor-pointer"
            />
            <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400">
              <span>$20</span>
              <span>$200+</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Protection & Safety</h3>
            <label className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-background-dark cursor-pointer group hover:border-primary transition-colors">
              <input type="checkbox" checked readOnly className="mt-1 size-5 rounded text-primary focus:ring-0 border-slate-300" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="font-bold">Premium Insurance</p>
                  <span className="material-symbols-outlined text-slate-400 text-base">info</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">Covers up to $1M in liability and physical damage.</p>
              </div>
            </label>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 pb-12 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 z-50 max-w-lg mx-auto">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Potential Earnings</span>
            <span className="text-lg font-bold">${price * 12} <span className="text-sm font-normal text-slate-400">/ mo</span></span>
          </div>
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex-1 h-14 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/30 flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            Next Step
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCarWizard;
