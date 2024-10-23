const buy_btn = document.querySelectorAll(".buy_btn");
const buy_window = document.getElementById("buy_window");
const click_to_hide = 

buy_btn.forEach(function(buy_btn) {
    buy_btn.addEventListener('click', function() {
        buy_window.style.display = "block";
    });
});
