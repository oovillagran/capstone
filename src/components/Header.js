import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import MicIcon from '../assets/mic.png';
import GearIcon from '../assets/gear.png';
import '../styles/Header.css';

export default function Header() {
  return (
    <>
      <div className="header flex">
        <div className="brand flex">
          <img src={logo} alt="Logo" className="logo icon" width="5%" />
          <NavLink className="brand-name" to="/">Movie&apos;s Time</NavLink>
        </div>
        <img className="icon" src={MicIcon} alt="icon" />
        <img className="icon" src={GearIcon} alt="icon" />
      </div>
      <hr className="body-hr" />
    </>
  );
}
