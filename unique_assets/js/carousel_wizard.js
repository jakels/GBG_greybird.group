// This javascript file creates a carousel on the call of CreateCarousel(), this requires a DOM object to fill as it is not writing to the doc during load

var carouselIndex = 0; // A unique number for each carousel used for the purpose of generating unique ID's
var carouselIndexInsertPlace = "[cIndex]"; // The placeholder which will be replaced by a generated carousel ID using the carousel index

var writeDOM_createCarousel = `
<div class="col-md-5 order-md-1">
    <div id="c` + carouselIndexInsertPlace + `" class="carousel slide mb-0" data-bs-ride="carousel" data-bs-theme="light" data-bs-interval="40000">
        <div class="carousel-indicators">
        [bottomIndicators]
        </div>
        <div class="carousel-inner">
        [carouselItems]
        <button class="carousel-control-prev" type="button" data-bs-target="#c` + carouselIndexInsertPlace + `" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#c` + carouselIndexInsertPlace + `" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
`; // The carousel html to be filled with dynamic content

function CreateCarousel(imagesArray, domElementID){
        
    var bottomIndicatorsString = ``;
    var carouselItemsString = ``;

    for (i = 0; i < imagesArray.length; i++) {
        var currentImage = imagesArray[i];

        
        var extraClass = ``;

        if(i==0){
            extraClass = `active`;
        }

        bottomIndicatorsString += `<button type="button" data-bs-target="#c` + carouselIndex + `" data-bs-slide-to="` + i + `" class="`+ extraClass + `" aria-current="true" aria-label="Slide ` + (i+1) + `"></button>
        `;

        carouselItemsString += `
        <div class="carousel-item ` + extraClass + `">
            <img src="` + currentImage + `"> 
        </div>
        `;
    }



    var copyString = writeDOM_createCarousel;
    copyString = copyString.replace("[bottomIndicators]", bottomIndicatorsString);
    copyString = copyString.replace("[carouselItems]", carouselItemsString);
    copyString = copyString.replaceAll(carouselIndexInsertPlace, carouselIndex);

    document.getElementById(domElementID).innerHTML += copyString;
    carouselIndex += 1;
}