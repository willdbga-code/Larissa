import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const MorphSlider = ({
  items = [],
  transition = 'melt',
  intensity = 0.55,
  aberration = 0.35,
  drift = 0.4,
  autoplay = false,
  overlayColor = '#05060a',
  duration = 1.1,
  ease = 'power2.inOut',
  scale = 2.4,
  autoplayDelay = 4,
  loop = true,
  radius = 16,
  showCaptions = true,
  showControls = true,
  showIndicators = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const canvasRef = useRef(null);
  const timerRef = useRef(null);

  // Preload images
  const loadedImages = useRef([]);
  useEffect(() => {
    loadedImages.current = items.map((item) => {
      const img = new Image();
      img.src = item.image;
      return img;
    });
  }, [items]);

  // Handle slide change with canvas melt morphing effect
  const goToSlide = (nextIndex) => {
    if (isTransitioning || nextIndex === currentIndex) return;
    setIsTransitioning(true);

    const canvas = canvasRef.current;
    if (!canvas) {
      setCurrentIndex(nextIndex);
      setIsTransitioning(false);
      return;
    }

    const ctx = canvas.getContext('2d');
    const imgCurrent = loadedImages.current[currentIndex];
    const imgNext = loadedImages.current[nextIndex];

    let progress = 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animateMelt = (now) => {
      const elapsed = now - startTime;
      progress = Math.min(elapsed / durationMs, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (imgCurrent && imgNext && imgCurrent.complete && imgNext.complete) {
        // Draw current slide
        ctx.globalAlpha = 1 - progress;
        ctx.drawImage(imgCurrent, 0, 0, canvas.width, canvas.height);

        // Melt distortion pass
        const meltOffset = Math.sin(progress * Math.PI) * intensity * 40;
        ctx.globalAlpha = progress;
        ctx.save();
        ctx.translate(0, meltOffset * (1 - progress));
        ctx.drawImage(imgNext, 0, 0, canvas.width, canvas.height);
        ctx.restore();
      } else {
        ctx.globalAlpha = 1;
      }

      if (progress < 1) {
        requestAnimationFrame(animateMelt);
      } else {
        setCurrentIndex(nextIndex);
        setIsTransitioning(false);
      }
    };

    requestAnimationFrame(animateMelt);
  };

  const nextSlide = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    goToSlide(nextIdx);
  };

  const prevSlide = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    goToSlide(prevIdx);
  };

  // Autoplay handler
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, autoplayDelay * 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, currentIndex, items.length]);

  return (
    <div
      className="relative w-full h-full overflow-hidden shadow-2xl flex flex-col justify-between"
      style={{
        borderRadius: `${radius}px`,
        backgroundColor: overlayColor,
      }}
    >
      {/* Background Image & Melt Canvas */}
      <div className="absolute inset-0 z-0">
        <img
          src={items[currentIndex]?.image}
          alt={items[currentIndex]?.caption || 'Slide'}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isTransitioning ? 'scale-105 filter blur-xs' : 'scale-100'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
        <canvas
          ref={canvasRef}
          width={1200}
          height={600}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${overlayColor} 0%, rgba(5, 6, 10, 0.4) 60%, transparent 100%)`,
          }}
        />
      </div>

      {/* Top Controls Badge */}
      <div className="relative z-20 p-6 flex justify-between items-center">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-purple-300">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          Transição Morph Melt (0.55 Intensity)
        </div>
        {showControls && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-black/50 hover:bg-purple-600/80 text-white transition-all backdrop-blur-md border border-white/10"
            title={isPlaying ? 'Pausar Autoplay' : 'Iniciar Autoplay'}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        )}
      </div>

      {/* Caption Content */}
      {showCaptions && (
        <div className="relative z-20 p-8 max-w-2xl">
          <span className="text-purple-400 font-semibold tracking-wider text-xs uppercase mb-2 block">
            Destaque {currentIndex + 1} de {items.length}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 drop-shadow-md">
            {items[currentIndex]?.caption}
          </h2>
          {items[currentIndex]?.subtext && (
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              {items[currentIndex]?.subtext}
            </p>
          )}
        </div>
      )}

      {/* Navigation Controls & Indicators */}
      <div className="relative z-20 p-6 flex justify-between items-center bg-gradient-to-t from-black/80 to-transparent">
        {showIndicators && (
          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentIndex
                    ? 'w-8 bg-purple-500 shadow-lg shadow-purple-500/50'
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {showControls && (
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="p-3 rounded-full bg-white/10 hover:bg-purple-600 text-white backdrop-blur-md border border-white/15 transition-all active:scale-95 disabled:opacity-50"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="p-3 rounded-full bg-white/10 hover:bg-purple-600 text-white backdrop-blur-md border border-white/15 transition-all active:scale-95 disabled:opacity-50"
              aria-label="Próximo slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MorphSlider;
