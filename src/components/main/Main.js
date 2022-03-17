import './Main.css';
import hello from '../../assets/hello.svg';
import Chart from '../charts/Charts';


const Main = () => {
    return(
        <main>
            <div className='main-container'>
                <div className='main-title'>
                    <img src={hello}></img>
                    <div className='main-greeting'>
                        <h1>Olá User</h1>
                    </div>
                </div>

                <div className='main-cards'>
                    
                    <div className='card'>
                        <i className='fa fa-user-o fa-2x text-lightblue'></i>
                            <div className='card-inner'>
                                <p className='text-primary-p'>Assinantes</p>
                                <span className='font-bold text-number'>+578</span>
                            </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-clock-o fa-2x text-red" aria-hidden="true"></i>
                            <div className="card-inner">
                            <p className="text-primary-p">Tempo de exibição</p>
                            <span className="font-bold text-title">467H</span>
                        </div>
                  </div>
                  <div className='card'>
                      <i className='fa fa-video-camera fa-2x text-yellow'></i>
                      <div className='card-inner'>
                          <p className='text-primary-p'>Número de vídeos</p>
                          <span className='font-bold text-title'>102</span>
                      </div>
                  </div>
                  <div className='card'>
                      <i className='fa fa-thumbs-up fa-2x text-green'></i>
                      <div className='card-inner'>
                          <p className='text-primary-p'>Likes</p>
                          <span className='font-bold text-title'>6245</span>
                      </div>

                  </div>
                </div>

                <div className='charts'>
                    <div className='charts-left'>
                        <div className='charts-left-title'>
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i className='fa fa-usd'></i>
                        </div>
                        <Chart></Chart>
                    </div>
                    <div className='charts-right'>
                        <div className='charts-right-title'>
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <div className='charts-right-cards'>
                                <div className='card1'>
                                    <h1>Renda</h1>
                                    <p>$75,300</p>
                                </div>
                                <div className='card2'>
                                    <h1>Comentários</h1>
                                    <p>2432</p>
                                </div>
                                <div className='card3'>
                                    <h1>Usuários</h1>
                                    <p>3900</p>
                                </div>
                                <div className='card4'>
                                    <h1>Compartilhado</h1>
                                    <p>1881</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;