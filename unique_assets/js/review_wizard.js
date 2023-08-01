// This javascript asset writes review quotes to the page

var source_GReviews = "https://www.google.com/search?client=firefox-b-d&q=sick+n+slick#lrd=0x48795f8ddfb6be95:0x3a35b4ba2a230461,1,,,,";
var source_FBReviews = "https://www.facebook.com/SicknSlickPaintshop/reviews";
var character_Star = "★";

var writeDOM_createReview = `
<div class="col-lg-4">
    <h2 class="fw-normal">[name]</h2>
    <p style="margin-top: -2%; color: goldenrod;">[stars]</p>
    <p>"[text]"</p><br>
    <p><a class="btn btn-secondary" href="[source]">See source &raquo;</a></p>
</div>
`;

function CreateReview(reviewText, reviewAuthor, reviewStarCount, reviewSource, DOMID){
    var copyText = writeDOM_createReview;
    copyText = copyText.replace("[name]", reviewAuthor);
    copyText = copyText.replace("[stars]", character_Star.repeat(reviewStarCount));
    copyText = copyText.replace("[text]", reviewText);
    copyText = copyText.replace("[source]", reviewSource);

    document.getElementById(DOMID).innerHTML += copyText;
}