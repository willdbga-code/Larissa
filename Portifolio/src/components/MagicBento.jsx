import React, { useState, useRef } from 'react';
import { Shield, Sparkles, FileText, Download, Award, Briefcase, Zap, CheckCircle, TrendingUp, Laptop } from 'lucide-react';
import confetti from 'canvas-confetti';

const MagicBento = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = true,
  spotlightRadius = 400,
  particleCount = 12,
  glowColor = '132, 0, 255',
  disableAnimations = false,
}) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!enableSpotlight || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleClick = (e) => {
    if (clickEffect) {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ['#8400ff', '#a855f7', '#38bdf8'],
      });
    }
  };

  const triggerPDFDownload = () => {
    window.open('/Curriculo/Larissa_Moreira_Curriculo_ATS.pdf', '_blank');
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className="relative w-full rounded-3xl p-6 md:p-10 bg-slate-950/90 border border-purple-900/30 overflow-hidden shadow-2xl"
      style={{
        '--glow-rgb': glowColor,
      }}
    >
      {/* Background Star Particles */}
      {enableStars && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: particleCount }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/60 rounded-full animate-ping"
              style={{
                top: `${(i * 17 + 7) % 100}%`,
                left: `${(i * 23 + 13) % 100}%`,
                animationDuration: `${2 + (i % 4)}s`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Mouse Spotlight Overlay */}
      {enableSpotlight && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(${spotlightRadius}px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glowColor}, 0.15), transparent 80%)`,
          }}
        />
      )}

      {/* Section Header */}
      <div className="relative z-20 text-center max-w-2xl mx-auto mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-purple-500/30">
          <Sparkles size={14} className="text-purple-400" />
          Destaques de Carreira
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Destaques de Carreira & Capacidades
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-2">
          Visão holística das competências, sistemas de seguros, ferramentas e entregas de valor.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Card 1: Main Expertise (Col span 7) */}
        <div
          className={`group relative rounded-2xl p-6 md:p-8 bg-slate-900/80 border transition-all duration-300 flex flex-col justify-between md:col-span-7 ${
            enableBorderGlow ? 'border-purple-500/30 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20' : 'border-slate-800'
          }`}
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <Briefcase size={26} />
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Backoffice & Seguros
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Atuação em Operações & Corretoras de Seguros
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Vivência em regulação e acompanhamento operacional dos segmentos de <strong>Seguros Auto, Ramos Elementares e Vida (Individual e PME)</strong>. Domínio na elaboração de cálculos, transmissão de propostas e faturamento.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
            {['Auto', 'Vida Individual/PME', 'Ramos Elementares', 'Assistência 24h', 'Transmissão'].map((tag, i) => (
              <span key={i} className="text-xs font-medium bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Metrics & Retenção (Col span 5) */}
        <div
          className={`group relative rounded-2xl p-6 bg-slate-900/80 border transition-all duration-300 flex flex-col justify-between md:col-span-5 ${
            enableBorderGlow ? 'border-purple-500/30 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20' : 'border-slate-800'
          }`}
        >
          <div>
            <div className="p-3 w-fit rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 mb-4">
              <TrendingUp size={26} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Excelência no Pós-Venda e Retenção
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Suporte humanizado e ágil no momento de renovação e acionamento de apólices, elevando a satisfação do cliente e as taxas de renovação da corretora.
            </p>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Controle de Renovação</span>
            <span className="text-sm font-extrabold text-purple-400">100% Organizado</span>
          </div>
        </div>

        {/* Card 3: Download Currículo PDF ATS (Col span 4) */}
        <div
          className={`group relative rounded-2xl p-6 bg-gradient-to-br from-purple-900/40 via-slate-900 to-slate-950 border transition-all duration-300 md:col-span-4 flex flex-col justify-between ${
            enableBorderGlow ? 'border-purple-500/40 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/30' : 'border-slate-800'
          }`}
        >
          <div>
            <div className="p-3 w-fit rounded-xl bg-purple-500 text-white shadow-lg shadow-purple-500/50 mb-4">
              <FileText size={26} />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-2">
              Currículo Otimizado ATS
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
              Versão em PDF de padrão executivo e leitura 100% compatível com robôs de triagem (Gupy, Solides, Workday).
            </p>
          </div>
          <button
            onClick={triggerPDFDownload}
            className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-600/40 active:scale-95"
          >
            <Download size={18} />
            Baixar PDF Completo
          </button>
        </div>

        {/* Card 4: Excel & Ferramentas (Col span 4) */}
        <div
          className={`group relative rounded-2xl p-6 bg-slate-900/80 border transition-all duration-300 md:col-span-4 flex flex-col justify-between ${
            enableBorderGlow ? 'border-purple-500/30 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20' : 'border-slate-800'
          }`}
        >
          <div>
            <div className="p-3 w-fit rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 mb-4">
              <Laptop size={26} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Domínio em Excel & Dados
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
              Elaboração de comparativos técnicos entre seguradoras, controle de prazos de renovação, tabelas dinâmicas, filtros e fórmulas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
            <span className="bg-slate-950 p-2 rounded-md border border-slate-800 font-medium">✓ Comparativos</span>
            <span className="bg-slate-950 p-2 rounded-md border border-slate-800 font-medium">✓ Filtros & Fórmulas</span>
          </div>
        </div>

        {/* Card 5: Regulação & Sinistros (Col span 4) */}
        <div
          className={`group relative rounded-2xl p-6 bg-slate-900/80 border transition-all duration-300 md:col-span-4 flex flex-col justify-between ${
            enableBorderGlow ? 'border-purple-500/30 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20' : 'border-slate-800'
          }`}
        >
          <div>
            <div className="p-3 w-fit rounded-xl bg-sky-600/20 text-sky-400 border border-sky-500/30 mb-4">
              <Zap size={26} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Sinistros & Assistência 24h
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
              Abertura e regulação de sinistros, além de acionamento imediato de guinchos, socorro mecânico e reparos rápidos.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold bg-sky-950/40 p-2.5 rounded-lg border border-sky-900/50">
            <CheckCircle size={16} />
            <span>Acompanhamento até a liquidação</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MagicBento;
