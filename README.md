# jQuery-DOM-Practice

My final solutions for the project 17.1 jQuery assignment

### jQuery DOM Practice `script.js`
```js
// 1. When the DOM is ready, console.log the message 'Let's get ready to party with jQuery!j
$(function(){
    console.log("Let's get ready to party with jQuery!");
})

// 2. Give all iamges inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center');

// 3. Remove the last paragraph in the article
$('p:last-child').remove();

// 4. Set the font size of the title to be a random pixel size from 0 to 100.
let randValue = Math.random() * 100;
$('#title').css('font-size', randValue);

// 5. Add an item to the list; it can say whatever you want.
$('ol').prepend($('<li>', {text: 'jQuery is kind of alright...'}));

// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
$('aside').empty().append('<p>', {text: "We're immensely sorry for the lists existence. Won't happen again..."});

// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('.form-control').on('keyup', function() {
    let red = $('.form-control').eq(0).val();
    let green = $('.form-control').eq(1).val();
    let blue = $('.form-control').eq(2).val();
    $('body').css('background-color', `rgb(${red}, ${green}, ${blue})`);
})

// 8. Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function(event){
    $(event.target).remove();
});
```

### Movie's App `script.js`

```js
/* Part 2: Movie's App
** Build an application that uses jQuery to do the following:
**  - Contains a form with two inputs for a title and rating along with a button to submit the form. * Done *
**  - When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM * Done *
**  - When the button to remove is clicked, remove each title and rating from the DOM * Done *
*/

let numOfButtons = 0;

const movieArray = [];

$(function(){
    console.log("DOM LOADED");
});

$('#submit-button').on('click', function(event){
    event.preventDefault();

    const title = $('#title'); // Movie title
    const rating = $('#rating'); // Movies rating
    if (title.val().length < 2){
        alert('Title of Movie needs at least 2 or more charactes. Please try again');
        title.val('');
    }
    if (rating.val() < 0 || rating.val() > 10 || rating.val() === ''){
        rating.val('');
        alert('Rating not valid please try again');
    }
    else{
        $('#rating-list').append(`<li class=movieRating>Movie: ${title.val()} | Rating: ${rating.val()} <button id=button${numOfButtons}>Remove</button></li>`);
        numOfButtons++;
    }

});

$('#rating-list').on('click', function(event){
    if (event.target.tagName === 'BUTTON'){
        $(`#${event.target.id}`).parent().remove();
    }
});
```
