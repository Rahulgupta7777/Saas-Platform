import './nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>Brand</div>
            <ul className="nav-links">
                <li className="nav-item">Home</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Pricing</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;