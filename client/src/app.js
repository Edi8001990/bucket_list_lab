const Items = require('./models/items.js');
const ItemsGridView = require('./views/items_grid_view.js');

document.addEventListener('DOMContentLoaded', ()=>{
  const itemsContainer = document.querySelector('.items')
  const itemsGridView = new ItemsGridView(itemsContainer)
  itemsGridView.bindEvents();

  // console.log("Works")

  const url = 'http://localhost:3000/api/items';
  const items = new Items(url);
  items.getData();


})
