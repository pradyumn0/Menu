import { menu } from "./menu-summary.js";

const sectionCenter=document.querySelector('.section-center');
const container=document.querySelector('.btn-container');


export const displayMenuItems = (menuItems)=>{
  let displayMenu = menuItems.map((item)=>{
    // console.log(item);
  return  ` <article class="menu-item">
  <img src=${item.img} alt=${item.title} class="photo">
  <div class="item-info">
    <header>
      <h4>${item.title}</h4>
    <h4 class="price">${item.price}</h4>
  </header>
  <p class="item-text">
    ${item.desc}  </p>

  </div>
</article>` ;
  });
  displayMenu=displayMenu.join('');
  sectionCenter.innerHTML=displayMenu;
}

export const displayMenuButtons=()=>{
  const categories=menu.reduce((values,item)=>{
    if(!values.includes(item.category)){
     values.push(item.category);
    }
    return values;
     },['all']
     );
     const categoryBtns = categories.map((category)=>{
       return `<button class="filter-btn" type="button" data-id= ${category}> ${category}
       </button>`;
     }).join('');
      container.innerHTML = categoryBtns;
      const filterBtns=document.querySelectorAll('.filter-btn');
    // filter items 
    filterBtns.forEach((btn)=>{
     btn.addEventListener("click",(e)=>{
       const category= e.currentTarget.dataset.id;
       const menuCategory = menu.filter((menuItem)=>{
        if(menuItem.category === category){
         return menuItem;
        }
         // return menuItem;
       });
       if(category==='all'){
         displayMenuItems(menu)
       }
       else{
         displayMenuItems(menuCategory)
       }
     });
   }) ;
   
}