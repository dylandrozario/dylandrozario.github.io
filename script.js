// Minimal JS: only handle file expand toggle
document.addEventListener('DOMContentLoaded', function() {
    const files = document.querySelectorAll('.ascii-file');
    const fileContents = document.querySelectorAll('.file-content');
    files.forEach((file, index) => {
        file.addEventListener('click', function() {
            file.classList.toggle('expanded');
            if (fileContents[index]) fileContents[index].classList.toggle('expanded');
        });
    });
});
