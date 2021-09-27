const imgContainers = document.querySelectorAll(".img-container img");
const imgHeaders = document.querySelectorAll(".img-container h2");
let permission = true;
for(let i = 0; i < imgContainers.length; i++){

   imgContainers[i].addEventListener("click", () => {
     for (const element of imgContainers) {
       if(element.classList.contains("normal-img")){
          permission = false;
       }
     }
      if(imgContainers[i].classList.contains("normal-img")){
        imgContainers[i].classList.toggle("normal-img");
        imgContainers[i].classList.toggle("different-state");
        imgHeaders[i].classList.toggle("open");
        permission = true;

      }else if(permission){
        imgContainers[i].classList.toggle("normal-img");
        imgContainers[i].classList.toggle("different-state");
        imgHeaders[i].classList.toggle("open");
        permission = true;
      }
  
  });
}
