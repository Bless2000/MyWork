   var addItemId = 0;
   function addToCart(item)
   {
    addItem += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    cartItems.append(selectedItem);

   }