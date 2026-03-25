/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        neon:    '#00ffaa',
        'neon-dim': '#00cc88',
        cyan:    '#00e5ff',
        'bg':    '#030b0e',
        'bg-2':  '#061218',
        'bg-3':  '#0a1e27',
        'border':'#0d3340',
        muted:   '#4a7a8a',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      animation: {
        'blink':  'blink 1s step-end infinite',
        'glow':   'glow 2s ease-in-out infinite alternate',
        'scan':   'scan 8s linear infinite',
        'type':   'type 2s steps(40) forwards',
        'flicker':'flicker 0.15s infinite',
      },
      keyframes: {
        blink:   { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        glow:    { from: { textShadow: '0 0 10px #00ffaa' }, to: { textShadow: '0 0 25px #00ffaa, 0 0 40px #00cc88' } },
        scan:    { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
        flicker: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.95 } },
      },
    },
  },
};
