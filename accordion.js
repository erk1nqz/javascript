// Get all elements with the class "accordion-item" and store them in the "acc" variable.
let acc = document.getElementsByClassName("accordion-item");

// Iterate through each element with the class "accordion-item".
for (let i = 0; i < acc.length; i++) {
    // Add a click event listener to the current element in the loop.
    acc[i].addEventListener("click", function() {
        // When an element with class "accordion-item" is clicked:

        // Toggle the class "active" on the clicked element. If it's already active, it will remove the class; otherwise, it will add it.
        this.classList.toggle("active");

        // Get the next sibling of the clicked element, which should be the panel you want to expand or collapse.
        let panel = this.nextElementSibling;

        // Check if the panel has a "maxHeight" style property (if it's currently expanded).
        if (panel.style.maxHeight) {
            // If it has "maxHeight," set it to "null" (collapsing the panel).
            panel.style.maxHeight = null;
        } else {
            // If it doesn't have "maxHeight," set it to the height of the panel's content, thus expanding it.
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
