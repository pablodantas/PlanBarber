import Header from '../../components/header';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {

  const service = [ [], [], []]

  return (
    <>
      <Header />
      <section className='home_sec'>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className='title'>SEJA BEM VINDO, ESTILOSO!</h1>
              <p className='mt-4 comunity_paragraph'>Junte-se a comunidade dos homens mais estilosos da cidade!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="card_sec">
        <div className="container">
          <div className="row justify-content-center flex-column flex-md-row">
            {service.map((value) => (
              <div className="col card_monthly" key={value}>
                <div className="card best_card">
                  <div className="best_saller text-center">
                    <p className="m-0">Mais vendido</p>
                  </div>
                  <div className="padding_card">
                    <h3 className="card_title">Black - (Corte + barba)</h3>
                    <small>A partir de</small>
                    <h3 className="price">R$ 119,00 <span>/ Mês</span></h3>
                    <small>Feito para homens, que não aceitam menos que o IMPECÁVEL!</small>
                  </div>
                  <hr className="border_card" />
                  <div>
                    <ul>
                      <li className="item_list">
                        <span className="icon_veri me-2">
                          <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                          </svg>
                        </span> Corte ilimitado
                      </li>
                      <li className="item_list">
                        <span className="icon_veri me-2">
                          <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                          </svg>
                        </span> Corte ilimitado
                      </li>
                      <li className="item_list">
                        <span className="icon_veri me-2">
                          <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                          </svg>
                        </span> Corte ilimitado
                      </li>
                      <li className="item_list">
                        <span className="icon_veri me-2">
                          <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                          </svg>
                        </span> Corte ilimitado
                      </li>
                      <li className="item_list">
                        <span className="icon_veri me-2">
                          <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                          </svg>
                        </span> Corte ilimitado
                      </li>
                      <li className="item_list">
                        <span className="icon_veri me-2">
                          <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                          </svg>
                        </span> Corte ilimitado
                      </li>
                    </ul>
                  </div>
                  <hr className="border_card" />
                  <div className="button_space d-flex justify-content-center">
                    <a href='/black' className='btn btn-primary btn-block btn-large'>
                      Clique e assine
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
