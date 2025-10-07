// Generate animated diamond pattern
function createDiamondGrid() {
    const diamondGrid = document.getElementById('diamondGrid');
    
    const diamondSize = 16; // Size of each diamond
    const spacing = 24; // Spacing between diamonds
    
    // Create a grid that covers the entire screen and beyond
    const rows = Math.ceil(4000 / spacing); // Cover 4000px height
    const cols = Math.ceil(6000 / spacing); // Cover 6000px width
    
    // Create document fragment for better performance
    const fragment = document.createDocumentFragment();
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const diamond = document.createElement('div');
            diamond.className = 'diamond';
            
            // Create regular grid pattern
            const x = col * spacing;
            const y = row * spacing;
            
            diamond.style.left = x + 'px';
            diamond.style.top = y + 'px';
            diamond.style.width = diamondSize + 'px';
            diamond.style.height = diamondSize + 'px';
            
            // Add rotation to make them look like diamonds
            diamond.style.transform = 'rotate(45deg) translateZ(0)';
            
            fragment.appendChild(diamond);
        }
    }
    
    // Append all diamonds at once for better performance
    diamondGrid.appendChild(fragment);
}

// Initialize the diamond grid when the page loads
document.addEventListener('DOMContentLoaded', function() {
    createDiamondGrid();
    
    // Add click functionality to any file on the page
    const files = document.querySelectorAll('.ascii-file');
    const fileContents = document.querySelectorAll('.file-content');
    
    files.forEach((file, index) => {
        file.addEventListener('click', function() {
            // Toggle the expanded state
            file.classList.toggle('expanded');
            if (fileContents[index]) {
                fileContents[index].classList.toggle('expanded');
            }
        });
    });
});
