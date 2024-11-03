function toggleDropdown() {
    const dropdown = document.getElementById("userDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    const dropdown = document.getElementById("userDropdown");
    if (!event.target.closest('.user-profile')) {
        dropdown.style.display = "none";
    }
}
