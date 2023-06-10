let noOfCharac = 164;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
	if (content.textContent.length < noOfCharac) {
		content.nextElementSibling.style = "none";
	}
	else {
		let displayText = content.textContent.slice(0, noOfCharac);
		let moreText = content.textContent.slice(noOfCharac);	
		content.innerHTML = `${displayText} <span class="dots">...</span><span class="hide more">${moreText}</span>`;
	}
});

function readMore(btn) {
	let image = btn.parentElement;
	image.querySelector(".dots").classList.toggle("hide");
	image.querySelector(".more").classList.toggle("hide");
	btn.textContent == "Читати далі" ? btn.textContent = "Скрити" : btn.textContent = "Читати далі";
}


let currentDateTime = new Date();
let year = currentDateTime.getFullYear();
let month = (currentDateTime.getMonth() + 1);
let date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

let dateTomorrow = year + "-" + month + "-" + date;
let checkinElem = document.querySelector("#checkin-date");
let checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}