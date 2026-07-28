import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PackagesPage from './pages/PackagesPage';
import VideoPortalPage from './pages/VideoPortalPage';
import ForumPage from './pages/ForumPage';
import LeaderboardPage from './pages/LeaderboardPage';
import MerchandisePage from './pages/MerchandisePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'v2'; // INSP White & Royal Blue Light Mode
  }
  return 'v1'; // Obsidian Dark Mode
};

export default function App() {
  const [page, setPage] = useState('home');
  const [theme, setTheme] = useState(getSystemTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Listen for OS system theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? 'v1' : 'v2');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setPageAndScroll = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    const props = { setPage: setPageAndScroll, theme, setTheme };
    switch (page) {
      case 'home':        return <HomePage        {...props} />;
      case 'about':       return <AboutPage       {...props} />;
      case 'packages':    return <PackagesPage    {...props} />;
      case 'video':       return <VideoPortalPage {...props} />;
      case 'forum':       return <ForumPage       {...props} />;
      case 'leaderboard': return <LeaderboardPage {...props} />;
      case 'merch':       return <MerchandisePage {...props} />;
      case 'contact':     return <ContactPage     {...props} />;
      case 'login':       return <LoginPage       {...props} />;
      default:            return <HomePage        {...props} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--c-bg)', color: 'var(--c-text)' }}>
      <Nav activePage={page} setPage={setPageAndScroll} theme={theme} setTheme={setTheme} />
      {renderPage()}
      <Footer setPage={setPageAndScroll} />
    </div>
  );
}
