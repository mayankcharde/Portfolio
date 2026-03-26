import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0A0A0F",
                primary: "#00F5FF", // Electric Cyan
                secondary: "#7B2FFF", // Violet
                accent: "#F0EEE9", // Warm White
                surface: "rgba(255, 255, 255, 0.04)",
            },
            fontFamily: {
                heading: ["Syne", "sans-serif"],
                body: ["Outfit", "sans-serif"],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 10s linear infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.glass': {
                    'background': 'rgba(255, 255, 255, 0.04)',
                    'backdrop-filter': 'blur(12px)',
                    '-webkit-backdrop-filter': 'blur(12px)',
                    'border': '1px solid rgba(255, 255, 255, 0.1)',
                },
                '.text-glow-cyan': {
                    'text-shadow': '0 0 10px rgba(0, 245, 255, 0.5), 0 0 20px rgba(0, 245, 255, 0.3)',
                },
                '.text-glow-violet': {
                    'text-shadow': '0 0 10px rgba(123, 47, 255, 0.5), 0 0 20px rgba(123, 47, 255, 0.3)',
                },
                '.shadow-glow-cyan': {
                    'box-shadow': '0 0 15px rgba(0, 245, 255, 0.4)',
                },
            })
        }),
    ],
}
