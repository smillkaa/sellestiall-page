$(document).ready(function(){
    // Gallery slideshow functionality

    // Paintings array of objects
    const paintings = [
        {
            img: "https://res.cloudinary.com/dyve8u6cx/image/upload/v1690736386/painting1-progressive_rlpti3.jpg",
            title: "When You're Not Looking",
            subtitle: "Acrylic Painting | Sold",
            description: [
                "Ancient statue. No face, no hands, existing naked. I am carried away, bewitched, bewildered in those spaces of absence. The mind is fleshing out the details, private fantasies, perversions glossed in. ",
                "A distant beauty. I am not part of the story, still, I will take her body.",
                "Revealed, untouchable. Unreserved, untouchable. Unreserved, accidental.",
                "Naked, devoid of romance.",
                "Of course, I desire to touch her. She lives in painting – a reality separate from mine. As I gaze, as I dwell, compelled, I think, I’d like to melt into hers.",
                "Woman, so distant. Obsessed with question, I confront our connection; unsure if she leads a life of her own, or rather solely exists for the frame, no mind, no heart of her own, she is merely a silhouette made from white paint."

            ]
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
            img: "IMG_4213-2.png",
            title: "Follow Azu on Instagram and be the first to know",
            subtitle: "@azutika",
            description: [
                "Join our community by subscribing, and be among the first to witness the unveiling of our new collection. Each piece we offer is steeped in originality, with no reproductions available for purchase.",
                "For those seeking a personal touch, custom orders are welcome—whether to be showcased in a future collection or cherished in private. Await with us: a new era of artistry is on the horizon.",
                "Yours truly, Azu"
            ]
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
            descriptionHtml += `<p class="text-start description-text-paragraph">${paragraph}</p>`;
        });
        
        $('.description .description-text').html(descriptionHtml);  // Replace content of gallery-text div with new paragraphs
    }
    
    

    // Event listener when clicked next
    $('.next').click(function() {
        currentIndex = (currentIndex + 1) % paintings.length; // increment the index and wrap around if needed
        updatePainting();
    });
    
    // Animations
    
    // Set the initial opacity and pointer-events for .description
    $('.description').css({opacity: 0, display: 'none'}).addClass('not-active');

    function showDescription() {
        // Fade in the description div
        $('.description').removeClass('not-active').css('display', 'block').stop().animate({ opacity: 1 }, 2000);

        // Fade out and slide up the poem and titles div
        $('.poem').children('.monogram').each(function(i) {
            $(this).stop().delay(100 * i).animate({ opacity: 0, bottom: '100vh' }, 1000);
        });
        $('.titles').stop().animate({ opacity: 0 }, 1000);
    }

    // When the element with class showdisplay is clicked
    $('.showdisplay').click(showDescription);

    // When hovering on the painting, description appears
    $('.painting, .gallery-text').hover(showDescription);
    
    $('.exit').click(function() {
        $('.description').stop().animate({opacity: 0}, 2000, function() {
            $(this).css('display', 'none').addClass('not-active');
        });

        // Fade in and slide down the poem and titles div over 1000ms using .animate()
        $('.poem').children('.monogram').each(function(i) {
            $(this).stop().delay(100 * i).animate({opacity: 1, bottom: '0px'}, 1000);
        });
        $('.titles').stop().animate({opacity: 1}, 300);
        
    });

    // Function to show the dim overlay and centered poem
    function showOverlayAndPoem() {
        $('.dim-overlay').css({
            'display': 'block',
            'opacity': 0
        }).stop(true, true).animate({opacity: 1}, 1000, function() {
            $('.poem-centered').css({
                'display': 'block',
                'opacity': 0
            }).stop(true, true).animate({opacity: 1}, 1000);
        });
    }

    // Function to hide the dim overlay and centered poem
    function hideOverlayAndPoem() {
        $('.poem-centered').stop(true, true).animate({opacity: 0}, 1000, function() {
            $(this).css('display', 'none');
            $('.dim-overlay').stop(true, true).animate({opacity: 0}, 1000, function() {
                $(this).css('display', 'none');
            });
        });
    }

    // Click event to show dim overlay and centered poem
    $('.poem').click(function(event) {
        event.stopPropagation();
        showOverlayAndPoem();
    });

    // Click event on the dimmed overlay to hide them
    $('.dim-overlay').click(function() {
        hideOverlayAndPoem();
    });

    // Click event on the poem-centered to hide them
    $('.poem-centered').click(function(event) {
        event.stopPropagation();
        hideOverlayAndPoem();
    });


    // View note animation

    var closeButtonHTML = `
        <div class="mx-auto mt-5">
            <p class="text-center close-note">Close</p>
        </div>`;

    var viewNoteButtonHTML = `
        <div class="mx-auto mt-5">
            <p class="text-center view-note">View Note</p>
        </div>`;
        
    var mosquitoPoemContent = $('.mosquito-poem').prop('outerHTML');

 // Define the HTML content for the note
var noteContent = `
<div class="note-content mx-auto mt-5 pt-5">
    <p>As I wrote this poem, I was amused when I read it - sounding so erotic, I thought that the reader must feel like they are being told about a sex scene happening right in its moment.</p>
    <p>However, the reality of what is being described here is quite different, asexual.</p>
    <p>As this poem is not quite what it seems, so are the paintings and their stories hanging alongside, purposely left vague, grammatically enigmatic - they are inviting to co-create an image and play with perception.</p>
</div>
`;

var closeButtonHTML = `
<div class="mx-auto mt-5">
    <p class="text-center close-note">CLOSE</p>
</div>
`;


$('.view-note').click(function(event) {
    event.stopPropagation();
    
    // Fade out the entire .parent div
    $('.parent').fadeOut(400, function() {
        // This callback ensures actions are taken after the fade out completes

        // Replace the content of the parent with the note and close button
        $(this).empty().append(noteContent + closeButtonHTML);
        
        // Fade in the parent div with the new content
        $(this).fadeIn(400);
    });
});

// And when you close the note, revert back to the mosquito-poem

$(document).on('click', '.close-note', function() {
    // Fade out the parent div containing the note and close button
    $('.parent').fadeOut(400, function() {
        // Once faded out, revert back to the mosquito-poem
        $(this).empty().append(mosquitoPoemContent + viewNoteButtonHTML);
        
        // Fade the parent div back in with the mosquito-poem
        $(this).fadeIn(400);
    });
});


    
});




