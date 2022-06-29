/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';

// TODO: Importer selon la version des widgets, soit le index des dossiers ou individuellement les styles
import '../styles/lib/loader.scss';
import '../styles/widgets/cc/index.scss';
import '../js/admin/control_widget';
import '../js/widgets/index';
import { initWsServer } from '../js/admin/ws';

initWsServer.call();

$(function () { //equals window.onload or ready
 $('#loading-wrapper').addClass('slide-out-fwd-center');
 setTimeout(() => {
  $('#loading-wrapper').hide()
 }, 1000);
});


console.log("JS & CSS Overlay OK");