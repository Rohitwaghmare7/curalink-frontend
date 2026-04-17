import { Routes, Route, Navigate } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import NotFoundPage from './pages/NotFoundPage';
import Spinner from './components/common/Spinner';
import { useAuth } from './hooks/useAuth';

function App() {
  const { restoring } = useAuth();

  // Show a centred spinner while we validate the stored token
  if (restoring) {
    return (
      <div style={{
        height: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg)',
      }}>
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/"                element={<Navigate to="/chat" replace />} />
      <Route path="/chat"            element={<ChatPage />} />
      <Route path="/chat/:sessionId" element={<ChatPage />} />
      <Route path="/login"           element={<LoginPage />} />
      <Route path="/register"        element={<RegisterPage />} />
      <Route path="/auth/callback"   element={<AuthCallbackPage />} />
      <Route path="*"                element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
