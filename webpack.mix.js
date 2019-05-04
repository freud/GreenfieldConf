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

mix.disableNotifications();
mix.setPublicPath('public/');
mix.config.fileLoaderDirs.images = 'res/';
mix.config.fileLoaderDirs.fonts = 'res/';
mix.js([
        'node_modules/jquery/dist/jquery.slim.js',
        'node_modules/popper.js/dist/umd/popper.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/jquery.cookie/jquery.cookie.js',
        'node_modules/countdown/countdown.js',
        'node_modules/cookieconsent/build/cookieconsent.min.js',
        'node_modules/lightbox2/dist/js/lightbox.js',
        'src/js/map.js',
        'src/js/main.js'
    ], 'main.js');
mix.sass('src/scss/main.scss', 'main.css')
    .options({processCssUrls: false});
mix.copyDirectory('src/res/', 'public/res/');
mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/res/fonts/');
mix.webpackConfig({
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
});
mix.autoload({
    jquery: ['$', 'window.jQuery'],
    'popper.js/dist/umd/popper.js': ['Popper'],
    'countdown/countdown.js': ['countdown']
});
