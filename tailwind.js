/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php", // Archivos Blade
    "./resources/**/*.js",        // Archivos JavaScript
    "./resources/**/*.vue",       // Si usas Vue
    "./node_modules/flowbite/**/*.js" // Componentes de Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),    // Plugin de Flowbite
  ]
}