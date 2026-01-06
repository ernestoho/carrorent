
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';
import { MOCK_CARS } from '../constants';
import { getCarRecommendations } from '../services/geminiService';

interface HomeViewProps {
  user: User;
}

const HomeView: React.FC<HomeViewProps> = ({ user }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('San Francisco, CA');
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    setIsSearching(true);
    const recs = await getCarRecommendations(searchQuery);
    if (recs) setRecommendations(recs);
    setIsSearching(false);
  };

  return (
    <div className="flex flex-col px-4 pt-4 pb-32">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-surface-dark shadow-sm" style={{backgroundImage: `url(${user.avatar})`}} />
          <div>
            <p className="text-xs text-slate-500 font-medium tracking-tight">Welcome,</p>
            <p className="text-sm font-bold">{user.name.split(' ')[0]}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold">Discover</button>
          <button className="size-10 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px] text-slate-400">notifications</span>
          </button>
        </div>
      </header>

      <h1 className="text-[36px] font-extrabold leading-[1.15] mb-6">
        Rent a masterpiece,<br/>
        <span className="text-primary">drive your story.</span>
      </h1>

      <div className="bg-white dark:bg-surface-dark rounded-[2rem] shadow-xl p-4 flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-4 px-2 py-2 border-b border-slate-100 dark:border-slate-700">
          <span className="material-symbols-outlined text-primary">location_on</span>
          <div className="flex flex-col flex-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Destination</label>
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none p-0 focus:ring-0 font-medium text-sm" 
              placeholder="Where to?" 
            />
          </div>
        </div>
        <button 
          onClick={handleSearch}
          disabled={isSearching}
          className="w-full h-14 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          {isSearching ? <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><span className="material-symbols-outlined">search</span> Find Cars</>}
        </button>
      </div>

      {recommendations.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            AI Recommended
          </h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {recommendations.map((rec, i) => (
              <div key={i} className="min-w-[200px] p-4 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="font-bold text-primary mb-1">{rec.category}</p>
                <p className="text-xs text-slate-500 line-clamp-2">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Featured in {searchQuery.split(',')[0]}</h3>
      </div>

      <div className="flex overflow-x-auto gap-4 -mx-4 px-4 pb-8 no-scrollbar snap-x snap-mandatory">
        {MOCK_CARS.map(car => (
          <div 
            key={car.id}
            onClick={() => navigate(`/car/${car.id}`)}
            className="snap-center shrink-0 w-[280px] flex flex-col gap-3 group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <img src={car.images[0]} alt={car.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg">
                <p className="text-xs font-bold">${car.price}<span className="font-normal text-slate-500">/day</span></p>
              </div>
            </div>
            <h4 className="font-bold">{car.make} {car.model}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
