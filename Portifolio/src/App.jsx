import React, { useState } from 'react';
import OptionWheel from './components/OptionWheel';
import MagicBento from './components/MagicBento';
import { 
  ShieldCheck, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  CheckCircle, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenPDF = () => {
    window.open('/Curriculo/Larissa_Moreira_Curriculo_ATS.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0c0e14] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      
      {/* HEADER / NAVBAR COM ASSINATURA NEOMÓRFICA */}
      <header className="sticky top-0 z-50 bg-[#0c0e14]/90 backdrop-blur-2xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
          
          {/* Logo & Marca Com Espaçamento Confortável */}
          <a href="#" className="flex items-center gap-4 group shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center font-black text-white text-base shadow-[5px_5px_12px_#07080b,-5px_-5px_12px_#1d2233] group-hover:scale-105 transition-all">
              LM
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-lg md:text-xl text-white tracking-tight leading-tight block">
                LARISSA MOREIRA
              </span>
              <span className="text-[11px] font-bold text-purple-400 tracking-wider uppercase block mt-0.5">
                SEGUROS & OPERAÇÕES
              </span>
            </div>
          </a>

          {/* Links de Navegação Estilo Neumorphism */}
          <nav className="hidden lg:flex items-center gap-2 p-1.5 neu-inset">
            <a href="#hero" className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              Início
            </a>
            <a href="#especialidades" className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              Especialidades
            </a>
            <a href="#bento" className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              Carreira
            </a>
            <a href="#experiencia" className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              Experiência
            </a>
            <a href="#curriculo" className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              Currículo
            </a>
          </nav>

          {/* Botões Neumórficos de Ação */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={handleOpenPDF}
              className="neu-button-primary px-5 py-3 text-xs md:text-sm flex items-center gap-2"
            >
              <Download size={17} />
              Baixar Currículo em PDF
            </button>
            <a
              href="https://wa.me/5512996543678"
              target="_blank"
              rel="noopener noreferrer"
              className="neu-button-emerald px-5 py-3 text-xs md:text-sm flex items-center gap-2"
            >
              <Phone size={17} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden neu-button p-3 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden neu-card mx-4 my-2 p-6 flex flex-col gap-3 text-sm font-bold">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-2 px-4 rounded-xl hover:bg-white/5">Início</a>
            <a href="#especialidades" onClick={() => setMobileMenuOpen(false)} className="py-2 px-4 rounded-xl hover:bg-white/5">Especialidades</a>
            <a href="#bento" onClick={() => setMobileMenuOpen(false)} className="py-2 px-4 rounded-xl hover:bg-white/5">Carreira</a>
            <a href="#experiencia" onClick={() => setMobileMenuOpen(false)} className="py-2 px-4 rounded-xl hover:bg-white/5">Experiência</a>
            <button
              onClick={() => { setMobileMenuOpen(false); handleOpenPDF(); }}
              className="neu-button-primary w-full py-3 mt-2 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Baixar Currículo em PDF
            </button>
          </div>
        )}
      </header>

      {/* ÁREA PRINCIPAL COM LEITURA CONFORTÁVEL & NEUMORPHISM */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-10 py-12 md:py-16 space-y-16">
        
        {/* HERO HEADER SECTION (EXECUTIVE CARD WITHOUT SLIDER IMAGE) */}
        <section id="hero">
          <div className="neu-card p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight pt-2">
                Larissa Moreira de Oliveira
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                Profissional de Seguros e Operações com domínio em gestão de backoffice, cotações multi-ramo, regulação de sinistros e análise estratégica em Excel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href="mailto:larimoreira012@gmail.com"
                className="neu-button px-5 py-3 text-xs md:text-sm flex items-center justify-center gap-2 text-slate-200"
              >
                <Mail size={16} className="text-purple-400" />
                larimoreira012@gmail.com
              </a>
              <div className="neu-inset px-4 py-3 text-xs text-slate-300 font-semibold flex items-center justify-center gap-1.5">
                <MapPin size={16} className="text-purple-400" /> São Paulo / Vale do Paraíba
              </div>
            </div>
          </div>
        </section>

        {/* OPTION WHEEL SECTION */}
        <section id="especialidades" className="pt-2">
          <OptionWheel />
        </section>

        {/* MAGIC BENTO GRID SECTION */}
        <section id="bento" className="pt-2">
          <MagicBento
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
            disableAnimations={false}
          />
        </section>

        {/* EXPERIENCE TIMELINE SECTION */}
        <section id="experiencia" className="neu-card p-8 md:p-14 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Histórico de Atuação em Seguros
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Experiência operacional sólida no mercado corretor de seguros, com foco em eficiência, retenção e satisfação do segurado.
            </p>
          </div>

          <div className="relative border-l-2 border-purple-800/40 space-y-12 pl-6 md:pl-10 max-w-4xl mx-auto">
            
            {/* Timeline Item 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-2 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#0c0e14] shadow-[0_0_12px_rgba(168,85,247,0.8)] group-hover:scale-125 transition-transform" />
              <div className="neu-card p-6 md:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Auxiliar de Escritório Operacional – Seguros de Vida</h3>
                    <span className="text-sm font-bold text-purple-400 block mt-1">C.I.A Empório Seguros Corretora e Aux.</span>
                  </div>
                  <span className="neu-inset px-4 py-1.5 text-xs font-bold text-slate-300 w-fit">
                    Mar 2026 – Jun 2026
                  </span>
                </div>
                <ul className="space-y-3 text-slate-300 text-sm md:text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-purple-400 shrink-0 mt-1" />
                    <span>Atuação operacional estratégica nos ramos de <strong>Seguro de Vida Individual e Empresarial (PME)</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-purple-400 shrink-0 mt-1" />
                    <span>Execução de cálculos de prêmio, emissão de apólices, movimentações cadastrais de vidas e faturamento corporativo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-purple-400 shrink-0 mt-1" />
                    <span>Abertura, acompanhamento e regulação operacional de sinistros junto a seguradoras.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-2 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#0c0e14] shadow-[0_0_12px_rgba(168,85,247,0.8)] group-hover:scale-125 transition-transform" />
              <div className="neu-card p-6 md:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Auxiliar de Escritório Operacional – Auto & Ramos Elementares</h3>
                    <span className="text-sm font-bold text-purple-400 block mt-1">UYARA SEGUROS CORRETORA E ADM</span>
                  </div>
                  <span className="neu-inset px-4 py-1.5 text-xs font-bold text-slate-300 w-fit">
                    Jun 2024 – Dez 2025
                  </span>
                </div>
                <ul className="space-y-3 text-slate-300 text-sm md:text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-purple-400 shrink-0 mt-1" />
                    <span>Operacionalização de apólices nos segmentos de <strong>Seguros Auto e Ramos Elementares</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-purple-400 shrink-0 mt-1" />
                    <span>Processamento de endossos, transmissão de propostas e atendimento emergencial a segurados para acionamento de assistência 24h (guincho, socorro mecânico, reparos).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-2 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#0c0e14] shadow-[0_0_12px_rgba(168,85,247,0.8)] group-hover:scale-125 transition-transform" />
              <div className="neu-card p-6 md:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Atendente de Atendimento e Operações</h3>
                    <span className="text-sm font-bold text-purple-400 block mt-1">A.C.F. Lourenço</span>
                  </div>
                  <span className="neu-inset px-4 py-1.5 text-xs font-bold text-slate-300 w-fit">
                    Dez 2020 – Mar 2022
                  </span>
                </div>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Atendimento direto ao cliente, esclarecimento de dúvidas sobre produtos, controle de estoque e manutenção de rotinas administrativas da loja.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CURRICULO PDF SECTION */}
        <section id="curriculo" className="neu-card p-10 md:p-16 text-center space-y-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center mx-auto border border-purple-500/30 neu-inset">
            <FileText size={36} />
          </div>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Baixar Currículo em PDF
            </h2>
          </div>
          <div className="pt-2 flex justify-center">
            <button
              onClick={handleOpenPDF}
              className="neu-button-primary px-8 py-4 text-sm font-extrabold flex items-center gap-3 text-white shadow-xl hover:scale-105"
            >
              <Download size={20} />
              Baixar Currículo em PDF
            </button>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0a0c11] py-12 text-sm text-slate-400 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-600 text-white font-black flex items-center justify-center text-xs shadow-md">
              LM
            </div>
            <span className="font-medium text-slate-300">© 2026 Larissa Moreira de Oliveira - Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-8 font-semibold text-slate-300">
            <a href="mailto:larimoreira012@gmail.com" className="hover:text-purple-400 transition-colors">E-mail</a>
            <a href="https://wa.me/5512996543678" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">WhatsApp</a>
            <a href="/Curriculo/index.html" target="_blank" className="hover:text-purple-400 transition-colors">Currículo PDF</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
