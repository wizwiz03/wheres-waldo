import { NavbarCont } from './styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarCont>
      <div className='logo'>Where's Waldo</div>
      <Link to='/'>Home</Link>
      <Link to='/leaderboard'>Leaderboard</Link>
    </NavbarCont>
  );
}

export default Navbar;