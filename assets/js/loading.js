

        document.addEventListener("DOMContentLoaded", function () {
            // An array of image and video URLs to preload
            const assetUrls = [
                "https://res.cloudinary.com/dyve8u6cx/video/upload/v1702353346/IMG_9821_pm3v7s.mov",
                "https://res.cloudinary.com/dwadiagkb/image/upload/v1701660307/WDL_COVER_SMALL_uspex0.png",
                "https://res.cloudinary.com/dyve8u6cx/image/upload/v1702347240/interception1_aixcgj.png",
                "https://res.cloudinary.com/dyve8u6cx/image/upload/v1702347570/HOME_-_Copy_mxrhux.png",
                "https://res.cloudinary.com/dyve8u6cx/image/upload/v1702347776/HOME_g5dhju.png",
                "https://res.cloudinary.com/dyve8u6cx/image/upload/v1702348040/TATTOO_CEREMONY_dgs6c6.jpg",
                "https://res.cloudinary.com/dyve8u6cx/image/upload/v1702348129/ABOUT_lcmry6.jpg",
                "https://res.cloudinary.com/dyve8u6cx/image/upload/v1702352051/IMG_5838_p8lqze.png"
                // Add more asset URLs as needed
            ];
        
            // Counter to track loaded assets
            let loadedCount = 0;
            let totalAssets = assetUrls.length;
        
            // Function to update the loading bar
            function updateLoadingBar() {
                loadedCount++;
                const progress = (loadedCount / totalAssets) * 100;
                const loadingBar = document.querySelector(".loader-bar");
                loadingBar.style.width = progress + "%";
        
                if (loadedCount === totalAssets) {
                    // All assets are loaded, smoothly complete the loading bar animation
                    loadingBar.style.animation = "complete-progress 0.5s linear forwards";
                    // Hide the loading screen after the animation completes
                    setTimeout(function () {
                        document.querySelector(".loading-screen").style.display = "none";
                        // Display the content once the loading screen is hidden
                        document.querySelector(".content").style.display = "block";
                    }, 500); // Adjust the duration to match your animation time
                }
            }
        
            // Preload images and videos
            assetUrls.forEach(function (url) {
                const asset = new Image(); // Use Image for images, or create video elements for videos
                asset.src = url;
                asset.onload = updateLoadingBar;
                asset.onerror = updateLoadingBar; // Handle errors if needed
            });
        });
        