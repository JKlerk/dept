/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './plugins/**/*.vue'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                teko: ['Teko', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
