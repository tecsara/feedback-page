// JavaScript source code
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Array of image URLs
  var images = [
    'https://drive.google.com/file/d/1i14a6zov-KBOzTO1K_GmLnA-6ZOlp2GI/view?usp=drive_link',
    'https://drive.google.com/file/d/1osGurYUeFtEyj9UMRIwdwssGkO0iQ6Oj/view?usp=drive_link',
    'https://drive.google.com/file/d/1Jj0a5EYCyxi0v-YnPaTschpwhLVgRkPF/view?usp=drive_link',
    'https://drive.google.com/file/d/1-lEHQNQBQ6WfrbmI6WNuY7dnNkRrE1QR/view?usp=drive_link',
    'https://drive.google.com/file/d/1aBlqaHg0Qw-t4RYThX3Hu7hi47GeIooZ/view?usp=drive_link',
    'https://drive.google.com/file/d/18CiHO6VKZLC6ORPT2ZX-m-aQkRo7z7Ea/view?usp=drive_link',
    'https://drive.google.com/file/d/1LhPrXQ4d5DJtWx2uKc5xEtIlcAPuwAl1/view?usp=drive_link',
    'https://drive.google.com/file/d/1qqz4KtiQGqTReNxz8AkdSN5Nmlwmd875/view?usp=drive_link',
    'https://drive.google.com/file/d/109i4WfLBB_HEWJaKN--nt2of5ItbcUws/view?usp=drive_link',
    'https://drive.google.com/file/d/1EPaxjcdpT_prXhDraWzAUjLh-yFnXXo6/view?usp=drive_link',
    'https://drive.google.com/file/d/1MMNtXgE9PSOTqiZuls59xkQGVepg7L59/view?usp=drive_link',
    'https://drive.google.com/file/d/1F3xO2m--sDLKuROJRCjnkZOnhFKvequ6/view?usp=drive_link',
    'https://drive.google.com/file/d/1pnDullTgT-fLRl-6IagYjpYdUso669Xe/view?usp=drive_link',
    'https://drive.google.com/file/d/1NTgZb7zzPgeyby31ZDHlc1d2Irs0YoeF/view?usp=drive_link',
    'https://drive.google.com/file/d/1rjZFW4EY_kY-YdCqI0sA2LQuEWHbRPAB/view?usp=drive_link',
    'https://drive.google.com/file/d/1l0tgwDDRysGn--juU9vty_OOCTGFkl_Q/view?usp=drive_link',

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