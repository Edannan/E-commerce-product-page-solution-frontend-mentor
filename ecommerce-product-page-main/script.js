var cart = document.getElementById("cartlist");
var thumbnails = document.getElementsByClassName("thumbnail");
var image = document.getElementById("productImage");
var current = document.getElementsByClassName("activeImg");
var lightbox = document.getElementById("lightB");
var modalImage = document.getElementById("modalImage");
var modalThumbnails = document.getElementsByClassName("thumbnail-modal");
var currentImg = document.getElementsByClassName("activeModImg");
var num = document.getElementById("num");
var cartNumDiv = document.getElementById("cartNum");
var sideMenu = document.getElementById("side-navdiv");




//display cart
function cartMenu(){
    cart.classList.add("activeCart");
}

//close cart
function closeCart(){
    cart.classList.remove("activeCart");
}


//switching thumbnails for the display image
for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
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
  function lightBoxGallery(){
    lightbox.classList.remove("disabled");
    modalImage.style.backgroundImage = image.style.backgroundImage;

    //make thumbnail of the current image active on opening of lightbox gallery
    for(var i = 0; i < thumbnails.length; i++){
      if(thumbnails[i].classList.contains("activeImg")){
        currentImg[0].classList.remove("activeModImg");
        modalThumbnails[i].classList.add("activeModImg");
      }
    }
  }

  //close lightbox gallery
  function closeModal(){
    lightbox.classList.add("disabled");
  }


  //function for switching main image at the lightbox
function switchModalImg(){
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

//switching active Lightbox Thumbnail
for (var i = 0; i < modalThumbnails.length; i++) {
  modalThumbnails[i].addEventListener("click", function() {
      currentImg[0].className = currentImg[0].className.replace("activeModImg", "");
      this.classList.add("activeModImg");

      switchModalImg();
    });
  }

  //previous button
  function prev(){
    for(var i = 0; i < modalThumbnails.length; i++){
      if(modalThumbnails[i].classList.contains("activeModImg") && modalThumbnails[i] != modalThumbnails[0]){
        modalThumbnails[i].classList.remove("activeModImg");
        modalThumbnails[i-1].classList.add("activeModImg");
        // console.log(modalThumbnails[i-1]);
      }
    }
    switchModalImg();
  }

  //switches to the next image
  function next(){
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
    let number = parseInt(num.innerHTML);
    num.innerHTML = number+=1;
  }

  function subtract(){
    let number = parseInt(num.innerHTML);
    if(number == 0){
      num.innerHTML = 0;
    }else{
    num.innerHTML = number-=1;
    }
  }

  function addToCart(){
    //fetching data into cart
    let quantity = parseInt(num.innerHTML);
    let price = parseInt(document.getElementById("figure").innerHTML);
    let item = document.getElementById("secondDetail").innerHTML;
    document.getElementById("itemName").innerHTML = item;

    //show cart details
    if(quantity != 0){
    document.getElementById("cart-details").style.display = "flex";
    document.getElementById("text").classList.add("disabled");
    cartNumDiv.classList.remove("disabled");
    }
    cartNumDiv.innerHTML = parseInt(cartNumDiv.innerHTML) + quantity;

    let total = parseInt(cartNumDiv.innerHTML) * price;

    document.getElementById("itemPic").style.backgroundImage = "url('images/image-product-1-thumbnail.jpg')";

    document.getElementById("itemQuantity").innerHTML = "$" + price.toFixed(2) + " x " + cartNumDiv.innerHTML;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);

    //increase width for itemPricing div when quantity is 10 or more
    if(parseInt(cartNumDiv.innerHTML.length) == 2){
    document.getElementById("itemPricing").style.width = "74%";
    console.log(cartNumDiv.innerHTML.length);
    }else if(parseInt(cartNumDiv.innerHTML.length) > 2){
      document.getElementById("itemPricing").style.width = "82%";
    }else{
      document.getElementById("itemPricing").style.width = "69%";
    }

  }

  //empty cart
  function del(){
    cartNumDiv.classList.add("disabled");
    cartNumDiv.innerHTML = 0;
    document.getElementById("cart-details").style.display = "none";
    document.getElementById("text").classList.remove("disabled");
  }

  function openMenu(){
    sideMenu.classList.remove("disabled");
  }

  //close side-menu
  function closeMenu(){
    sideMenu.classList.add("disabled");
  }
  
  // responsiveness
      //next and previous buttons on mobile 
      let mobileprev = document.getElementById("mobilePrev");
      let mobilenext = document.getElementById("mobileNext");
  
      let imageArray = ['url("images/image-product-1.jpg")', 'url("images/image-product-2.jpg")', 'url("images/image-product-3.jpg")', 'url("images/image-product-4.jpg")'];
      image.style.backgroundImage = imageArray[0];
  
      mobileprev.addEventListener("click", function(){
        if(image.style.backgroundImage == imageArray[0]){
          image.style.backgroundImage = imageArray[3];
        }else if(image.style.backgroundImage == imageArray[3]){
          image.style.backgroundImage = imageArray[2];
        }else if(image.style.backgroundImage == imageArray[2]){
          image.style.backgroundImage = imageArray[1];
        }else{
          image.style.backgroundImage = imageArray[0];
        }
      })
  
      mobilenext.addEventListener("click", function(){
        if(image.style.backgroundImage == imageArray[3]){
          image.style.backgroundImage = imageArray[0];
        }else if(image.style.backgroundImage == imageArray[0]){
          image.style.backgroundImage = imageArray[1];
        }else if(image.style.backgroundImage == imageArray[1]){
          image.style.backgroundImage = imageArray[2];
        }else{
          image.style.backgroundImage = imageArray[3];
        }
      })

  function refixOnResize(){
    var screenWidth = window.innerWidth;
    let imageArray = ['url("images/image-product-1.jpg")', 'url("images/image-product-2.jpg")', 'url("images/image-product-3.jpg")', 'url("images/image-product-4.jpg")'];
    if(screenWidth <= 799){
       //disabling lightbox gallery on mobile
    image.removeAttribute("onclick");

    //optional: slideshow (contains huge bugs)
    // var myslideShow = setInterval(function(){
    //   if(image.style.backgroundImage == imageArray[3]){
    //     image.style.backgroundImage = imageArray[0];
    //   }else if(image.style.backgroundImage == imageArray[0]){
    //     image.style.backgroundImage = imageArray[1];
    //   }else if(image.style.backgroundImage == imageArray[1]){
    //     image.style.backgroundImage = imageArray[2];
    //   }else{
    //     image.style.backgroundImage = imageArray[3];
    //   }
    // }, 3000)
    
    }else{
      sideMenu.classList.add("disabled");
      image.style.backgroundImage = imageArray[0];
    }



  }

  window.addEventListener("resize", refixOnResize)


   

    // setInterval(() => {
    //   if (window.matchMedia("(min-width: 799px)").matches) {
    //     sideMenu.classList.add("disabled");
    //     // document.getElementById("sideMenu").classList.add("disabled");
    //   } else {
    //     // do something else
    //   }
    // }, 1000);



    

  
