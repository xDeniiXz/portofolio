import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['JetBrains Mono', 'Fira Code', 'monospace', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            colors: {
                tech: {
                    green: '#00ff9f',
                    dark: '#0a0a0f',
                    card: '#11111a',
                    border: '#22222f',
                }
            }
        },
    },

    plugins: [forms],
};
