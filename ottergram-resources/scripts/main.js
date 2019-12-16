const SELECTOR_DETALLE_IMAGE ='[data-image-rol="target"]'
const SELECTOR_DETALLE_TITULO ='[data-image-titulo="Title"]'
const SELECTOR_MINIATURA_ENLACE ='[data-image-rol="trigger"]'


function setDetails(imageURL , titleText){
'use strict'
var detailImage = document.querySelector(SELECTOR_DETALLE_IMAGE);
detailImage.setAttribute('src', imageURL);
var detailImage = document.querySelector(SELECTOR_DETALLE_TITULO);
detailImage.textContent = titleText;



}

function imageFromThumb (thumbnail){
'use strict'
return thumbnail.getAttibute ('data-imagen-url');



}

function tittleFromThumb (thumbnail){
    'use strict'
    return thumbnail.getAttibute ('data-imagen-titulo');
    
    
    
    }
    function setDetailsFromThumb (thumbnail){
        'use strict'
        setDetails(imageFromThumb(thumbnail)  , tittleFromThumb(thumbnail));
      
        }
      function addThumbClickHandler(thumb) {
        'user strict';
        thumb.addEventListener('click', function(event) {
            event.preventDefault();
            setDetailsFromThumb(thumb);
          
        });
    }
    
    function getThumbnailsArray() {
        'use strict'
      var thumbnail =document.querySelectorAll(SELECTOR_MINIATURA_ENLACE);
        var thumbnailArray = [].slice.call(thumbnail);
        return thumbnailArray;
    }
    
    
    function initializeEvents() {
        'use strict';
        var thumbnails = getThumbnailsArray();
        thumbnails.forEach(addThumbClickHandler);      
    }
    initializeEvents();