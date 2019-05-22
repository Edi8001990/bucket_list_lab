const PubSub = require('../helpers/pub_sub.js');

const ItemView = function(container) {
  this.container = container;
}

ItemView.prototype.render = function(item) {
  const itemContainer = document.createElement('div')
  itemContainer.class = 'item';

  const activity = this.createHeading(item.activity);
  itemContainer.appendChild(activity);

  const category = this.createDetail(item.category);
  itemContainer.appendChild(category);

  this.container.appendChild(itemContainer);
}


ItemView.prototype.createHeading = function(textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
}

ItemView.prototype.createDetail = function(textContent) {
  const detail = document.createElement('h4');
  detail.textContent = textContent;
  return detail;
}

module.exports = ItemView;
