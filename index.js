'use strict';

function handleShoppingList(){

  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const addedItem = $(this).find('#shopping-list-entry').val();
    //console.log(addedItem);
    $('.shopping-list').append(`
    <li>
    <span class="shopping-item">${addedItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  });

  $('.shopping-list').on('click','.shopping-item-delete', function(event){
    event.preventDefault();
    $(this).closest('li ').remove();

  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    event.preventDefault();
    $(this).closest('li').toggleClass('shopping-item__checked');
  });

}
$(handleShoppingList);