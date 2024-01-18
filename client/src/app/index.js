import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/authSlice';
import LoginForm from '../components/LoginForm';
import LogoutButton from '../components/LogoutButton';

const Home = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return (
    <div>
      <h1>Next.js Redux Auth App</h1>
      {isAuthenticated ? (
        <>
          <p>Welcome to the dashboard!</p>
          <LogoutButton />
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Home;
