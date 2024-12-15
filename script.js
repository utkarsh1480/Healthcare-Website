let appoinment = document.querySelector('.dicover');
appoinment.addEventListener('click', () =>{
window.location.href = 'appoinment.html';
});
try {
    let appoi = document.querySelector('Book');
appoi.addEventListener('click', () =>{
window.location.href = 'appoinment.html';
});
} catch (error) {
    console.log(error);
}

