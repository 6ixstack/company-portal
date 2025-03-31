// Function to check if CSS is loaded
function checkCSSLoaded() {
  const styleSheets = document.styleSheets;
  let loaded = false;
  
  try {
    // Check if we can access the stylesheets
    for (let i = 0; i < styleSheets.length; i++) {
      if (styleSheets[i].cssRules) {
        loaded = true;
        break;
      }
    }
  } catch (e) {
    // If we can't access the stylesheets, they're probably loaded
    loaded = true;
  }
  
  return loaded;
}

// Function to handle CSS loading
function handleCSSLoading() {
  // Add css-loaded class when CSS is loaded
  if (checkCSSLoaded()) {
    document.body.classList.add('css-loaded');
  } else {
    // If not loaded, check again in a short while
    setTimeout(handleCSSLoading, 50);
  }
}

// Start checking when DOM is loaded
document.addEventListener('DOMContentLoaded', handleCSSLoading); 