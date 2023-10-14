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