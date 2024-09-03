/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                libre_franklin: ["Libre Franklin", "san-serif"],
            },

            fontSize: {
                xsm: "0.50rem",
            },
        },
    },
    plugins: [],
}
