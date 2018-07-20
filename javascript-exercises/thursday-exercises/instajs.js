var images = document.querySelectorAll('.images4');

images.forEach(function(element){

    // console.log(element.src)
    element.addEventListener("click", (e) => {

        // console.log(e);
        var lgImgContainer = document.querySelectorAll('.onclick');
        lgImgContainer[0].src = e.target.src;
        
        // document.querySelectorAll('.onclick')[0].src = element.src;

    })

})