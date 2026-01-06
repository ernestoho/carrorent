
import React from 'react';
import { User } from '../types';
import { MOCK_REQUESTS } from '../constants';

interface DashboardViewProps {
  user: User;
}

const DashboardView: React.FC<DashboardViewProps> = ({ user }) => {
  return (
    <div className="flex flex-col bg-slate-50 dark:bg-background-dark min-h-screen">
      <header className="bg-white dark:bg-surface-dark p-6 pt-12 rounded-b-[2rem] shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full border-2 border-emerald-500 p-0.5" style={{backgroundImage: `url(${user.avatar})`, backgroundSize: 'cover'}} />
            <div>
              <h2 className="text-lg font-bold">Hi, {user.name.split(' ')[0]}</h2>
              <p className="text-xs text-slate-500">Superhost • SF District</p>
            </div>
          </div>
          <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-400">notifications</span>
          </div>
        </div>
      </header>

      <div className="p-4 flex flex-col gap-6 pb-32">
        {/* Earnings Card */}
        <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Total Earnings</p>
          <h1 className="text-4xl font-black tracking-tight mb-2">$3,420.50</h1>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-500">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            +22% this month
          </div>
        </div>

        {/* Actionable Requests */}
        <section>
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="font-bold text-lg">New Requests</h3>
            <span className="text-primary text-xs font-bold underline">View all</span>
          </div>
          <div className="flex flex-col gap-4">
            {MOCK_REQUESTS.map(req => (
              <div key={req.id} className="bg-white dark:bg-surface-dark p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between mb-4">
                  <div className="flex gap-3">
                    <img src={req.renterAvatar} className="size-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-sm">{req.renterName}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{req.dates}</p>
                    </div>
                  </div>
                  <p className="font-bold text-primary">${req.totalPrice}</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 h-10 bg-slate-50 dark:bg-slate-800 text-slate-400 text-xs font-bold rounded-lg uppercase">Decline</button>
                  <button className="flex-1 h-10 bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-emerald-500/20 uppercase">Accept</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardView;
