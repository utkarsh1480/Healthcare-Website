
try {
    let btn = document.querySelector('.app');
    let widthElement = document.querySelector('.extradiv');
    let intervalId; // Variable to hold the interval ID
    function toggleColor() {
        if (widthElement.classList.contains('yellow')) {
            widthElement.classList.remove('yellow');
            widthElement.classList.add('green');
        } else {
            widthElement.classList.remove('green');
            widthElement.classList.add('yellow');
        }
    }

    // Add an event listener for mouseenter
    btn.addEventListener("mouseenter", () => {
        widthElement.classList.add('yellow'); // Add yellow class
        intervalId = setInterval(toggleColor, 1000); // Start toggling colors every second
        console.log('Mouse entered .app - Color change started');
    });

    // Add an event listener for mouseleave
    btn.addEventListener("mouseleave", () => {
        clearInterval(intervalId); // Stop the color change
        widthElement.classList.remove('yellow'); // Remove yellow class
        // widthElement.classList.add('green');
        intervalId = setInterval(toggleColor, 1000);
        // Remove green class
        console.log('Mouse l');
    });
} catch (error) {
    console.log(`${error}`)
}
// Function to toggle the class

// for services and about dropdpwn

let serve = document.querySelector('.serve');
let aboutus = document.querySelector('.hi');
try {

    function hover() {
        if (serve.classList.contains('servei')) {
            // serve.classList.remove('servei');
            serve.classList.add('hi');
        } else {
            serve.classList.remove('hi');
            serve.classList.remove('servei');

        }
    }

    aboutus.addEventListener('mouseenter', () => {
        console.log("hi");
        serve.classList.add('servei');
        hover();
    });
    aboutus.addEventListener('mouseleave', () => {
        serve.classList.remove('servei');
        hover();

    });

} catch (error) {
    console.log("hi theere");
    alert(error);
    console.log(error);
}

//  Services dropdoen
let services_point = document.querySelector('.service'); //service button selection
console.dir(services_point);
let services = document.querySelector('.serveices');// service inner div seevtion

try {

    function hoverr() {
        if (services.classList.contains('servi')) {
            services.classList.add('serveices');
        } else {
            services.classList.add('serveices');
            services.classList.remove('servi');

        }
    }



    services_point.addEventListener("mouseenter", () => {
        console.log("hello world");
        services.classList.add('servi');
        hoverr();
    });
    services_point.addEventListener("mouseleave", () => {
        services.classList.remove('servi');
        hoverr();
    });

} catch (error) {
    console.log(`${error}`);
}

let contact = document.querySelector('.contact');
let contact_inner = document.querySelector('.contactInner');
try {

    function contactcall() {
        if (contact_inner.classList.contains('contact_info')) {
            contact_inner.classList.add('contactInner');
        } else {
            contact_inner.classList.add('contactInner');
            contact_inner.classList.remove('contact_info');

        }
    }




    contact.addEventListener('mouseenter', () =>{
        console.log("hello");
        contact_inner.classList.add('contact_info');
        contactcall();
    });
    contact.addEventListener('mouseleave',() =>{
        contact_inner.classList.remove('contact_info');
        contactcall();
    });

} catch (error) {
    console.log(`Error : ${error}`);
}


                      // playvideo
// let img = document.querySelector('.image');
// img.addEventListener('click', () =>{
//     console.log("hello");
//     let video = document.querySelector('.background-video');
//     video.play();
// });
// img.addEventListener('click', () =>{
//     let video = document.querySelector('.background-video');
//     video.pause();
// });
let img = document.querySelector('.image');
let video = document.querySelector('.background-video');
let videodi = document.querySelector('.videodiv');
img.addEventListener('click', () => {
    console.log("Image clicked"); 
    // Show the video element
    video.style.display = 'block';
    // Play the video
    video.play().then(() => {
        console.log("Video is playing"); // Debugging log
    }).catch(error => {
        console.error("Error playing video:", error); // Log any errors
    });
});
 

