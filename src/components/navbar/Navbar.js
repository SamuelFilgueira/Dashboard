import './Navbar.css';
import avatar from '../../assets/avatar.svg';

// importando as funções sidebarOpen and openSidebar do meu app.
const Navbar = ({sidebarOpen, openSidebar}) =>{

    return (
        <nav className='navbar'>
            <div className='nav-icon' onClick={()=>{openSidebar()}}> {/* Ao clicar no ícone será chamada a função que irá abrir minha sidebar */}
                <i className='fa fa-bars'></i>
            </div>
            <div className='navbar-left'>
                <a href='#'>Inscritos</a>
                <a href='#'>Gerenciador de videos</a>
                <a className='active-link' href='#'>Admin</a>
            </div>
            <div className='navbar-right'>
                <a href='#'>
                    <i className='fa fa-search'></i>
                </a>
                <a href='#'>
                    <img width='30px' src={avatar}></img>
                </a>
            </div>
        </nav>
    )



};

export default Navbar;