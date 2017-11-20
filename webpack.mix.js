let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.setPublicPath('public/assets/build');
mix.js([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/popper.js/dist/popper.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'src/js/main.js'
    ], 'public/assets/build/js/main.js');
mix.sass('src/scss/main.scss', 'public/assets/build/css/main.css');
mix.copyDirectory('src/res/', 'public/assets/build/res/');

