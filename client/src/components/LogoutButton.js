import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
