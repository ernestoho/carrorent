
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserRole } from '../types';

interface BottomNavProps {
  userRole: UserRole;
}

const BottomNav: React.FC<BottomNavProps> = ({ userRole }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const hidePaths = ['/car/', '/book/', '/list-car'];
  const shouldHide = hidePaths.some(path => location.pathname.startsWith(path));

  if (shouldHide) return null;

  const isTabActive = (path: string) => location.pathname === path;

  const NavButton = ({ path, icon, label, fillOnActive = true }: { path: string, icon: string, label: string, fillOnActive?: boolean }) => {
    const active = isTabActive(path);
    return (
      <button 
        onClick={() => navigate(path)}
        className="flex flex-col items-center justify-center gap-1 w-16 group"
      >
        <span 
          className={`material-symbols-outlined text-[26px] transition-transform group-hover:scale-110 ${active ? 'text-primary' : 'text-gray-400'}`} 
          style={{fontVariationSettings: active && fillOnActive ? "'FILL' 1" : ""}}
        >
          {icon}
        </span>
        <span className={`text-[10px] font-bold ${active ? 'text-primary' : 'text-gray-400'}`}>{label}</span>
      </button>
    );
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] max-w-lg mx-auto animate-in slide-in-from-bottom duration-300">
      <div className="flex justify-between items-center h-16">
        {userRole === 'renter' && (
          <>
            <NavButton path="/" icon="home" label="Home" />
            <NavButton path="/trips" icon="commute" label="Trips" />
            <div className="size-16" /> {/* Spacer for Floating Action */}
            <NavButton path="/inbox" icon="chat_bubble" label="Inbox" />
            <NavButton path="/trust/alex" icon="person" label="Profile" />
          </>
        )}

        {userRole === 'owner' && (
          <>
            <NavButton path="/" icon="dashboard" label="Stats" />
            <NavButton path="/listings" icon="directions_car" label="Listings" />
            <div className="size-16" />
            <NavButton path="/inbox" icon="chat_bubble" label="Inbox" />
            <NavButton path="/trust/sarah" icon="person" label="Account" />
          </>
        )}

        {userRole === 'admin' && (
          <>
            <NavButton path="/" icon="admin_panel_settings" label="Overview" />
            <NavButton path="/users" icon="group" label="Users" />
            <div className="size-16" />
            <NavButton path="/system" icon="terminal" label="System" />
            <NavButton path="/trust/admin" icon="person" label="Admin" />
          </>
        )}

        {/* Center Floating Action Button */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <button 
            onClick={() => {
              if (userRole === 'renter') navigate('/');
              else if (userRole === 'owner') navigate('/list-car');
              else navigate('/');
            }}
            className="size-14 rounded-full bg-primary flex items-center justify-center text-white shadow-xl border-[6px] border-background-light dark:border-background-dark active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-[28px]">
              {userRole === 'renter' ? 'search' : userRole === 'owner' ? 'add' : 'security'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
