$(document).ready(function() {

    const paintings = [
        {
            dataSrc: "https://res.cloudinary.com/dyve8u6cx/image/upload/v1690736386/painting1-progressive_rlpti3.jpg",
            img: "placeholder.png",
            title: "When You're Not Looking",
            subtitle: "Acrylic Painting | Sold",
            description: `
                <p class='text-start description-text-paragraph'>Ancient statue. No face, no hands, existing naked. I am carried away, bewitched, bewildered in those spaces of absence. The mind is fleshing out the details, private fantasies, perversions glossed in.</p>
                <p class='text-start description-text-paragraph'>A distant beauty. I am not part of the story, still, I will take her body.</p>
                <p class='text-start description-text-paragraph'>Revealed, untouchable. Unreserved.</p>
                <p class='text-start description-text-paragraph'>Naked, devoid of romance.</p>
                <p class='text-start description-text-paragraph'>Of course, I desire to touch her. She lives in painting – a reality separate from mine. As I gaze dwelling and compelled, I think, I’d like to melt into hers.</p>
                <p class='text-start description-text-paragraph'>Woman, so distant. Obsessed with question, I confront our connection; unsure if she leads a life of her own, or rather solely exists for the frame, no mind, no heart of her own, she is merely a silhouette made from white paint.</p>
                `
        },
        {
            dataSrc:"https://res.cloudinary.com/dyve8u6cx/image/upload/v1690736387/painting2-progressive_mduenl.jpg",
            img: "placeholder.png",
            title: '"A Piece of Her Love Story"',
            subtitle: "Acrylic Painting | Sold",
            description: `
                <p class='text-start description-text-paragraph'>To make love. That is why we are here. To melt in his arms, to drown in his gaze, to stand naked in front of him and feel that this is where you belong. She is vulnerable and fragile in his presence. She stands naked in front of him and drops her armor to the ground.</p>
                <p class='text-start description-text-paragraph'>The next morning, she will wake up feeling something light is growing inside of her. And this will give her just enough fire to survive the day. Until she falls back to his arms again.</p>
            `
        },
        {
            dataSrc: "https://res.cloudinary.com/dyve8u6cx/image/upload/v1692567463/hades_wqlp7l.jpg",
            img: "placeholder.png",
            title: "Thank you for visiting!",
            subtitle: "UPCOMING | A TASTE OF HADES",
            description: `
                <p class='text-start description-text-paragraph'>Follow Azutika on Instagram <a class="azu-ig" href="https://instagram.com/azutika/" target="_blank">(@azutika)</a>, and see the creation of a new painting-poem collection - “A Taste of Hades”. Each original piece will be available for purchase. No reproductions will be made.</p>
                <p class='mt-5 hades-poem'>I feel like my body is tightened by ropes. Held by the grips of desire. Tightening me inwards. Tightening my organs to force out tears and a wail that I cannot shout out loud, it’s embarrassing. His presence in my mind is punishing my body, I carry him on me.</p>
                
            `
        },
        {
            dataSrc: "https://res.cloudinary.com/dyve8u6cx/image/upload/v1690736386/painting1-progressive_rlpti3.jpg",
            img: "placeholder.png",
            title: "Custom Orders",
            subtitle: "HOW TO ORDER",
            description: `
                <p class='description-text-paragraph'>For those who wish to see their own image on the black canvas, personal paintings can be ordered via email azutika.co@gmail.com</p>
                <p class='description-text-paragraph'>Custom painting price ranges from 3000 USD to 8000 USD depending on the painting size and amount of detail desired.</p>
                <p class='description-text-paragraph'>Questions are welcome via email and Instagram DMs <a class="azu-ig" href="https://instagram.com/azutika/" target="_blank">(@azutika)</a>.</p>
                <div class="mx-auto text-center mt-4 d-flex flex-column">
                    <a href="order.html" class='playlist'>ORDER NOW</a>
                </div>
                
            `
        },
        {
            dataSrc: "https://res.cloudinary.com/dyve8u6cx/image/upload/v1694557397/spotify_av9pur.jpg",
            img: "placeholder.png",
            title: "More from Azutika",
            subtitle: "SPOTIFY PLAYLISTS",
            description: `
                <p class='mx-auto col-12 col-md-8 text-center description-text-paragraph'>Listen to music curated by Azutika on Spotify.</p>
                <div class="mx-auto text-center mt-4 d-flex flex-column">
                    <a href="https://open.spotify.com/playlist/4mDQ5oG3UZ574FoliinCFq?si=11b3471d733b4750" class='playlist'>CLASSICAL</a>
                    <a href="https://open.spotify.com/playlist/0NDsPtAM6clWUWJjpLiEUW?si=ebf9b175fe3e476e" class='playlist'>ELECTRONIC</a>
                </div>
            `
        }
    ];

    let currentIndex = 0;
    const $painting = $('.painting');
    const $description = $('.description');
    const $poem = $('.poem');
    const $parent = $('.parent');
    const $titles = $('.titles');
    const mobileScreen = window.matchMedia("(max-aspect-ratio: 1/1)").matches;

    // Not sure
    function loadImage($imageElement) {
        const dataSrc = $imageElement.attr('data-src');
        if (dataSrc) {
            $imageElement.attr('src', dataSrc);
        }
    }
    
    // If mobile, section2 set to d-none
    // Function to check window size and adjust section2 display
     function adjustSection2Display() {
        if (mobileScreen) {
            $('.section2').css('display', 'none');
            $('body').css('overflow', 'hidden');
        } else {
            $('.section2').css('display', 'flex'); // Resets the display property for non-mobile view
        }
    }

    // Initial check
    adjustSection2Display();


    // When clicking next, painting updates with its description.
    function updatePainting() {
        const currentPainting = paintings[currentIndex];
        
        // Set data-src for the current painting
        $painting.attr('data-src', currentPainting.dataSrc);
        // Load the image for the current painting
        loadImage($painting);
        
        $description.find('.title').text(currentPainting.title);
        $description.find('.subtitle').text(currentPainting.subtitle);
        
        $description.find('.description-text').html(currentPainting.description);
    }

    // When clicked on painting, titles and poem fades out, description that had a hidden display, now appears.
    function showDescription() {
        // If mobile, section2 from d-none to d-flex
        if (mobileScreen) {
            $('.section2').css('display', 'flex');
            $('body').css('overflow', 'auto');
        }
        $description.css('pointer-events', 'auto') // Enable pointer events when showing
                .css('display', 'block')
                .animate({ opacity: 1 }, 2000);
        $poem.children('.monogram').each(function(i) {
            $(this).delay(100 * i).animate({ opacity: 0, bottom: '100vh' }, 1000);
        });
        $titles.animate({ opacity: 0 }, 1000);
        $('.instructions').animate({ opacity: 0 }, 1000);
        $('.instructions').css('animation', 'none');
        $poem.css('display', 'none');
    }
    
    // Poem-note functions
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

    $('.painting, .gallery-text, .azu').click(showDescription);


    $('.exit').click(function() {
        if (mobileScreen) {
            $('body').css('overflow', 'hidden');
        }
        $description.css('pointer-events', 'none')  // Disable pointer events when hiding
                .animate({opacity: 0}, 2000, function() {
                    $(this).css('display', 'none');
                });
        $poem.css('display', 'block');
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
                    <p>As I wrote this poem, sounding erotic, I thought that the reader must feel like they are being told about a sex scene.</p>
                    <p>But the reality of what is being described here is quite different, asexual.</p>
                    <p>As this poem is not quite what it seems, so are the paintings and their stories sitting alongside. Purposely left vague, grammatically enigmatic - they are inviting to co-create an image and play with perception.</p>
                    <p class="mt-5">( To begin the tour: close this window, then click on the painting. )</p>
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


