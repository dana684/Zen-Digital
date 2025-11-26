const $ = (el) =>{
   return document.querySelector(el);
}
const $$ =(el) =>{
    return document.querySelectorAll(el);
}

const slides_data =[
    {
        title:"Their attention to detail and creative approach helped us stand out in a crowded market. Excellent work!",
        person:"- Emily Rodriguez, Business Owner"
    },
    {
        title:"The team delivered exactly what we needed on time and within budget. I would highly recommend their services.",
        person:"- Michael Chen, Startup Founder"
    },
    {
        title:"Working with Zen Digital transformed our online presence. Our website traffic increased by 200% in just three months!",
        person:"- Sarah Johnson, Marketing Director"
    }
];

// Header
const home= $("#h-home");
const home_bage= $("#home-bage");
const services= $('#h-services');
const services_bage=$("#services-bage");

home.addEventListener("click" , (e) =>{
    home.style.cssText =" background-color:#3a86ff; color:white;"
    services.style.cssText =" color:black;"
    home_bage.style.cssText="display:block"
    services_bage.style.cssText="display:none;"

});
services.addEventListener("click" , (e) =>{
    services.style.cssText ="background-color:#3a86ff; color:white;"
    home.style.cssText =" color:black;"
    home_bage.style.cssText="display:none"
    services_bage.style.cssText="display:block;"

});





//Slider
const sliderContainer = $(".slider-container");
const dotsContainer = $(".dots-container");

slides_data.forEach((e, i) => {
    const { title, person } = e;
    const div = `
    <div class="slide ${i == 0? 'active' : ''}" data-index="${i}">
        <p class="title">${title}</p>
        <span class="person">${person}</span>
    </div>`;
    sliderContainer.innerHTML += div;

    const dot = `<div class="dot ${i == 0 ? 'active' : ''}" data-index="${i}"></div>`;
    dotsContainer.innerHTML += dot;

});

const dots = $$(".dot");
const slidesItems = $$(".slide");

dots.forEach((dot, t) => {
    dot.addEventListener("click", (e) => {
        const targetElement = e.currentTarget;

        // Reset dots
        dots.forEach(ee => ee.classList.remove("active"));

        // Add active class to clicked dot
        targetElement.classList.add("active");

        // Reset slides
        slidesItems.forEach(ee => ee.classList.remove("active"));

        // Index value
        const index = targetElement.getAttribute("data-index");

        // Get targeted slide
        const targetedSlide = slidesItems[index];

        // Add active class to targeted slide
        targetedSlide.classList.add("active");
    });
});


//top button
const header = $("header")
const topBtn = $(".top-btn")

window.addEventListener("scroll", () => {
    if(window.scrollY > 300) {
        topBtn.classList.add("active")
    } else {
        topBtn.classList.remove("active")
    }
})

topBtn.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

//them dark
const body = $("body");
const them = $("#them");
const darkElements = $$("header, #why-div, #clients, .slide, #dark-services, #dark-portfolio, form");

let isDarkMode = false;

them.addEventListener("click", (e) => {
    if (!isDarkMode) {
        // Switch to dark mode
        them.classList.remove("fa-moon");
        them.classList.add("fa-sun");
        body.style.cssText = "background-color: #1a1a1a; color: white;";
        
        darkElements.forEach(el => {
            el.classList.add("dark-them");
        });
        
        isDarkMode = true;
    } else {
        // Switch to light mode
        them.classList.remove("fa-sun");
        them.classList.add("fa-moon");
        body.style.cssText = "background-color: #f8f9fa; color: black;";
        
        darkElements.forEach(el => {
            el.classList.remove("dark-them");
        });
        
        isDarkMode = false;
    }
});

// القائمة المنسدلة للجوال
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

if (mobileMenuBtn && mobileMenu && closeMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });

  // إغلاق القائمة المنسدلة عند النقر على رابط
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// تحسينات التمرير السلس للروابط
$$('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// تحسينات إضافية للشاشات الصغيرة
window.addEventListener('resize', function() {
  // إغلاق القائمة المنسدلة عند تغيير حجم الشاشة إلى حجم كبير
  if (window.innerWidth > 992 && mobileMenu) {
    mobileMenu.classList.remove('active');
  }
});