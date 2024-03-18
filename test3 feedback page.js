<script>
document.addEventListener('DOMContentLoaded', function() {
    // Array of image URLs for each day of the week
    var images = [
        'https://mcusercontent.com/19daf3198c539f852c01e4e6e/images/9d95affd-4175-9296-359b-f77a056f10be.jpg',
        'https://mcusercontent.com/19daf3198c539f852c01e4e6e/images/a5fc7f6f-fe98-2b7d-fb40-59f71d102220.jpg',
        'https://mcusercontent.com/19daf3198c539f852c01e4e6e/images/b32eebf6-08c3-b1e3-b823-0f2b0b593b89.jpg',
        'https://mcusercontent.com/19daf3198c539f852c01e4e6e/images/39beb575-363a-fcac-e062-43fb4f3f946a.jpg',
        'https://mcusercontent.com/19daf3198c539f852c01e4e6e/images/3e69f835-f2be-7216-c620-e3473a7a71e8.jpg',
        'https://mcusercontent.com/19daf3198c539f852c01e4e6e/images/a92ab176-bce5-8088-afa8-adea2a3aaefe.jpg',
        'https://mcusercontent.com/19daf3198c539f852c01e4e6e/images/6df16f04-d1c1-2635-19e3-6975846c6856.jpg'
    ];

    // Get the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    var dayOfWeek = new Date().getDay();

    // Set the image source based on the current day of the week
    var imageElement = document.getElementById('daily-image');
    imageElement.src = images[dayOfWeek];
});
</script>