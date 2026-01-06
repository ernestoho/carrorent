
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_USERS, MOCK_REVIEWS } from '../constants';

interface TrustViewProps {
  onLogout?: () => void;
}

const TrustView: React.FC<TrustViewProps> = ({ onLogout }) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const user = MOCK_USERS[userId || 'alex'];

  return (
    <div className="flex flex-col pt-12 pb-32">
      <header className="px-4 flex items-center justify-between mb-8">
        <button onClick={() => navigate(-1)} className="size-10 rounded-full hover:bg-slate-200 flex items-center justify-center transition-transform active:scale-90">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold">Trust Profile</h2>
        {onLogout ? (
          <button onClick={onLogout} className="text-red-500 text-sm font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Logout
          </button>
        ) : <div className="size-10" />}
      </header>

      <div className="flex flex-col items-center px-6 mb-10">
        <div className="relative">
          <div className="size-32 rounded-full border-4 border-white dark:border-surface-dark shadow-2xl bg-cover bg-center" style={{backgroundImage: `url(${user.avatar})`}} />
          <div className="absolute bottom-1 right-2 bg-primary text-white rounded-full p-2 border-4 border-slate-50 flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <h1 className="text-2xl font-black mb-1">{user.name}</h1>
          <p className="text-slate-400 text-sm font-medium tracking-tight">Verified Community Member since {user.memberSince}</p>
        </div>
      </div>

      <div className="px-6 grid grid-cols-3 gap-3 mb-10">
        {[
          { label: 'Rating', val: user.rating, icon: 'star', color: 'text-orange-400' },
          { label: 'Trips', val: user.trips, icon: 'commute', color: 'text-blue-500' },
          { label: 'Rep', val: '99%', icon: 'shield_check', color: 'text-emerald-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-surface-dark p-4 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center gap-1">
            <span className={`material-symbols-outlined text-lg ${stat.color}`}>{stat.icon}</span>
            <p className="text-lg font-black">{stat.val}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="px-6">
        <h3 className="font-bold text-lg mb-4">Official Verifications</h3>
        <div className="grid grid-cols-1 gap-3">
          {[
            { label: 'Government ID', verified: true },
            { label: 'Insurance Policy', verified: true },
            { label: 'Background Check', verified: true },
            { label: 'Mobile Number', verified: true }
          ].map((v, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800">
              <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{v.label}</span>
              <span className="material-symbols-outlined text-emerald-500">check_circle</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustView;
