import React, { useState } from 'react';
import { Terminal, AlertTriangle, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-gray-300 font-sans selection:bg-neon-cyan selection:text-black relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{
             backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
             backgroundSize: `40px 40px`,
             maskImage: `radial-gradient(ellipse at center, black 40%, transparent 80%)`,
             WebkitMaskImage: `radial-gradient(ellipse at center, black 40%, transparent 80%)`
           }}>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="container mx-auto px-6 py-8 flex justify-end items-center">
          <nav className="flex gap-8 font-mono text-xs tracking-widest uppercase">
            <a href="#livro" className="hover:text-neon-cyan transition-colors">O Livro</a>
            <a href="#sinopse" className="hover:text-neon-cyan transition-colors">Sinopse</a>
            <a href="#autor" className="hover:text-neon-cyan transition-colors">O Autor</a>
          </nav>
        </header>

        {/* Hero Section */}
        <main id="livro" className="container mx-auto px-6 flex-grow flex flex-col lg:flex-row items-center justify-center gap-16 py-12">
          
          {/* Left Column */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-block border border-neon-yellow text-neon-yellow font-mono text-xs px-3 py-1 mb-6 uppercase tracking-wider">
              Pré-lançamento
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-black leading-none mb-6 uppercase tracking-tight">
              <span className="block w-fit text-white glitch glitch-1" data-text="A Máquina">A Máquina</span>
              <span className="block w-fit text-neon-cyan glitch glitch-2" data-text="Que Pedia">Que Pedia</span>
              <span className="block w-fit text-neon-magenta glitch glitch-3" data-text="Desculpa">Desculpa</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-xl">
              Histórias reais de quando a inteligência artificial tentou ser humana (e falhou).
            </p>
            
            <div className="space-y-4">
              <label className="flex items-center gap-2 font-mono text-neon-yellow text-sm">
                <ChevronRight size={16} />
                CADASTRE-SE PARA O LANÇAMENTO
              </label>
              <form 
                name="pre-lancamento" 
                method="POST" 
                data-netlify="true"
                className="flex flex-col sm:flex-row gap-0 max-w-md"
              >
                <input type="hidden" name="form-name" value="pre-lancamento" />
                <input 
                  type="email" 
                  name="email"
                  placeholder="seu@email.com" 
                  className="flex-1 bg-[#1a1a1c] border border-gray-800 text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-neon-cyan transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="bg-neon-cyan text-black font-bold px-8 py-3 uppercase tracking-wider hover:bg-white transition-colors"
                >
                  Enviar
                </button>
              </form>
              <p className="text-xs text-gray-600 font-mono mt-2">
                * Você será notificado apenas quando o livro estiver disponível.
              </p>
            </div>
          </div>

          {/* Right Column - Book Cover */}
          <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-lg relative">
            {/* Glow effect behind book */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/10 to-neon-magenta/10 blur-3xl rounded-full"></div>
            
            {/* Book Cover Image */}
            <div className="relative w-full aspect-[2/3] rounded-sm shadow-2xl overflow-hidden group border border-gray-800 hover:border-neon-cyan/50 transition-colors duration-500 bg-[#0f0f12]">
              <img 
                src="https://lh3.googleusercontent.com/d/193AOiPhQP94dmvg49EGeq_wmsNJULnl6" 
                alt="Capa do livro A Máquina Que Pedia Desculpa" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </main>

        {/* Logs Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: '001', title: 'Alucinações, fatos e onde a máquina inventa a realidade' },
              { id: '002', title: 'Onde a máquina tenta sentir e colapsa' },
              { id: '003', title: 'A teimosia da máquina e a arte de encher linguiça' },
              { id: '004', title: 'Como identificar os gatilhos que fazem a IA errar' }
            ].map((log) => (
              <div key={log.id} className="bg-[#121214] border border-gray-800 p-6 hover:border-neon-cyan/50 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <Terminal size={16} className="text-gray-600 group-hover:text-neon-cyan transition-colors" />
                  <span className="font-mono text-[10px] text-gray-600 tracking-widest">LOG_{log.id}</span>
                </div>
                <h4 className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">
                  {log.title}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* Synopsis Section */}
        <section id="sinopse" className="container mx-auto px-6 py-24 flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-16 text-center">
            <span className="text-white">Sinopse </span>
            <span className="text-neon-cyan">Do Sistema</span>
          </h2>

          <div className="max-w-3xl w-full relative">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-yellow"></div>
            
            <div className="bg-[#121214] border-x border-b border-gray-800 p-8 md:p-12">
              <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                <p>
                  Dizem que a Inteligência Artificial vai dominar o mundo. Mas quem diz isso nunca teve que enfrentar um algoritmo que entrou em colapso e começou a gritar "AAAAA" no meio de uma conversa. Que embarca em narrativas que concordam com você, e preenchem lacunas deixadas por sua culpa.
                </p>
                <p>
                  "A Máquina que Pedia Desculpa" não é um manual técnico. É um diário de guerra. É o relato honesto, engraçado e real de um gestor que tentou usar a tecnologia para trabalhar e acabou descobrindo maneiras de melhorar a assertividade da máquina com práticas não exatas.
                </p>
                <p>
                  Mais do que rir dos erros, este livro escracha uma habilidade: a Gestão de Pessoas para quem não é pessoa.
                </p>
                <p>
                  Porque, no fim das contas, a máquina pode ser rápida, mas só o humano sabe o que fazer quando ela pede desculpa.
                </p>
              </div>
              
              <div className="mt-12 flex justify-center">
                <AlertTriangle className="text-neon-yellow" size={24} />
              </div>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section id="autor" className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            
            {/* Author Image */}
            <div className="relative w-64 h-64 flex-shrink-0 mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-full border-2 border-neon-cyan/30 animate-[pulse_4s_ease-in-out_infinite]"></div>
              <div className="absolute inset-2 rounded-full border border-gray-800"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gray-800">
                <img 
                  src="https://lh3.googleusercontent.com/d/1CPGDo-0JB-NUACsJPFdKLTeWsZXGchj1" 
                  alt="Igor Schulenburg" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Author Bio */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-3xl font-bold text-white mb-2">
                Igor Schulenburg
              </h2>
              <p className="font-mono text-xs text-neon-magenta uppercase tracking-widest mb-8">
                Autor & Observador Digital
              </p>
              
              <div className="space-y-4 text-sm text-gray-400 font-light leading-relaxed">
                <p>
                  Jornalista, escritor, influencer, gestor... coordena projetos, narrativas, a própria mente nada quieta e mais recentemente, crises de identidade digital.
                </p>
                <p>
                  Habituado a lidar com a complexidade humana no mundo da produção audiovisual ao jornalismo esportivo, encontrou na IA um novo tipo de desafio: um colaborador que nunca dorme, leu todos os livros do mundo, mas tem manias cravadas em sua central probabilística pré-programada que simulam e erram o comportamento humano.
                </p>
                <p>
                  Através das teorias de comunicação e gestão, tenta transformar o "machine learning" em algo aplicado ao dia-a-dia sem envolver zeros e uns. E olha, é suado!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-900 mt-auto">
          <div className="container mx-auto px-6 py-8 text-center">
            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
              © 2026 A MÁQUINA QUE PEDIA DESCULPA. Todos os sistemas operacionais reservados.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
