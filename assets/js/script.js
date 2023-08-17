$(document).ready(function(){
    // Gallery slideshow functionality

    // Paintings array of objects
    const paintings = [
        {
            img: "https://res.cloudinary.com/dyve8u6cx/image/upload/v1690736386/painting1-progressive_rlpti3.jpg",
            title: "When You're Not Looking",
            subtitle: "Acrylic Painting | Sold",
            description: ["Description for the second painting"]
        },
        {
            img: "https://res.cloudinary.com/dyve8u6cx/image/upload/v1690736387/painting2-progressive_mduenl.jpg",
            title: '"A Piece of Her Love Story"',
            subtitle: "Acrylic Painting | Sold",
            description: [
                "To make love. That is why we are here. To melt in his arms, to drown in his gaze, to stand naked in front of him and feel that this is where you belong. She is vulnerable and fragile in his presence. She stands naked in front of him and drops her armor to the ground.",
                "The next morning, she will wake up feeling something light is growing inside of her. And this will give her just enough fire to survive the day. Until she falls back to his arms again."
            ]
        },
        {
            img: "",
            title: "Explore More",
            subtitle: "",
            description: [""]
        },
        {
            img: "",
            title: "Explore More",
            subtitle: "",
            description: [""]
        }
    ];

    let currentIndex = 0;
    $('.painting').attr('src', paintings[0].img);
    updatePainting();  // <-- Call the updatePainting function here

    // Function to update painting img and description when clicked next
    function updatePainting() {
        $('.painting').attr('src', paintings[currentIndex].img);
        $('.description .title').text(paintings[currentIndex].title);
        $('.description .subtitle').text(paintings[currentIndex].subtitle);
    
        var descriptionHtml = "";
        paintings[currentIndex].description.forEach(paragraph => {
            descriptionHtml += `<p class="text-start gallery-text">${paragraph}</p>`;
        });
    
        $('.description').find(".gallery-text").remove();  // Remove previous description paragraphs
        $('.description > div:first-child').after(descriptionHtml);  // Add the new paragraphs
    }
    

    // Event listener when clicked next
    $('.next').click(function() {
        currentIndex = (currentIndex + 1) % paintings.length; // increment the index and wrap around if needed
        updatePainting();
    });
    
    // Animations
    
    // Set the initial opacity for .description
    $('.description').css({opacity: 0, display: 'none'});

    function showDescription() {
        // Fade in the description div
        $('.description').css('display', 'block').stop().animate({ opacity: 1 }, 2000);

        // Fade out and slide up the poem and titles div
        $('.poem').children('.monogram').each(function(i) {
            $(this).stop().delay(100 * i).animate({ opacity: 0, bottom: '100vh' }, 1000);
        });
        $('.titles').stop().animate({ opacity: 0 }, 1000);
    }

    // When the element with class showdisplay is clicked
    $('.showdisplay').click(showDescription);

    // When hovering on the painting, description appears
    $('.painting').hover(showDescription);
    
    $('.exit').click(function() {
        $('.description').stop().animate({opacity: 0}, 2000, function() {
            $(this).css('display', 'none');
        });

        // Fade in and slide down the poem and titles div over 1000ms using .animate()
        $('.poem').children('.monogram').each(function(i) {
            $(this).stop().delay(100 * i).animate({opacity: 1, bottom: '0px'}, 1000);
        });
        $('.titles').stop().animate({opacity: 1}, 300);
        
    });
});