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

mix.setPublicPath('public/');
mix.config.fileLoaderDirs.images = 'res/';
mix.config.fileLoaderDirs.fonts = 'res/';
mix.js([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/popper.js/dist/popper.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'src/js/main.js'
    ], 'main.js');
mix.sass('src/scss/main.scss', 'main.css')
    .options({processCssUrls: false});
mix.copyDirectory('src/res/', 'public/res/');

