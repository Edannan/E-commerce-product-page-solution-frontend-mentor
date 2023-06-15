function cartMenu(){
    var cart = document.getElementById("cartlist");
    cart.classList.add("activeCart");

}

function closeCart(){
    var cart = document.getElementById("cartlist");
    cart.classList.remove("activeCart");
}


//switching thumbnails for the display image
var thumbnails = document.getElementsByClassName("thumbnail");
var image = document.getElementById("productImage");

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("activeImg");
      current[0].className = current[0].className.replace("activeImg", "");
      this.classList.add("activeImg");
      
      if(current[0] == thumbnails[0]){
        image.style.backgroundImage = "url('images/image-product-1.jpg')";
      }else if(current[0] == thumbnails[1]){
        image.style.backgroundImage = "url('images/image-product-2.jpg')";
      }else if(current[0] == thumbnails[2]){
        image.style.backgroundImage = "url('images/image-product-3.jpg')";
      }else{
        image.style.backgroundImage = "url('images/image-product-4.jpg')";
      }
    });
  }

  function lightbox(){
    var lightbox = document.getElementById("lightB");
    var modalImage = document.getElementById("modalImage");
    lightbox.classList.remove("noLightbox");
    modalImage.style.backgroundImage = image.style.backgroundImage;
  }

  function closeModal(){
    var lightbox = document.getElementById("lightB");
    lightbox.classList.add("noLightbox");
  }


  //switching images at the lightbox
  var modalThumbnails = document.getElementsByClassName("thumbnail-modal");
  var modalImage = document.getElementById("modalImage");

for (var i = 0; i < modalThumbnails.length; i++) {
  modalThumbnails[i].addEventListener("click", function() {
      var currentImg = document.getElementsByClassName("activeModImg");
      currentImg[0].className = currentImg[0].className.replace("activeModImg", "");
      this.classList.add("activeModImg");
      
      if(currentImg[0] == modalThumbnails[0]){
        modalImage.style.backgroundImage = "url('images/image-product-1.jpg')";
      }else if(currentImg[0] == modalThumbnails[1]){
        modalImage.style.backgroundImage = "url('images/image-product-2.jpg')";
      }else if(currentImg[0] == modalThumbnails[2]){
        modalImage.style.backgroundImage = "url('images/image-product-3.jpg')";
      }else{
        modalImage.style.backgroundImage = "url('images/image-product-4.jpg')";
      }
    });
  }

  function prev(){
    var modalThumbnails = document.getElementsByClassName("thumbnail-modal");
    var currentImg = document.getElementsByClassName("activeModImg");
  }