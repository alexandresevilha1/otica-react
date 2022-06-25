import './Sobre.css'

export default function Topo() {
    return (
        <main className='Sobre' id="sobre">
            <section  className='limitar-secao'>

                <h2>Quem somos nós?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades foacda no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            
                <div className='quadro'>
                    
                        <img src="assets/loja.png" alt="imagem loja"/>
                    
                    <div className='texto'>
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    
                    <div className='texto'>
                        <h3>ATENDIMENTO FLEXIVEL</h3>
                        <p>Nossa equipe possui treinamento para te atender</p>
                    </div>

                        <img src="assets/atendimento.png" alt="imagem loja"/>
                    
                </div>
            </section>
        </main>
    )
}