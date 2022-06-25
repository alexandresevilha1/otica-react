import './Topo.css'

export default function Topo() {
    return (
        <header className='topo'>
            <section>
                <div>
                    <img src="assets/logo.png" alt="logo da pagina" />
                </div>
                <div>
                    <nav>
                        <a href="#produto">PRODUTO</a>
                        <a href="#sobre">SOBRE</a>
                        <a href="#contato">CONTATO</a>
                    </nav>
                </div>
            </section>
        </header>
    )
}