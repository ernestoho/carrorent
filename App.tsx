
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomeView from './views/HomeView';
import CarDetailView from './views/CarDetailView';
import BookingView from './views/BookingView';
import DashboardView from './views/DashboardView';
import ListCarWizard from './views/ListCarWizard';
import TrustView from './views/TrustView';
import AuthView from './views/AuthView';
import AdminView from './views/AdminView';
import SplashView from './views/SplashView';
import LandingView from './views/LandingView';
import BottomNav from './components/BottomNav';
import { User } from './types';
import { MOCK_USERS } from './constants';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showLanding, setShowLanding] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // 1. Check if user is already "logged in"
    const savedUserId = localStorage.getItem('auto_user');
    
    // 2. Splash screen duration
    const timer = setTimeout(() => {
      setShowSplash(false);
      if (savedUserId) {
        setCurrentUser(MOCK_USERS[savedUserId]);
      } else {
        setShowLanding(true);
      }
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setShowLanding(false);
  };

  const handleLogin = (id: string) => {
    localStorage.setItem('auto_user', id);
    setCurrentUser(MOCK_USERS[id]);
  };

  const handleLogout = () => {
    localStorage.removeItem('auto_user');
    setCurrentUser(null);
    setShowLanding(true);
  };

  if (showSplash) {
    return <SplashView />;
  }

  if (showLanding) {
    return <LandingView onGetStarted={handleStart} />;
  }

  if (!currentUser) {
    return <AuthView onLogin={handleLogin} onBack={() => setShowLanding(true)} />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen max-w-lg mx-auto bg-background-light dark:bg-background-dark relative shadow-2xl">
        <main className="flex-1 overflow-y-auto">
          <Routes>
            {/* Common Routes */}
            <Route path="/car/:id" element={<CarDetailView />} />
            <Route path="/trust/:userId" element={<TrustView onLogout={handleLogout} />} />

            {/* Role-Specific Routes */}
            {currentUser.role === 'renter' && (
              <>
                <Route path="/" element={<HomeView user={currentUser} />} />
                <Route path="/book/:id" element={<BookingView />} />
                <Route path="/trips" element={<div className="p-8">My Trips View</div>} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}

            {currentUser.role === 'owner' && (
              <>
                <Route path="/" element={<DashboardView user={currentUser} />} />
                <Route path="/list-car" element={<ListCarWizard />} />
                <Route path="/listings" element={<div className="p-8">My Listings View</div>} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}

            {currentUser.role === 'admin' && (
              <>
                <Route path="/" element={<AdminView user={currentUser} />} />
                <Route path="/system" element={<div className="p-8">System Logs</div>} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </main>
        
        <BottomNav userRole={currentUser.role} />
      </div>
    </Router>
  );
};

export default App;
