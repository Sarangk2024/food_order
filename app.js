let images_dt = [
    {
        title : "THE CHICKEN <br> BURGER",
        price : "$12.90",
        MRP : "$24",
        calorie : 7845,
        fat : 98 ,
        protein : 112
    },
    {
        title : "THE PINK <br> BURGER",
        price : "$18.90",
        MRP : "$38",
        calorie : 4512,
        fat : 65,
        protein : 78
    },
    {
        title : "THE BLACK <br> BURGER",
        price : "$10.90",
        MRP : "$18",
        calorie : 6545,
        fat : 115 ,
        protein : 56
    },
    {
        title : "THE RED <br> BURGER",
        price : "$11.90",
        MRP : "$20",
        calorie : 9845,
        fat : 68 ,
        protein : 86
    },
    {
        title : "THE GREEN <br> BURGER",
        price : "$13.90",
        MRP : "$26",
        calorie : 1256,
        fat : 45 ,
        protein : 123
    },
    {
        title : "THE TORNADO <br> BURGER",
        price : "$18.90",
        MRP : "$38",
        calorie : 5678,
        fat : 92 ,
        protein : 99
    },
    {
        title : "THE COMBO <br> BURGER",
        price : "$9.90",
        MRP : "$17",
        calorie : 3245,
        fat : 49,
        protein : 78
    },
]


let index = 0;
let len = Array.from(document.getElementsByClassName('main_imgs')).length * 310;
let images_off = () => {
    Array.from(document.getElementsByClassName('main_imgs')).forEach((el) => {
        el.style.width = "35%"; 
        el.style.filter = "blur(1.5px)"; 
    })
}
let icon_off = () => {
    Array.from(document.getElementsByClassName('pagi_img')).forEach((el) => {
        el.style.transform = "unset"; 
        el.style.opacity = ".3"; 
    })
}

document.getElementsByClassName('bi-chevron-right')[0].addEventListener('click', () => {
    index +=  310;
    if (index > (len)-310 ) {
        index = (len)-310;
    }
    document.getElementsByClassName('images')[0].scrollLeft = index;
    images_off();
    console.log(index)
    document.getElementsByClassName('main_imgs')[index/310].style.width = "60%";
    document.getElementsByClassName('main_imgs')[index/310].style.filter = "blur(0px)"; 
    document.getElementsByClassName('title')[0].innerHTML = images_dt[(index/310)].title;
    document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;
    document.getElementById('calorie').innerText = images_dt[(index/310)].calorie;
    document.getElementById('fat').innerText = images_dt[(index/310)].fat;
    document.getElementById('protien').innerText = images_dt[(index/310)].protein;
    icon_off();
    document.getElementsByClassName('pagi_img')[(index/310)].style.transform = "scale(1.1)"
    document.getElementsByClassName('pagi_img')[(index/310)].style.opacity = 1;
})


document.getElementsByClassName('bi-chevron-left')[0].addEventListener('click', () => {
    index -=  310;
    if (index < 0) {
        index = 0;
    }
    document.getElementsByClassName('images')[0].scrollLeft = index;
    images_off();
    console.log(index)
    document.getElementsByClassName('main_imgs')[index/310].style.width = "60%";
    document.getElementsByClassName('main_imgs')[index/310].style.filter = "blur(0px)"; 
    document.getElementsByClassName('title')[0].innerHTML = images_dt[(index/310)].title;
    document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;
    document.getElementById('calorie').innerText = images_dt[(index/310)].calorie;
    document.getElementById('fat').innerText = images_dt[(index/310)].fat;
    document.getElementById('protien').innerText = images_dt[(index/310)].protein;
    icon_off();
    document.getElementsByClassName('pagi_img')[(index/310)].style.transform = "scale(1.1)"
    document.getElementsByClassName('pagi_img')[(index/310)].style.opacity = 1;
})

Array.from(document.getElementsByClassName('pagi_img')).forEach((el , i) => {
    el.addEventListener('click', ()=> {

        index  = 310 * i;

        document.getElementsByClassName('images')[0].scrollLeft = index;
        images_off();
        console.log(index)
        document.getElementsByClassName('main_imgs')[index/310].style.width = "60%";
        document.getElementsByClassName('main_imgs')[index/310].style.filter = "blur(0px)"; 
        document.getElementsByClassName('title')[0].innerHTML = images_dt[(index/310)].title;
        document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;
        document.getElementById('calorie').innerText = images_dt[(index/310)].calorie;
        document.getElementById('fat').innerText = images_dt[(index/310)].fat;
        document.getElementById('protien').innerText = images_dt[(index/310)].protein;
        icon_off();
        document.getElementsByClassName('pagi_img')[(index/310)].style.transform = "scale(1.1)"
        document.getElementsByClassName('pagi_img')[(index/310)].style.opacity = 1;
    });
})









// JavaScript for Video Modal

// JavaScript for Play Video Modal
document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.querySelector('.btns'); // Target the button with the 'btns' class
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const closeModal = document.querySelector('.close-modal');
    const videoURL = 'https://www.youtube.com/embed/3JZ_D3ELwOQ';
    // Open modal and play video
    playButton.addEventListener('click', () => {
        videoFrame.src = videoURL + '?autoplay=1'; // Add autoplay to URL
        videoModal.style.display = 'block';
    });

    // Close modal and stop video
    closeModal.addEventListener('click', () => {
        videoFrame.src = ''; // Clear the src to stop the video
        videoModal.style.display = 'none';
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', (event) => {
        if (event.target == videoModal) {
            videoFrame.src = ''; // Clear the src to stop the video
            videoModal.style.display = 'none';
        }
    });
});




//for menu animation food

// Select all menu items and their details
const menuItems = document.querySelectorAll('.menu-item');
const menuDetails = document.querySelectorAll('.menu-details');

// Function to add animation class on load
function animateMenuItems() {
    menuItems.forEach((item, index) => {
        // Select the image and details for the current menu item
        const img = item.querySelector('img');
        const details = item.querySelector('.menu-details');

        // Add a delay for each item
        setTimeout(() => {
            item.style.opacity = 1; // Make the entire menu item visible
            img.style.opacity = 1; // Make the image visible
            details.style.opacity = 1; // Make the details visible
            img.classList.add('slide-in'); // Trigger animation for image
            details.classList.add('slide-in'); // Trigger animation for details
        }, index * 200); // 200ms delay for each item (adjust as needed)
    });
}

// Trigger the animation when the page loads
window.onload = animateMenuItems;

