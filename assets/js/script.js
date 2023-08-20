$(document).ready(function() {
    const paintings = [
        {
            dataSrc: "https://res.cloudinary.com/dyve8u6cx/image/upload/v1690736386/painting1-progressive_rlpti3.jpg",
            img: "placeholder.png",
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
            dataSrc:"https://res.cloudinary.com/dyve8u6cx/image/upload/v1690736387/painting2-progressive_mduenl.jpg",
            img: "placeholder.png",
            title: '"A Piece of Her Love Story"',
            subtitle: "Acrylic Painting | Sold",
            description: [
                "To make love. That is why we are here. To melt in his arms, to drown in his gaze, to stand naked in front of him and feel that this is where you belong. She is vulnerable and fragile in his presence. She stands naked in front of him and drops her armor to the ground.",
                "The next morning, she will wake up feeling something light is growing inside of her. And this will give her just enough fire to survive the day. Until she falls back to his arms again."
            ]
        },
        {
            dataSrc: "https://res.cloudinary.com/dyve8u6cx/image/upload/v1692567463/hades_wqlp7l.jpg",
            img: "placeholder.png",
            title: "What’s Next",
            subtitle: "UPCOMING PAINTING COLLECTION | A TASTE OF HADES",
            description: [
                "Join our community by subscribing, and be among the first to witness the unveiling of our new collection. Each piece we offer is steeped in originality, with no reproductions available for purchase.",
                "“I feel like my body is tightened by ropes. Held by the grips of desire. Tightening me inwards. Tightening my organs to force out tears and a wail that I cannot shout out loud, it’s embarrassing. His presence in my mind is punishing my body, I carry him on me.”"
            ]
        },
        {
            dataSrc: "https://res.cloudinary.com/dyve8u6cx/image/upload/v1690736386/painting1-progressive_rlpti3.jpg",
            img: "placeholder.png",
            title: "Custom Orders",
            subtitle: "Custom painting price ranges from 1000USD to 3000USD depending on size",
            description: [
                "For those who wish to see their own image on the black canvas, personal paintings can be ordered via email azutika.co@gmail.com ",
                "Questions are welcome on Instagram DMs as well."
            ]
        },
        {
            dataSrc: "https://res.cloudinary.com/dyve8u6cx/image/upload/v1692567787/body_jpgur6.jpg",
            img: "placeholder.png",
            title: "More from Azu",
            subtitle: "SPOTIFY",
            description: [
                "Listen to music curated by Azu on Spotify."
            ]
        }
    ];

    let currentIndex = 0;
    const $painting = $('.painting');
    const $description = $('.description');
    const $poem = $('.poem');
    const $parent = $('.parent');
    const $titles = $('.titles');

    function loadImage($imageElement) {
        const dataSrc = $imageElement.attr('data-src');
        if (dataSrc) {
            $imageElement.attr('src', dataSrc);
        }
    }
    
    
    
    function updatePainting() {
        const currentPainting = paintings[currentIndex];
        
        // Set data-src for the current painting
        $painting.attr('data-src', currentPainting.dataSrc);
        // Load the image for the current painting
        loadImage($painting);
        
        $description.find('.title').text(currentPainting.title);
        $description.find('.subtitle').text(currentPainting.subtitle);
        
        const descriptionHtml = currentPainting.description.map(paragraph => `<p class="text-start description-text-paragraph">${paragraph}</p>`).join('');
        $description.find('.description-text').html(descriptionHtml);
    }
    

    function showDescription() {
        $description.css('pointer-events', 'auto') // Enable pointer events when showing
                .removeClass('not-active')
                .css('display', 'block')
                .animate({ opacity: 1 }, 2000);
        $poem.children('.monogram').each(function(i) {
            $(this).delay(100 * i).animate({ opacity: 0, bottom: '100vh' }, 1000);
        });
        $titles.animate({ opacity: 0 }, 1000);
    }
    

    function showOverlayAndPoem() {
        $('.dim-overlay').css({
            'display': 'block',
            'opacity': 0
        }).animate({opacity: 1}, 1000, function() {
            $('.poem-centered').css({
                'display': 'block',
                'opacity': 0
            }).animate({opacity: 1}, 1000);
        });
    }

    function hideOverlayAndPoem() {
        $('.poem-centered').animate({opacity: 0}, 1000, function() {
            $(this).css('display', 'none');
            $('.dim-overlay').animate({opacity: 0}, 1000, function() {
                $(this).css('display', 'none');
            });
        });
    }

    // Initialize the painting.
    updatePainting();

    // Event Listeners
    $('.next').click(function() {
        currentIndex = (currentIndex + 1) % paintings.length;
        updatePainting();
    });

    $('.painting, .gallery-text').click(showDescription);


    $('.exit').click(function() {
        $description.css('pointer-events', 'none')  // Disable pointer events when hiding
                .animate({opacity: 0}, 2000, function() {
                    $(this).css('display', 'none').addClass('not-active');
                });
        $poem.children('.monogram').each(function(i) {
            $(this).delay(100 * i).animate({opacity: 1, bottom: '0px'}, 1000);
        });
        $titles.animate({opacity: 1}, 300);
    });
    

    $poem.click(showOverlayAndPoem);

    $parent.on('click', '.view-note', function() {
        const elementsToFade = $('.mosquito-poem, .view-note-div');
        elementsToFade.fadeOut(function() {
            if ($(this).is(elementsToFade.last())) {
                const noteContentHtml = `
                <div class="note-content mx-auto mt-5 pt-5">
                    <p>As I wrote this poem, I was amused when I read it - sounding so erotic, I thought that the reader must feel like they are being told about a sex scene happening right in its moment.</p>
                    <p>However, the reality of what is being described here is quite different, asexual.</p>
                    <p>As this poem is not quite what it seems, so are the paintings and their stories hanging alongside, purposely left vague, grammatically enigmatic - they are inviting to co-create an image and play with perception.</p>
                </div>
                <p class="close-btn text-center mx-auto mt-5">CLOSE</p>
            `;
                $parent.append(noteContentHtml);
            }
        });
    });

    $parent.on('click', '.close-btn', function() {
        hideOverlayAndPoem();
        const mosquitoPoemHtml = `
            <div class="mosquito-poem mx-auto col-12 col-md-6">
            <p class="fst-italic">Mosquito</p>
            <p class="mb-0">Love.</p>
            <p class="mb-0">We love and have sex.</p>
            <p class="mb-0">I was listening to love and sex on a beautiful melodic soundtrack, the conversation was hypnotic, again, as if I was playing a scene in a movie. </p>
            <p class="mb-0">I spit out my water in my cup, and I said, I ate a mosquito.</p>
            <p class="mb-0">He said, I looked beautiful spitting.</p>
        </div>
        <div class="view-note-div mx-auto mt-5">
            <p class="text-center view-note">VIEW NOTE</p>
        </div>`;
        setTimeout(function() {
            $parent.empty().append(mosquitoPoemHtml);
        }, 1000);
    });
});
