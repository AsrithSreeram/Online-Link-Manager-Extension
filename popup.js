
window.onload = function(){ 

// Get form, item, and wishlist
var addToWishList = document.querySelector('#add-to-wishlist');
var listItem = document.querySelector('#title');
var listItem2 = document.querySelector('#link');

var list = document.querySelector('#wishlist');



addToWishList.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the wishlist item is empty
	if (listItem.value.length < 1) return;

	// Add item to wishlist
	list.innerHTML += `<a target = _blank href = ${listItem2.value}>` + '<li>' + listItem.value + '</li>' + '</a>' ;

	// Clear input
	listItem.value = '';
    listItem2.value = '';

	// Save the list to localStorage
	localStorage.setItem('wishlistItems', list.innerHTML);

// converting html collection to array, to use array methods


	}, false);

// Check for saved wishlist items
var saved = localStorage.getItem('wishlistItems');

// If there are any saved items, update our list
if (saved) {
	list.innerHTML = saved;
}
};