$(document).ready(function() {
    // Show the first page on load
    $('.image-container.page-1').show();

    // Pagination button click event
    $('.page-button').on('click', function() {
        const page = $(this).data('page');
        $('.image-container').hide(); // Hide all pages
        $('.image-container.page-' + page).show(); // Show the selected page

        $('.page-button').removeClass('active'); // Remove active class from all buttons
        $(this).addClass('active'); // Add active class to the clicked button
    });

    // Search functionality
    $('#search-bar').on('keyup', function() {
        let value = $(this).val().toLowerCase();
        $('.image-container:visible .box').filter(function() {
            $(this).toggle($(this).find('.link').text().toLowerCase().indexOf(value) > -1);
        });
    });

    // Filtering functionality
    $('.buttons').on('click', function() {
        let filterValue = $(this).attr('data-filter');
        if (filterValue === 'all') {
            $('.image-container:visible .box').show();
        } else {
            $('.image-container:visible .box').hide();
            $('.image-container:visible .box.' + filterValue).show();
        }
    });

    // Mobile menu toggle
    $('#menu').on('click', function() {
        $('.navbar').toggleClass('active');
    });
});


// Add this to your existing JavaScript
$(document).ready(function() {
    // ... (keep your existing code)

    // Responsive menu toggle
    $('.menu-btn').on('click', function() {
        $('nav ul').toggleClass('show');
    });

    // Close menu when a link is clicked
    $('nav ul li a').on('click', function() {
        $('nav ul').removeClass('show');
    });
});