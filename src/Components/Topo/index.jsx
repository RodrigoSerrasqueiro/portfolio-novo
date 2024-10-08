import {useState} from "react";

import './topo.css';

export default function Topo() {
    const [ativar, setAtivar] = useState("nav-list");
        const navList = () => {
            ativar === 'nav-list' ? setAtivar('nav-list nav-active') : setAtivar("nav-list");
        }

    return (
        <header className='header'>
            <div className='limitar-secao navbar'>
                <div className='nome-topo'>
                    <a className='link-nome' href='#home'><h1>Rodrigo<span>.dev</span></h1></a>
                </div>
                <nav>
                    <div className="mobile-menu" onClick={navList}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                    </div>
                    
                    <div className={ativar}>
                        <a href='#home' onClick={() => setAtivar("nav-list")} className='link-topo link-home' to="/" >Home</a>
                        <a href='#sobre' onClick={() => setAtivar("nav-list")} className='link-topo' to="/Sobre">Sobre</a>
                        <a href='#skills' onClick={() => setAtivar("nav-list")} className='link-topo' to="/Skills">Skills</a>
                        <a href='#projetos' onClick={() => setAtivar("nav-list")} className='link-topo' to="/Projetos">Projetos</a>
                        {/* <a href='#contato' className='link-topo' to="/Projetos">Contato</a> */}
                        <a href='#certificados' onClick={() => setAtivar("nav-list")} className='link-topo' to="/Certificados">Certificados</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}