const PubSub = require('../helpers/pub_sub.js')

const ItemFormView = function (form) {
  this.form = form
}

ItemFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event)
  })

ItemFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newItem = this.createNewItem(event.target)
  PubSub.publish('ItemFormView:submit', (newItem))
  console.log(newItem)
  event.target.reset();
}

ItemFormView.prototype.createNewItem = function (form) {
  const newItem = {
    activity: form.activity.value,
    category: form.category.value,
    complete: form.complete.value
  }
  return newItem;
}

}

module.exports = ItemFormView;
