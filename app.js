// items- sort items
var items = document.querySelectorAll('.appartments-item');
// parent for sort items
var parent = document.body;
var SortElements = new Object();
items.forEach(function(item, indx){
  
  // .appartments-item__price - selector for element where closet price
  
  var itemValue = parseInt(item.querySelector('.appartments-item__price').textContent.replace('руб', '').replace(/\s+/g, ''));
  SortElements[itemValue] = {'element': item, 'index': indx} ;
});
var keys = Object.keys(SortElements);
function compareNumeric(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  if (a < b) return 1;
  if (a > b) return -1;
}
keys.sort(compareNumeric);
keys.map(function(key, indx){
  parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
});
