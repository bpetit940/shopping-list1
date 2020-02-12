'use strict'
function addItemToList(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let userInput = $("#shopping-list-entry").val()
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${userInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    )
    
        
  })
} 

$(addItemToList);

function checkOffItem() {
  $('ul').on('click', '.shopping-item-toggle', event => {
    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
  })}

$(checkOffItem);

function removeItemFromList() {
  $('ul').on('click', '.shopping-item-delete', event => {
    $(event.target).closest('li').remove();
  })
}

$(removeItemFromList);