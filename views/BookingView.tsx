
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_CARS } from '../constants';

const BookingView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = MOCK_CARS.find(c => c.id === id);
  const [swipeComplete, setSwipeComplete] = useState(false);

  if (!car) return null;

  const handlePay = () => {
    setSwipeComplete(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-6 p-4 pt-12 pb-32">
      <header className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="size-10 rounded-full hover:bg-slate-100 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold">Request Booking</h2>
        <button className="text-sm font-bold text-slate-500">Help</button>
      </header>

      <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
        <img src={car.images[0]} className="size-20 rounded-xl object-cover" />
        <div>
          <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Your Ride</p>
          <h3 className="text-lg font-bold">{car.year} {car.make} {car.model}</h3>
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <span className="material-symbols-outlined text-yellow-500 text-base" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            <span className="font-bold text-slate-900 dark:text-white">{car.rating.toFixed(2)}</span>
            <span>({car.tripsCount} trips)</span>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">When & Where</h2>
        <div className="flex gap-3">
          <div className="flex-1 bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-800">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Trip Start</p>
            <div className="flex justify-between items-baseline mt-1">
              <span className="text-lg font-bold">Oct 14</span>
              <span className="text-xs text-slate-400">10:00 AM</span>
            </div>
          </div>
          <div className="flex-1 bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-800">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Trip End</p>
            <div className="flex justify-between items-baseline mt-1">
              <span className="text-lg font-bold">Oct 17</span>
              <span className="text-xs text-slate-400">10:00 AM</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Drive Worry-Free</h2>
        <div className="bg-primary/10 p-4 rounded-xl flex gap-3 text-primary">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
          <div>
            <p className="text-sm font-bold">Protected from pickup to return</p>
            <p className="text-[10px] opacity-80">Includes 24/7 Roadside Assistance & Liability Insurance.</p>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
          <div className="min-w-[260px] p-5 rounded-2xl border-2 border-primary bg-white dark:bg-surface-dark shadow-sm">
            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full">Recommended</span>
            <p className="text-lg font-bold mt-3">Standard</p>
            <p className="text-sm text-slate-500">$0 deductible</p>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <p className="text-sm font-bold">Included</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">The Breakdown</h2>
        <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between mb-2">
            <span className="text-slate-500">${car.price} x 3 days</span>
            <span className="font-bold">${car.price * 3}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-slate-500">Trip Fee</span>
            <span className="font-bold">$15</span>
          </div>
          <div className="h-px bg-slate-100 dark:bg-slate-700 mb-4" />
          <div className="flex justify-between items-end">
            <span className="text-lg font-bold">Total</span>
            <span className="text-2xl font-extrabold">${car.price * 3 + 15}</span>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 p-4 pb-12 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 z-50 max-w-lg mx-auto">
        <button 
          onClick={handlePay}
          disabled={swipeComplete}
          className={`w-full h-16 rounded-full flex items-center justify-between px-6 transition-all relative overflow-hidden ${swipeComplete ? 'bg-green-500' : 'bg-primary'}`}
        >
          {swipeComplete ? (
            <div className="w-full flex items-center justify-center gap-2 text-white font-bold text-lg animate-pulse">
              <span className="material-symbols-outlined">check_circle</span>
              Payment Confirmed
            </div>
          ) : (
            <>
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-white/70 font-bold uppercase">Total</span>
                <span className="text-xl font-bold text-white">${car.price * 3 + 15}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">Slide to Pay</span>
                <span className="material-symbols-outlined text-white">arrow_forward</span>
              </div>
              <div className="absolute inset-0 bg-white/20 -translate-x-full animate-[shimmer_2s_infinite]" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default BookingView;
