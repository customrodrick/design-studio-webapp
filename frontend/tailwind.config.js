/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#1f2a44',
                'bg-secondary': '#2d3b55',
                'bg-card': '#2d3748',
                'accent-green': '#2284C3',
                'accent-green-hover': '#339ada',
                'accent-biege': '#E6D2A0',
                'text-primary': '#e5e7eb',
                'text-secondary': '#9ca3af',
            },
            fontFamily: {
                sans: ['Poppins', 'Open Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
