import './Produtos.css'

export default function SecaoProdutos() {
    return (
        <main className="produtos">
            <section id="produto">
                <h2>Nossos Produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino,feminimo e infantil.</p>
                <p>Todos os nossos preços são acessiveis e cotam com a melhor qualidade do mercado.</p>

                <div className='cards'>
                    <div>
                        <h3>Óculos de grau</h3>
                        <img src="assets/oculos01.png" alt="imagem de oculos"/>
                        <p>R$ 500,00</p>
                    </div>
                    <div>
                        <h3>Óculos transition</h3>
                        <img src="assets/oculos02.png" alt="imagem de oculos"/>
                        <p>R$ 750,00</p>
                    </div>
                    <div>
                        <h3>Óculos de sol</h3>
                        <img src="assets/oculos03.png" alt="imagem de oculos"/>
                        <p>R$ 700,00</p>
                    </div>
                    <div>
                        <h3>Óculos infantil</h3>
                        <img src="assets/oculos04.png" alt="imagem de oculos"/>
                        <p>R$ 500,00</p>
                    </div>
                </div>

                <p>Todos os nossos produtos incluem:</p>

                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </section>
        </main>
    )
}