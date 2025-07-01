import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt=""/> 
            <ul className="nav-menu">
                <li>About Me</li>
                <li>Educational Background</li> 
                <li>Current Projects/Achievements</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navbar