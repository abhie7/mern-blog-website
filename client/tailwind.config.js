// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind")

/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
        flowbite.content(),
    ],
    theme: {
        extend: {},
    },
    plugins: [flowbite.plugin()],
}
