import './contato.css'

export default function SecaoContato() {
    return (
        <main  id="contato" className='contato'>
            <div className='limitar-secao'>
                <h3>FALE CONOSCO</h3>
                <p>Não perca tempo, venha conhecer uma das nossas lojas ou entre em conato através de nossas redes sociais ou da central de atendimento.</p>

                <div className='lista'>
                    <div>
                        <h4>Contato</h4>
                            <div className='click'>
                                <img src="assets/local.png" alt='local'/>
                                <p>Nova Iguaçu, RJ</p>
                            </div>
                            <div className='click'>
                                <img src="assets/telefone.png" alt='telefone'/>
                                <p>Nova Iguaçu, RJ</p>
                            </div>
                            <div className='click'>
                                <img src="assets/email.png" alt='email'/>
                                <p>contato@oticavida.com</p>
                            </div>
                    </div>
                    <div>
                        <h4>Nossas Redes Sociais</h4>
                        <div className='click'>
                                <img src="assets/fb.png" alt='facebook'/>
                                <p>/OticaVisao</p>
                            </div>
                            <div className='click'>
                                <img src="assets/ig.png" alt='instagram'/>
                                <p>@oticavidarj</p>
                            </div>
                            <div className='click'>
                                <img src="assets/tt.png" alt='twitter'/>
                                <p>@oticavidarj</p>
                            </div>
                    </div>
                </div>
            </div>
        </main>
    )
}