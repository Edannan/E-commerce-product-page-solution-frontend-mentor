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

  //opening the lightbox gallery
  function lightbox(){
    var lightbox = document.getElementById("lightB");
    var modalImage = document.getElementById("modalImage");
    lightbox.classList.remove("disabled");
    modalImage.style.backgroundImage = image.style.backgroundImage;

    //make thumbnail of the current image active on opening of lightbox gallery
    var thumbnails = document.getElementsByClassName("thumbnail");
    var modalThumbnails = document.getElementsByClassName("thumbnail-modal");
    var currentImg = document.getElementsByClassName("activeModImg");
    for(var i = 0; i < thumbnails.length; i++){
      if(thumbnails[i].classList.contains("activeImg")){
        currentImg[0].classList.remove("activeModImg");
        modalThumbnails[i].classList.add("activeModImg");
      }
    }
  }

  //close lightbox gallery
  function closeModal(){
    var lightbox = document.getElementById("lightB");
    lightbox.classList.add("disabled");
  }


  //function for switching main image at the lightbox
function switchModalImg(){
var modalThumbnails = document.getElementsByClassName("thumbnail-modal");
var modalImage = document.getElementById("modalImage");
var currentImg = document.getElementsByClassName("activeModImg");
for (var i = 0; i < modalThumbnails.length; i++) {
  if(currentImg[0] == modalThumbnails[0]){
    modalImage.style.backgroundImage = "url('images/image-product-1.jpg')";
  }else if(currentImg[0] == modalThumbnails[1]){
    modalImage.style.backgroundImage = "url('images/image-product-2.jpg')";
  }else if(currentImg[0] == modalThumbnails[2]){
    modalImage.style.backgroundImage = "url('images/image-product-3.jpg')";
  }else{
    modalImage.style.backgroundImage = "url('images/image-product-4.jpg')";
  }
}
}

//switching active Lightbox ThumbnailsImage
var modalThumbnails = document.getElementsByClassName("thumbnail-modal");
var modalImage = document.getElementById("modalImage");
for (var i = 0; i < modalThumbnails.length; i++) {
  modalThumbnails[i].addEventListener("click", function() {
      var currentImg = document.getElementsByClassName("activeModImg");
      currentImg[0].className = currentImg[0].className.replace("activeModImg", "");
      this.classList.add("activeModImg");

      switchModalImg();
    });
  }

  //previous button
  function prev(){
    var modalThumbnails = document.getElementsByClassName("thumbnail-modal");
    var currentImg = document.getElementsByClassName("activeModImg");

    for(var i = 0; i < modalThumbnails.length; i++){
      if(modalThumbnails[i].classList.contains("activeModImg") && modalThumbnails[i] != modalThumbnails[0]){
        modalThumbnails[i].classList.remove("activeModImg");
        modalThumbnails[i-1].classList.add("activeModImg");
        console.log(modalThumbnails[i-1]);
      }
    }
    switchModalImg();
  }

  //switches to the next image
  function next(){
    var modalThumbnails = document.getElementsByClassName("thumbnail-modal");
    var currentImg = document.getElementsByClassName("activeModImg");
    for(var i = 0; i < modalThumbnails.length; i++){
      if(modalThumbnails[i].classList.contains("activeModImg") && modalThumbnails[i] != modalThumbnails[3]){
        modalThumbnails[i].classList.remove("activeModImg");
        modalThumbnails[i+=1].classList.add("activeModImg");
        // console.log(modalThumbnails[i+1]);
      }
    }
    switchModalImg();
  }

  function add(){
    var num = document.getElementById("num");
    var number = parseInt(num.innerHTML);
    document.getElementById("num").innerHTML = number+=1;

  }

  function subtract(){
    var num = document.getElementById("num");
    var number = parseInt(num.innerHTML);
    if(number == 0){
      document.getElementById("num").innerHTML = 0;
    }else{
    document.getElementById("num").innerHTML = number-=1;
    }
  }

  function addToCart(){
    var num = document.getElementById("num");
    var quantity = parseInt(num.innerHTML);
    var price = parseInt(document.getElementById("figure").innerHTML);

    var item = document.getElementById("secondDetail").innerHTML;
    document.getElementById("itemName").innerHTML = item;

    var cartNumDiv = document.getElementById("cartNum");
    if(quantity != 0){
    document.getElementById("cart-details").style.display = "flex";
    document.getElementById("text").classList.add("disabled");
    cartNumDiv.classList.remove("disabled");
    }
    cartNumDiv.innerHTML = parseInt(cartNumDiv.innerHTML) + quantity;

    var total = parseInt(cartNumDiv.innerHTML) * price;

    document.getElementById("itemPic").style.backgroundImage = "url('images/image-product-1-thumbnail.jpg')";

    document.getElementById("itemQuantity").innerHTML = "$" + price.toFixed(2) + " x " + cartNumDiv.innerHTML;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
  }

  function del(){
    var cartNumDiv = document.getElementById("cartNum");
    cartNumDiv.classList.add("disabled");
    cartNumDiv.innerHTML = 0;
    document.getElementById("cart-details").style.display = "none";
    document.getElementById("text").classList.remove("disabled");
  }
