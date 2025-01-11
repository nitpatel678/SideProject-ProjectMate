// Get elements
const uploadButton = document.getElementById("uploadButton");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.getElementById("closeBtn");

// Show the modal when the "Upload a Project" button is clicked
uploadButton.onclick = function() {
    popupForm.style.display = "block";
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    popupForm.style.display = "none";
}

// Close the modal if the user clicks outside of the popup content
window.onclick = function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
}



document.getElementById("findProjectButton").addEventListener("click", function() {
    // Hide the Upload button
    document.getElementById("uploadButton").style.display = "none";
    
    // Show the search bar
    document.getElementById("searchContainer").style.display = "block";
});

function searchProject() {
    // Get the search keyword entered by the user
    const keyword = document.getElementById("searchKeyword").value;
    
    if (keyword.trim() !== "") {
        // Redirect to a search results page with the search keyword as a URL parameter
        window.location.href = "/search_results?keyword=" + encodeURIComponent(keyword);
    } else {
        alert("Please enter a keyword to search.");
    }
}

// Select the elements
const findProjectButton = document.querySelector("#findProjectButton");
const searchContainer = document.querySelector("#searchContainer");
const searchButton = document.querySelector("#searchContainer button");

// Event Listener for Find a Project button
findProjectButton.addEventListener("click", function() {
    // Toggle visibility of search bar when Find a Project is clicked
    searchContainer.classList.toggle("visible");
});

// Detect scroll to hide search container when scrolling down and show when back at the top
window.addEventListener("scroll", function() {
    if (window.scrollY > 50) { // when scrolled down more than 50px
        searchContainer.classList.remove("visible"); // Hide search bar
    } else {
        searchContainer.classList.add("visible"); // Show search bar when at the top
    }
});


document.getElementById('searchButton').addEventListener('click', function() {
    var query = document.getElementById('searchQuery').value.trim();
    
    if (query) {
      // This redirects to NewTry/search.html with the query parameter
      window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    } else {
      alert("Please enter a search term.");
    }
  });
  