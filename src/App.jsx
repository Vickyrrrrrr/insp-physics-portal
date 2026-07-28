import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PackagesPage from './pages/PackagesPage';
import VideoPortalPage from './pages/VideoPortalPage';
import ForumPage from './pages/ForumPage';
import LeaderboardPage from './pages/LeaderboardPage';
import MerchandisePage from './pages/MerchandisePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  const [page, setPage] = useState('home');
  const [theme, setTheme] = useState('v1'); // 'v1' (Obsidian) | 'v2' (INSP Cobalt)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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

  const fullscreenPages = ['login'];
  const isFullscreen = fullscreenPages.includes(page);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--c-bg)' }}>
      <Nav activePage={page} setPage={setPageAndScroll} />

      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      {!isFullscreen && <Footer setPage={setPageAndScroll} />}

      {/* Floating Aesthetic Theme Control Pill (Bottom Right) */}
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </div>
  );
}
