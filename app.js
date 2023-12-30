import {menu} from './menu-summary.js'
import { displayMenuButtons,displayMenuItems } from './menu-items-button.js';

// load items 
window.addEventListener('DOMContentLoaded', ()=>{
  displayMenuItems(menu);
displayMenuButtons()  
})

