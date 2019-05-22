const PubSub = require('../helpers/pub_sub.js');

const ItemView = function(container) {
  this.container = container;
}

ItemView.prototype.render = function(item) {
  const itemContainer = document.createElement('div')
  itemContainer.id = 'item';

  const activity = this.createHeading(item.activity);
  itemContainer.appendChild(activity);

  const category = this.createDetail(item.category);
  itemContainer.appendChild(category);

  const complete = this.createComplete(item.complete);
  itemContainer.appendChild(complete);

  const deleteButton = this.createDeleteButton(item._id);
  itemContainer.appendChild(deleteButton)

  const completeButton = this.createCompleteButton(item._id);
  itemContainer.appendChild(completeButton)

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

ItemView.prototype.createComplete = function(textContent) {
  const complete = document.createElement('h4');
  complete.textContent = `Complete? ${textContent}` ;
  return complete;
}

ItemView.prototype.createDeleteButton = function (itemId) {
  const button = document.createElement('button')
  button.classList.add('remove-button')
  button.value = itemId;

  button.addEventListener('click', (event) => {
    PubSub.publish('ItemView:item-delete-clicked', event.target.value)
  })
  return button;
}

ItemView.prototype.createCompleteButton = function (itemId) {
  const button = document.createElement('button')
  button.classList.add('complete-button')
  button.value = itemId;

  button.addEventListener('click', (event) => {
    PubSub.publish('ItemView:item-complete-clicked', event.target.value)
  })
  return button;
}

module.exports = ItemView;
