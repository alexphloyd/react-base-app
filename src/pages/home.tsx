import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();
  const handleRedirect = () => navigate('/settings');

  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={handleRedirect}>Go To Settings</button>
    </main>
  );
}
