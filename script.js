 document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("order-form");
    const popup = document.getElementById("popup-notification");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        popup.style.display = "block";
        popup.style.opacity = "1"; 
        
        form.reset(); 

        setTimeout(function() {
            popup.style.opacity = "0";
            setTimeout(function() {
                popup.style.display = "none"; 
            }, 500); 
        }, 3000); 
    });
});
// In your main page JavaScript
document.getElementById('submitBtn').addEventListener('click', function() {
  // Assuming form validation is done, redirect to the order confirmation page
  window.location.href = 'index.html';
});

