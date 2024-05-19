// js/scripts.js

//all section button
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-100%';
    } else {
        sidebar.style.left = '0';
    }
}

//show more photos button
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.show-more-photos').addEventListener('click', function () {
        document.querySelector('.additional-photos').classList.toggle('d-none');
        this.textContent = this.textContent === 'Show More Photos' ? 'Show Less Photos' : 'Show More Photos';
    });
});
