
import React from 'react';
import { User } from '../types';
import { MOCK_CARS, MOCK_USERS } from '../constants';

interface AdminViewProps {
  user: User;
}

const AdminView: React.FC<AdminViewProps> = ({ user }) => {
  return (
    <div className="flex flex-col p-6 pt-12 pb-32 animate-in fade-in duration-500">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Admin Ops</h1>
          <p className="text-sm text-slate-500">System health is <span className="text-emerald-500 font-bold">Optimal</span></p>
        </div>
        <div className="size-12 rounded-full border-2 border-indigo-500 p-0.5" style={{backgroundImage: `url(${user.avatar})`, backgroundSize: 'cover'}} />
      </header>

      {/* High-Level Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white dark:bg-surface-dark p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Rev</p>
          <p className="text-2xl font-black text-indigo-600">$42,500</p>
          <p className="text-[10px] text-emerald-500 font-bold mt-2">+12% vs last week</p>
        </div>
        <div className="bg-white dark:bg-surface-dark p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Active Trips</p>
          <p className="text-2xl font-black">24</p>
          <p className="text-[10px] text-slate-400 font-bold mt-2">Across 3 cities</p>
        </div>
      </div>

      {/* Critical Queue */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Verification Queue</h3>
          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-bold">4 Pending</span>
        </div>
        <div className="flex flex-col gap-3">
          {MOCK_CARS.filter(c => c.status === 'active').map(car => (
            <div key={car.id} className="bg-white dark:bg-surface-dark p-4 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-800">
              <img src={car.images[0]} className="size-14 rounded-xl object-cover" />
              <div className="flex-1">
                <p className="font-bold text-sm">{car.year} {car.make} {car.model}</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Owner ID: {car.ownerId}</p>
              </div>
              <button className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 px-4 py-2 rounded-xl text-xs font-bold">Inspect</button>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Reports */}
      <section>
        <h3 className="font-bold text-lg mb-4">Recent Incident Reports</h3>
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/50 p-5 rounded-3xl flex items-start gap-4">
          <span className="material-symbols-outlined text-red-500">warning</span>
          <div>
            <p className="text-sm font-bold text-red-900 dark:text-red-200">Late Return Detected</p>
            <p className="text-xs text-red-700 dark:text-red-300/70 mt-1">Car #tesla-3 is 45 mins overdue. Renter contacted via SMS.</p>
            <div className="mt-4 flex gap-2">
              <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase">Call Owner</button>
              <button className="bg-white/50 text-red-600 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase">Escalate</button>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 p-6 bg-slate-900 rounded-[2.5rem] text-white">
        <h4 className="font-bold mb-2">System Diagnostics</h4>
        <div className="space-y-3">
          <div className="flex justify-between text-xs">
            <span className="opacity-60">API Latency</span>
            <span className="text-emerald-400 font-bold">42ms</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400 w-full" />
          </div>
          <div className="flex justify-between text-xs">
            <span className="opacity-60">Payout Processor</span>
            <span className="text-emerald-400 font-bold">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
