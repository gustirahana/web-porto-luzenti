// tailwind.config.js
module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: 'class',
    important: true,
    theme: {
        screens: {
            '2xs':"380px",
            xs: "540px",
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        fontFamily: {
            'montserrat': ['"Montserrat", sans-serif']
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '12px',
                sm: '1rem',
                lg: '45px',
                xl: '5rem',
                '2xl': '13rem',
            },
        },
        extend: {
            maxWidth: {
                '1440': '1440px',
            },
            aspectRatio: {
                '9/16': '9 / 16',
            },

            colors: {
                'dark': '#3c4858',
                'black': '#161c2d',
                'dark-footer': '#192132',
                'blue-luzenti':'#003EB2',
                'blue-bg-home':'#F3FCFF',
                'white-bone':'#FAF6EE',
                'dark-bone':'#212e37',
                'dark-blue': '#090A35',
                'backround-home': '#080E61',
                'gold-luzenti': '#cba052'
            },
            backgroundImage: {
                'home-background': "url('/src/assets/images/homepage/new-home-bg.png')",
                'water-background': "url('/src/assets/images/water-surface.svg')",
                'product-background': "url('/src/assets/images/products/all-products-banner-blue.png')",
                'details-background': "url('/src/assets/images/bg-details.svg')",
                'testi-background': "url('/src/assets/images/bg-testi.svg')",
                'home-background-ash': "url('/src/assets/images/homepage/ashwagandha.png')",
                'home-background-mobile': "url('/src/assets/images/homepage/homeBackgroundtes.png')",
                'footer-texture': "url('/img/footer-texture.png')",
                'unsplash-sm': "url('/src/assets/images/homepage/unsplash-sm.png')",
                'unsplash-md': "url('/src/assets/images/homepage/unsplash-lg.png')",
                'unsplash-lg': "url('/src/assets/images/homepage/unsplash-lg.png')",
            },
            backgroundPosition:{
                'center-4': 'center center 4rem'
            },
            boxShadow: {
                sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
                DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
                md: '0 5px 13px rgb(60 72 88 / 0.20)',
                lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
                xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
                '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
                inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
                testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
            },
            spacing: {
                0.75: '0.1875rem',
                3.25: '0.8125rem'
            },
            maxWidth: ({
                           theme,
                           breakpoints
                       }) => ({
                '1200': '71.25rem',
                '992': '60rem',
                '768': '45rem',
            }),
            zIndex: {
                1: '1',
                2: '2',
                3: '3',
                999: '999',
            },
            keyframes: {
                zoomIn: {
                    '0%': { transform: 'scale(0.5)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
            },
            animation: {
                zoomIn: 'zoomIn 1s ease-in-out',
                fadeIn: 'fadeIn 1s ease-in-out',
                fadeOut: 'fadeOut 1s ease-in-out',
            },
            transitionDelay: {
                '1s': '1s',
                '2s': '2s',
                '3s': '3s',
                '4s': '4s',
                '5s': '5s',
                '6s': '6s',
                '7s': '7s',
            },
        },
    },
    plugins: [
        require('autoprefixer')
    ]
}
