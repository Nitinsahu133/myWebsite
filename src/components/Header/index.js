import { Component } from 'react'
import { Link } from 'react-router-dom'
import rdiplLogo from '../../assests/rdiplLogo.png'
import './index.css'


const navbarMenu = [
    { id: 0, menuName: "HOME", src: "/" },
    { id: 1, menuName: "ABOUT", src: "/about" },
    { id: 2, menuName: "PROJECTS", src: "/projects" },
    { id: 3, menuName: "CAREER", src: "/career" },
    { id: 4, menuName: "CONTACT US", src: "/contact-us" },
]



class Header extends Component {
    state = {}

    render() {
        return (
            <header className='header'>
                <div>
                    <Link to="/"><img className='website-logo' src={rdiplLogo} alt="" /></Link>
                </div>
                <ul className='header-menu-ul'>
                    {
                        navbarMenu.map(eachMenu => (
                            <Link className="link-component" key={eachMenu.id} to={eachMenu.src}>
                                <li className='nav-menu-item'>{eachMenu.menuName}</li>
                            </Link>)
                        )
                    }
                </ul>
            </header>
        )
    }
}

export default Header