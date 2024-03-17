// JavaScript source code
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Array of image URLs
  var images = [
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1509205477838-a534e43a849f?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    

    // Add more image URLs as needed
  ];
  
  // Get today's date
  var today = new Date();
  var dayOfYear = today.getFullYear() * 1000 + (today.getMonth() + 1) * 100 + today.getDate();

  // Use the day of the year as the seed for consistent randomization
  Math.seedrandom(dayOfYear.toString());

  // Randomly select an image
  var randomIndex = Math.floor(Math.random() * images.length);
  var selectedImage = images[randomIndex];

  // Set the selected image as the source for the image element
  document.getElementById('daily-image').src = selectedImage;
});
</script>