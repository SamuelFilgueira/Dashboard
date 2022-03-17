import './Sidebar.css';
import logo from '../../assets/logo.png';

const Sidebar = ({sidebarOpen, closeSidebar})=>{

    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id='sidebar'>
            <div className='sidebar-title'>
                <div className='sidebar-img'>
                    <img src={logo}></img>
                    <h1>User</h1>
                </div>
                <i className='fa fa-times' id='sidebarIcon' onClick={() => {closeSidebar()}}></i>
            </div>

            <div className='sidebar-menu'>
                <div className='sidebar-link active-menu-link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Dashboard</a>
                </div>
                <h2>ADM</h2>
        <div className="sidebar-link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="#">Gerenciar</a>
        </div>
        <div className="sidebar-link">
          <i className="fa fa-building-o"></i>
          <a href="#">Gestão de campanhas</a>
        </div>
        <div className="sidebar-link">
          <i className="fa fa-wrench"></i>
          <a href="#">Ferramentas</a>
        </div>
        <div className="sidebar-link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Parcerias</a>
        </div>
        <h2>AJUDA</h2>
        <div className="sidebar-link">
          <i className="fa fa-question"></i>
          <a href="#">Dúvidas</a>
        </div>
        <div className="sidebar-link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">Programado</a>
        </div>
        <div className="sidebar-link">
          <i className="fa fa-files-o"></i>
          <a href="#">Arquivos</a>
        </div>
        <h2>PAGAMENTOS</h2>
        <div className="sidebar-link">
          <i className="fa fa-money"></i>
          <a href="#">Receita</a>
        </div>
        <div className="sidebar-logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
            </div>

        </div>
    )


}

export default Sidebar;