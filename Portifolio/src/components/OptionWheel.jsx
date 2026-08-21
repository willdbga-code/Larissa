import React, { useState } from 'react';
import { ShieldCheck, Car, HeartHandshake, FileSpreadsheet, Headset, CheckCircle2 } from 'lucide-react';

const optionsData = [
  {
    id: 'auto',
    title: 'Seguros Auto',
    icon: Car,
    tagline: 'Gestão Completa de Apólices Automotivas',
    description: 'Execução operacional de cotações, renovações, transmissão de propostas e suporte em sinistros e assistência 24h com acompanhamento até a liquidação.',
    highlights: ['Cotações Multi-seguradora', 'Processamento de Endossos', 'Assistência 24h & Guincho', 'Análise de Riscos & Coberturas']
  },
  {
    id: 'elementares',
    title: 'Ramos Elementares',
    icon: ShieldCheck,
    tagline: 'Proteção Patrimonial Residencial e Empresarial',
    description: 'Operacionalização de apólices de ramos elementares (Residencial, Empresarial e Condomínio), análise de clausulados e transmissão de propostas.',
    highlights: ['Seguro Residencial & Condomínio', 'Emissão de Apólices PME', 'Controle de Vistorias', 'Adequação de Coberturas']
  },
  {
    id: 'vida',
    title: 'Vida Individual & PME',
    icon: HeartHandshake,
    tagline: 'Segurança Financeira Familiar e Corporativa',
    description: 'Gestão de cálculos, movimentações de vidas, faturamento de apólices empresariais e regulação de sinistros em Vida Individual e Grupo.',
    highlights: ['Movimentação de Vidas PME', 'Faturamento Corporativo', 'Certificados de Seguro', 'Regulação de Sinistros']
  },
  {
    id: 'backoffice',
    title: 'Backoffice Operacional',
    icon: Headset,
    tagline: 'Eficiência e Organização de Processos Internos',
    description: 'Interface direta com seguradoras parceiras, acompanhamento de emissões, checagem de pendências e atendimento suporte ao cliente pós-venda.',
    highlights: ['Interface com Seguradoras', 'Acompanhamento de Emissões', 'Suporte Pós-Venda Humanizado', 'Organização de Carteiras']
  },
  {
    id: 'excel',
    title: 'Excel & Data Analytics',
    icon: FileSpreadsheet,
    tagline: 'Controle Técnico e Inteligência de Dados',
    description: 'Elaboração de planilhas dinâmicas, controle rigoroso de prazos de renovação, comparativos técnicos de mercado e filtros estratégicos.',
    highlights: ['Controle de Renovação de Apólices', 'Comparativos Técnicos', 'Tabelas Dinâmicas & Fórmulas', 'Relatórios de Performance']
  }
];

const OptionWheel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedOption = optionsData[selectedIndex];

  return (
    <div className="neu-card p-8 md:p-12 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Especialidades & Soluções Operacionais
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          Clique nas opções da roda para explorar detalhadamente cada pilar de atuação da profissional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
        
        {/* Option Wheel Controls */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-8">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Outer Decorative Neumorphic Ring */}
            <div className="absolute inset-0 rounded-full border border-purple-500/20 shadow-[inset_4px_4px_10px_#07080b,inset_-4px_-4px_10px_#1d2233] animate-[spin_80s_linear_infinite]"></div>
            
            {/* Central Soft Glow Core */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-[6px_6px_16px_#07080b,-6px_-6px_16px_#1d2233] z-10">
              <span className="text-white text-xs font-black uppercase tracking-wider text-center px-2">
                Larissa Seguros
              </span>
            </div>

            {/* Wheel Options Positioned Circularly */}
            {optionsData.map((opt, idx) => {
              const angle = (idx * (360 / optionsData.length) - 90) * (Math.PI / 180);
              const radius = 120; // radius in px
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isSelected = idx === selectedIndex;
              const IconComp = opt.icon;

              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedIndex(idx)}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className={`absolute w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
                    isSelected
                      ? 'bg-purple-600 text-white scale-125 shadow-[0_0_20px_rgba(168,85,247,0.7)] ring-4 ring-purple-400/40'
                      : 'neu-button text-slate-400 hover:text-white'
                  }`}
                  title={opt.title}
                >
                  <IconComp size={22} />
                </button>
              );
            })}
          </div>

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {optionsData.map((opt, idx) => (
              <button
                key={opt.id}
                onClick={() => setSelectedIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  idx === selectedIndex
                    ? 'neu-button-primary'
                    : 'neu-button text-slate-400'
                }`}
              >
                {opt.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Details Card */}
        <div className="lg:col-span-7 neu-card p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4">
            <div className="p-3.5 neu-inset text-purple-400">
              {React.createElement(selectedOption.icon, { size: 30 })}
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                {selectedOption.title}
              </h3>
              <p className="text-purple-400 text-xs md:text-sm font-bold tracking-wide mt-0.5">
                {selectedOption.tagline}
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-base leading-relaxed">
            {selectedOption.description}
          </p>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Destaques de Atuação & Entregas:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedOption.highlights.map((item, i) => (
                <div key={i} className="neu-inset p-3 flex items-center gap-3 text-slate-200 text-xs md:text-sm font-semibold">
                  <CheckCircle2 size={18} className="text-purple-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OptionWheel;
