import { useNavigate } from 'react-router';

export default function AccessDenied() {
  const navigate = useNavigate();
  const handleRedirect = () => navigate('/');

  return (
    <main>
      <h2>Access Denied</h2>
      <button onClick={handleRedirect}>Back Home</button>
    </main>
  );
}
