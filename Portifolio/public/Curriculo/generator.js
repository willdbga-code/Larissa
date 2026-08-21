const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');

function generatePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const primaryColor = '#0f172a';
  const accentColor = '#1e3a8a';
  const textColor = '#1e293b';
  const mutedText = '#475569';

  let y = 16;
  const marginX = 16;
  const contentWidth = 178;

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(primaryColor);
  doc.text('LARISSA MOREIRA DE OLIVEIRA', marginX, y);
  
  y += 7;
  doc.setFontSize(11);
  doc.setTextColor(accentColor);
  doc.text('PROFISSIONAL DE SEGUROS | OPERAÇÕES & BACKOFFICE', marginX, y);

  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(mutedText);
  doc.text('Sao Paulo - SP / Vale do Paraiba  |  Tel: (12) 99654-3678  |  E-mail: larimoreira012@gmail.com', marginX, y);

  y += 5;
  doc.setDrawColor(30, 58, 138);
  doc.setLineWidth(0.6);
  doc.line(marginX, y, marginX + contentWidth, y);

  // Section: Resumo Profissional
  y += 8;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(primaryColor);
  doc.text('RESUMO PROFISSIONAL', marginX, y);

  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(textColor);
  const resumo = 'Profissional de Seguros com solida vivencia operacional em corretoras de seguros e gestao de backoffice. Especialista em operacionalizacao e regulacao nos segmentos de Seguros Auto, Ramos Elementares, Vida Individual e Empresarial. Dominio completo de processos ponta a ponta: calculos, cotacoes, transmissao de propostas, emissao de apolices e certificados, endossos, faturamento corporativo, abertura e acompanhamento de sinistros e acionamento de assistencia 24h. Excel intermediario/avancado aplicado ao controle de renovacoes, elaboracao de comparativos tecnicos e suporte de pos-venda focado em retencao de clientes.';
  const resumoLines = doc.splitTextToSize(resumo, contentWidth);
  doc.text(resumoLines, marginX, y);
  y += resumoLines.length * 4.2 + 4;

  // Section: Experiência Profissional
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(primaryColor);
  doc.text('EXPERIENCIA PROFISSIONAL', marginX, y);
  y += 5;

  // Exp 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor);
  doc.text('Auxiliar de Escritorio Operacional - Seguros de Vida', marginX, y);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(mutedText);
  doc.text('Mar 2026 - Jun 2026', marginX + contentWidth - 32, y);

  y += 4.5;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(accentColor);
  doc.text('C.I.A Emporio Seguros Corretora e Aux.', marginX, y);

  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(textColor);

  const exp1Bullets = [
    '• Atuacao operacional estrategica nos ramos de Seguro de Vida Individual e Empresarial.',
    '• Realizacao de calculos de premio, movimentacoes cadastrais, transmissao de propostas e emissao de apolices.',
    '• Envio e controle de faturamentos para empresas clientes, garantindo pontualidade e conciliacao financeira.',
    '• Abertura, acompanhamento e regulacao operacional de sinistros junto as seguradoras parceiras.',
    '• Desenvolvimeno e gestao de planilhas em Excel (filtros, formulas e controles) para renovacoes e comparativos.'
  ];
  exp1Bullets.forEach(b => {
    doc.text(b, marginX + 2, y);
    y += 4;
  });

  y += 3;

  // Exp 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor);
  doc.text('Auxiliar de Escritorio Operacional - Seguros Auto & Ramos Elementares', marginX, y);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(mutedText);
  doc.text('Jun 2024 - Dez 2025', marginX + contentWidth - 32, y);

  y += 4.5;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(accentColor);
  doc.text('UYARA SEGUROS CORRETORA E ADM', marginX, y);

  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(textColor);

  const exp2Bullets = [
    '• Operacionalizacao de Seguros Auto e Ramos Elementares, executando cotacoes, calculos, renovacoes e emissao.',
    '• Emissao e processamento de endossos (alteracoes de veiculos, condutores e coberturas) e pos-venda.',
    '• Atendimento e suporte a segurados, com acionamento imediato de assistencia 24h (guincho, socorro mecânico, reparos).',
    '• Uso diario de Excel para analise de dados, acompanhamento de prazos de renovacao e retencao de carteira.'
  ];
  exp2Bullets.forEach(b => {
    doc.text(b, marginX + 2, y);
    y += 4;
  });

  y += 3;

  // Exp 3
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor);
  doc.text('Atendente de Atendimento e Operacoes', marginX, y);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(mutedText);
  doc.text('Dez 2020 - Mar 2022', marginX + contentWidth - 32, y);

  y += 4.5;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(accentColor);
  doc.text('A.C.F. Lourenco', marginX, y);

  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(textColor);

  const exp3Bullets = [
    '• Atendimento direto ao cliente, resolucao de duvidas comerciais e suporte operacional diario.',
    '• Organizacao de estoque, controle de entradas/saidas e manutencao de padroes de qualidade.'
  ];
  exp3Bullets.forEach(b => {
    doc.text(b, marginX + 2, y);
    y += 4;
  });

  // Section: Competências
  y += 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(primaryColor);
  doc.text('PRINCIPAIS COMPETENCIAS & TECNOLOGIAS', marginX, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(textColor);

  const skills = [
    '• Ramos de Seguros: Seguro Auto, Ramos Elementares, Vida Individual e Empresarial, Seguro Residencial.',
    '• Processos Operacionais: Cotacoes, Transmissao de Propostas, Emissao de Apolices, Endossos, Sinistros, Faturamento, Assistencia 24h, Pos-Venda.',
    '• Tecnologia & Ferramentas: Excel Intermediario/Avancado (Formulas, Filtros, Comparativos, Tabelas Dinamicas), Portais de Seguradoras, Pacote Office.',
    '• Diferenciais: Visao sistemica de backoffice, facilidade no aprendizado de novos softwares, organizacao rigorosa.'
  ];

  skills.forEach(s => {
    const lines = doc.splitTextToSize(s, contentWidth - 4);
    doc.text(lines, marginX + 2, y);
    y += lines.length * 4;
  });

  // Save PDF file
  const outputPath = path.join(__dirname, 'Larissa_Moreira_Curriculo_ATS.pdf');
  const pdfOutput = doc.output('arraybuffer');
  fs.writeFileSync(outputPath, Buffer.from(pdfOutput));
  console.log('PDF gerado com sucesso em: ' + outputPath);
}

generatePDF();
