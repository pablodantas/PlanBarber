
export default function Form() {
    return (
        <>
            <form>

                <div className="bg-white mb-26">
                    <div className="payment_bg">
                        <div className="bg_orange p-1">
                            <h4 className="title_form">Tipo de Pagamento</h4>
                        </div>
                        <div className="p-3">
                            <input type="radio" name="pay" value="card" className="inp_margin" />
                            <label>Cartão</label>
                            <input type="radio" name="pay" value="money" className="inp_margin" />
                            <label>Pix/Boleto</label>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white pb-5">
                    <div className="bg_orange p-1">
                        <h4 className="title_form">informe seus dados</h4>
                    </div>
                    <div className="mb-3">
                        <p className="form_p mt-2">Tipo de cadastro <span className="important">*</span></p>
                        <input type="radio" name="type" value="fisica" className="inp_margin" /> Pessoa física
                        <input type="radio" name="type" value="juridica" className="inp_margin" /> Pessoa jurídica
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="form_p ">CPF <span className="important">*</span></p>
                            <input type="text" className="inp_text" />
                        </div>
                        <div className="col">
                            <p className="form_p ">Nome <span className="important">*</span></p>
                            <input type="text" className="inp_text" />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <div className="col-6">
                                <p className="form_p  mt-2">Email <span className="important">*</span></p>
                                <input type="text" className="inp_text" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col">
                            <p className="form_p">Telefone</p>
                            <input type="text" className="inp_text" />
                        </div>
                        <div className="col">
                            <p className="form_p">Celular <span className="important">*</span></p>
                            <input type="text" className="inp_text" />
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="form_p_no-size ">Endereço</h4>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="form_p">Cep <span className="important">*</span></p>
                            <input type="text" className="inp_text" />
                        </div>
                        <div className="col">
                            <p className="form_p">Logradouro <span className="important">*</span></p>
                            <input type="text" className="inp_text" />
                        </div>
                        <div className="col">
                            <p className="form_p">Número <span className="important">*</span></p>
                            <input type="text" className="inp_text" />
                        </div>
                    </div>
                    <div className="row mb-4 flex-column flex-sm-row">
                        <div className="col">
                            <p className="form_p">Complemento</p>
                            <input type="text" className="inp_text" />
                        </div>
                        <div className="col">
                            <p className="form_p">Bairro <span className="important">*</span></p>
                            <input type="text" className="inp_text" />
                        </div>
                        <div className="col">
                            <p className="form_p">Cidade <span className="important">*</span></p>
                            <input type="text" className="inp_text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p className="form_p">Estado <span className="important">*</span></p>
                            <input type="text" className="inp_text" />
                        </div>
                    </div>
                    <div className="mt-5 btn_container">
                        <button className="btn btn-primary btn-block btn-large">Avançar</button>
                    </div>
                </div>
            </form>
        </>
    );
}