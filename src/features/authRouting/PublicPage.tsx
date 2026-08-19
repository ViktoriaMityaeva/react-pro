import { Link } from 'react-router-dom';

export function PublicPage() {
  return (
    <div>
      <h1>Публичная страница</h1>
      <p>Эта страница доступна без авторизации.</p>
      <nav>
        <Link to="/login">Войти</Link>
        {' · '}
        <Link to="/profile">Профиль</Link>
      </nav>
    </div>
  );
}
