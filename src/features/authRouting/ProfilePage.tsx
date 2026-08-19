import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

const API_BASE = 'https://api.v2.react-learning.ru';

type UserMe = {
  name?: string;
  email?: string;
  [key: string]: unknown;
};

export function ProfilePage() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserMe | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(`${API_BASE}/users/me`, {
          headers: {
            Authorization: `${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Не удалось загрузить профиль');
        }

        const data = (await res.json()) as UserMe;
        if (!cancelled) setUser(data);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Ошибка загрузки');
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div>
      <h1>Профиль</h1>
      {error && <p>{error}</p>}
      {user ? (
        <p>Имя: {user.name ?? user.email ?? '—'}</p>
      ) : (
        !error && <p>Загрузка…</p>
      )}
      <button type="button" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
}
