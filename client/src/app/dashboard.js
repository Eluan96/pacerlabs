import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/authSlice';
import LogoutButton from '../components/LogoutButton';

const Dashboard = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    // You may want to use Next.js's useRouter to handle redirection
    return <p>Please log in to access the dashboard.</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <LogoutButton />
    </div>
  );
};

export default Dashboard;
