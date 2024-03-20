import "../scss/style.scss"
import "./utils/prism.js";
import {iosVhFix} from "./utils/ios-vh-fix.js";
import initMenuButton from "./modules/header/init-page-menu";

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    initMenuButton();
  });
});
