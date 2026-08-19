import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { ProfilePage } from './ProfilePage';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicPage } from './PublicPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/public" element={<PublicPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
