const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Items = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
}


Items.prototype.getData = function() {
  this.request.get()
    .then((items) =>{
      PubSub.publish('Items:data-loaded', items);
    })
    
      .catch(console.error)

};

module.exports = Items;
