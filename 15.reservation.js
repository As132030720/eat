
document.addEventListener('DOMContentLoaded', function() {

    const reservationContainer = document.querySelector('.reservation');


    reservationContainer.addEventListener('mouseenter', function() {
        reservationContainer.style.transition = 'background-color 0.5s ease';
        reservationContainer.style.backgroundColor = 'lightblue';
    });
    


    reservationContainer.addEventListener('mouseleave', function() {

        reservationContainer.classList.add('mouse-out');

   
        setTimeout(function() {
            reservationContainer.classList.remove('mouse-out');
        }, 1000); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.querySelector('.reservation');

    reservationForm.addEventListener('mouseleave', function() {
        reservationForm.style.backgroundColor = 'rgba(255, 192, 203, 0.91)';
    });
});



