const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Items = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
}

Items.prototype.bindEvents = function () {
  PubSub.subscribe('ItemView:item-delete-clicked', (event) => {
    this.deleteItem(event.detail)
  })

  PubSub.subscribe('ItemFormView:submit', (event) => {
    this.postItem(event.detail)
  })
}


Items.prototype.getData = function() {
  this.request.get()
    .then((items) =>{
      PubSub.publish('Items:data-loaded', items);
    })
      .catch(console.error)
};

Items.prototype.postItem = function (item) {
  this.request.post(item)
    .then((items) => {
      PubSub.publish('Items:data-loaded', items)
    })
}

Items.prototype.deleteItem = function (itemId) {
  this.request.delete(itemId)
    .then((items) => {
      PubSub.publish('Items:data-loaded', items)
    })
}

module.exports = Items;
