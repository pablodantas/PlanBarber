import Form from "../form/form";


const Card = () => {
    return (
        <>
            <div className="row pt-5 flex-column flex-md-row">
                <div className="col card_monthly width_col p-5">                  
                        <div className="card best_card">
                            <div className="best_saller text-center">
                                <p className="m-0">Mais vendido</p>
                            </div>
                            <div className="padding_card">
                                <h3 className="card_title">Black - (Corte + barba)</h3>
                                <small>A partir de</small>
                                <h3 className="price">R$ 119,00 <span>/ Mês</span></h3>
                                <a href="#" className="link_payment">mais formas de pagamento</a>
                            </div>
                            <hr className="border_card" />
                            <div>
                                <ul>
                                    <li className="item_list mb-0">
                                        <span className="icon_veri me-2">
                                            <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                                            </svg>
                                        </span> Corte ilimitado
                                    </li>
                                    <li className="item_list mb-0">
                                        <span className="icon_veri me-2">
                                            <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                                            </svg>
                                        </span> Corte ilimitado
                                    </li>
                                    <li className="item_list mb-0">
                                        <span className="icon_veri me-2">
                                            <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                                            </svg>
                                        </span> Corte ilimitado
                                    </li>
                                    <li className="item_list mb-0">
                                        <span className="icon_veri me-2">
                                            <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                                            </svg>
                                        </span> Corte ilimitado
                                    </li>
                                    <li className="item_list mb-0">
                                        <span className="icon_veri me-2">
                                            <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                                            </svg>
                                        </span> Corte ilimitado
                                    </li>
                                    <li className="item_list mb-0">
                                        <span className="icon_veri me-2">
                                            <svg width="10" height="10" viewBox="0 0 522 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 196.5L107.5 305.5L213.5 414.5L522 75.5L503.5 25L440.5 0L205.5 224L86 110.5L28 135.5L0 196.5Z" fill="#F6B207" />
                                            </svg>
                                        </span> Corte ilimitado
                                    </li>
                                </ul>
                            </div>
                            <p className="ms-3">Plano selecionado para compra</p>
                        </div>
                </div>
                <div className="col pt-5">
                    <Form />
                </div>
            </div>
        </>
    );
}
export default Card;