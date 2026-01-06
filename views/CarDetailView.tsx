
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_CARS, MOCK_USERS, MOCK_REVIEWS } from '../constants';

const CarDetailView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = MOCK_CARS.find(c => c.id === id);
  
  if (!car) return <div className="p-8 text-center">Car not found</div>;
  const owner = MOCK_USERS[car.ownerId];

  return (
    <div className="flex flex-col bg-white dark:bg-background-dark min-h-screen">
      {/* Image Gallery */}
      <div className="relative w-full h-[45vh] min-h-[350px]">
        <div className="absolute top-0 left-0 w-full z-20 flex items-center justify-between p-4 pt-10">
          <button onClick={() => navigate(-1)} className="size-10 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center transition-transform active:scale-90">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex gap-3">
            <button className="size-10 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center">
              <span className="material-symbols-outlined">ios_share</span>
            </button>
            <button className="size-10 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        </div>
        <img src={car.images[0]} className="w-full h-full object-cover" />
        <div className="absolute bottom-12 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
          1 / {car.images.length}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative -mt-10 bg-white dark:bg-background-dark rounded-t-[2.5rem] px-6 pt-10 flex flex-col gap-8 pb-40">
        
        {/* Rating and Badges */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-surface-dark px-4 py-1.5 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="text-sm font-bold">{car.rating.toFixed(2)}</span>
            <span className="text-xs text-slate-500 font-medium">({car.tripsCount} trips)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#eef6ff] dark:bg-primary/20 text-[#0d7ff2] px-4 py-1.5 rounded-full border border-[#0d7ff2]/10">
            <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
            <span className="text-[11px] font-bold uppercase tracking-wider">Top Rated</span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
          {[
            { icon: 'electric_bolt', text: car.type },
            { icon: 'settings', text: car.specs.transmission },
            { icon: 'airline_seat_recline_normal', text: `${car.specs.seats} Seats` },
            { icon: 'speed', text: car.specs.acceleration || '3.1s' }
          ].map((spec, i) => (
            <div key={i} className="flex h-11 shrink-0 items-center gap-x-2 rounded-full border border-slate-200 dark:border-slate-700 px-5 bg-white dark:bg-surface-dark shadow-sm">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">{spec.icon}</span>
              <p className="text-sm font-semibold">{spec.text}</p>
            </div>
          ))}
        </div>

        {/* Host Section */}
        <div className="flex items-center justify-between py-2">
          <div 
            onClick={() => navigate(`/trust/${owner.id}`)}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div className="relative">
              <div className="size-16 rounded-full border-2 border-white dark:border-slate-800 shadow-md bg-cover bg-center transition-transform group-hover:scale-105" style={{backgroundImage: `url(${owner.avatar})`}} />
              <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-800 p-1 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-green-500 text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-xl leading-tight">Hosted by {owner.name.split(' ')[0]}</h3>
              <p className="text-slate-500 text-sm font-medium mt-0.5">Responds in 5 mins</p>
            </div>
          </div>
          <button className="bg-slate-50 dark:bg-surface-dark text-slate-900 dark:text-white p-4 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 transition-transform active:scale-90">
            <span className="material-symbols-outlined text-[24px]">chat_bubble</span>
          </button>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl">About the car</h3>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            {car.description} <span className="text-primary font-bold hover:underline cursor-pointer">Read more</span>
          </p>
        </div>

        {/* Review Highlights */}
        <div className="bg-[#f8fbff] dark:bg-primary/5 p-6 rounded-[2rem] flex flex-col gap-4 border border-primary/5">
          <div className="flex gap-1 text-primary">
            {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
          </div>
          <p className="text-base font-semibold italic text-slate-700 dark:text-slate-200 leading-relaxed">
            "{MOCK_REVIEWS[0].content}"
          </p>
          <div className="flex items-center gap-3 mt-1">
            <div className="size-8 rounded-full bg-slate-300 bg-cover bg-center shadow-sm" style={{backgroundImage: `url(${MOCK_REVIEWS[0].userAvatar})`}} />
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-slate-600 dark:text-slate-400">{MOCK_REVIEWS[0].userName}</p>
              <span className="text-slate-300">•</span>
              <p className="text-sm text-slate-400">{MOCK_REVIEWS[0].date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar - EXACT MATCH TO IMAGE */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 px-6 py-4 pb-10 z-[100] flex items-center justify-between shadow-[0_-8px_30px_rgba(0,0,0,0.08)] max-w-lg mx-auto">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[26px] font-extrabold tracking-tight">${car.price}</span>
            <span className="text-sm text-slate-400 font-medium">/ day</span>
          </div>
          <span className="text-sm text-[#0d7ff2] font-bold underline underline-offset-2 cursor-pointer transition-opacity hover:opacity-80">Free cancellation</span>
        </div>
        <button 
          onClick={() => navigate(`/book/${car.id}`)}
          className="bg-[#0d7ff2] hover:bg-blue-600 active:scale-95 text-white font-bold text-[17px] h-[58px] px-8 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all"
        >
          Book Instantly
          <span className="material-symbols-outlined text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
        </button>
      </div>
    </div>
  );
};

export default CarDetailView;
