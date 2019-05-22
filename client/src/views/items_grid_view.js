const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');


const ItemsGridView = function(container) {
  this.container = container;
}

ItemsGridView.prototype.bindEvents = function() {
  PubSub.subscribe('Items:data-loaded', (event) =>{
    console.log(event.detail);
    // this.render(event.detail);
    
  })
}

module.exports = ItemsGridView;
