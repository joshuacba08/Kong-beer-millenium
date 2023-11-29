import './Navbar.css'

const Navbar = () => {
  return (
    <header className='header'>
        <div className='header-container'>
            
            <img className='header-container__img' src="https://f.hubspotusercontent10.net/hub/20044066/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png" alt="logo" />    

            <nav className='header-container__nav'>
                <ul className='nav-container'>
                    <li className='nav-container__item'><a href="#">Inicio</a></li>
                    <li className='nav-container__item'><a href="#">Productos</a></li>
                    <li className='nav-container__item'><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar