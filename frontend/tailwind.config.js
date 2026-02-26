import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                green: {
                    50:  'oklch(0.97 0.02 145)',
                    100: 'oklch(0.93 0.05 145)',
                    200: 'oklch(0.87 0.09 145)',
                    300: 'oklch(0.78 0.13 145)',
                    400: 'oklch(0.68 0.17 145)',
                    500: 'oklch(0.55 0.18 145)',
                    600: 'oklch(0.46 0.16 145)',
                    700: 'oklch(0.38 0.13 145)',
                    800: 'oklch(0.30 0.10 145)',
                    900: 'oklch(0.22 0.07 145)',
                    950: 'oklch(0.15 0.05 145)',
                },
                neutral: {
                    50:  'oklch(0.98 0.003 145)',
                    100: 'oklch(0.95 0.005 145)',
                    200: 'oklch(0.90 0.008 145)',
                    300: 'oklch(0.82 0.010 145)',
                    400: 'oklch(0.68 0.012 145)',
                    500: 'oklch(0.55 0.012 145)',
                    600: 'oklch(0.42 0.010 145)',
                    700: 'oklch(0.32 0.008 145)',
                    800: 'oklch(0.22 0.006 145)',
                    900: 'oklch(0.15 0.005 145)',
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                'green-sm': '0 0 15px oklch(0.55 0.18 145 / 0.20)',
                'green-md': '0 0 30px oklch(0.55 0.18 145 / 0.30)',
                'green-lg': '0 0 50px oklch(0.55 0.18 145 / 0.40)',
                'card': '0 4px 24px oklch(0 0 0 / 0.06)',
                'card-hover': '0 8px 40px oklch(0 0 0 / 0.10)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-green': {
                    '0%, 100%': { boxShadow: '0 0 20px oklch(0.55 0.18 145 / 0.25)' },
                    '50%': { boxShadow: '0 0 40px oklch(0.55 0.18 145 / 0.50)' },
                },
                'slide-in-left': {
                    from: { opacity: '0', transform: 'translateX(-40px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                'slide-in-right': {
                    from: { opacity: '0', transform: 'translateX(40px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 4s ease-in-out infinite',
                'pulse-green': 'pulse-green 2s ease-in-out infinite',
                'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
                'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
