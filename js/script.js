var instantAds = [{
        "name": "versionName_txt",
        "default": ""
    },
    {
        "name": "URL_type_txt",
        "default": ""
    },
    {
        "name": "carMake_txt",
        "default": '{"carWidth":310,"pos1":[-320,237],"pos2":[-157,237],"pos3":[310,237],"scale":1,"driveInTime":1.5,"driveOutTime":1.5,"stoppedTime":0.5,"tireRotIn":120,"tireRotOut":560,"frontWheelPos":[228,63],"rearWheelPos":[31,63],"frontWheelScale":0.30,"rearWheelScale":0.30}'
    },
    {
        "name": "carMakeTxt_size_hex_face_lineheight_spacing_xy",
        "default": '{"carWidth":255,"pos1":[170,237],"pos2":[-23,237],"pos3":[-500,237],"scale1":0.75,"scale2":1,"scale3":1.5,"driveInTime":1.5,"driveOutTime":1.75,"stoppedTime":0.85,"tireRotIn":-720,"tireRotOut":-720,"frontWheelPos":[118,68],"rearWheelPos":[230,61],"frontWheelScale":[0.20,0.34],"rearWheelScale":[0.12,0.265]}'
    },
    {
        "name": "carModel_txt",
        "default": "Q5"
    },
    {
        "name": "carModelTxt_size_hex_face_lineheight_spacing_xy",
        "default": "#ef243c"
    },
    {
        "name": "F1_headline_txt",
        "default": "Reflect on<br>the past."
    },
    {
        "name": "F1_headlineTxt_size_hex_xy",
        "default": "16|#FFF|0,385"
    },
    {
        "name": "F2_headline_txt",
        "default": "Celebrate<br>the future."
    },
    {
        "name": "F2_headlineTxt_size_hex_xy",
        "default": "16|#FFF|0,385"
    },
    {
        "name": "F3_headline_txt",
        "default": "Season&rsquo;s<br>greetings<br>from Audi."
    },
    {
        "name": "F3_headlineTxt_size_hex_xy",
        "default": "16|#FFF|0,375"
    },
    {
        "name": "cta_txt",
        "default": "Begin your<br>journey >"
    },
    {
        "name": "ctaTxt_size_hex_face_lineheight_spacing_xy",
        "default": "12|#FFF|'audi-extendedbold'|14|auto|0,510"
    },
    {
        "name": "F4_legal_txt",
        "default": "true"
    },
    {
        "name": "replayTxt_size_hex_xy",
        "default": "9|#FFF|18,16"
    },
    {
        "name": "clicktag1_url",
        "default": "https://www.audioffers.com/"
    },
    {
        "name": "background_img",
        "default": "images/2021_SeoA_Upper_F1_160x600.jpg"
    },
    {
        "name": "logo_img",
        "default": "images/21_SeoA_ringsLogo_160x600_2x.png"
    },
    {
        "name": "promoLogo_img",
        "default": "images/21_SeoA_promoLogo_160x600_2x.png"
    },
    {
        "name": "carIMG",
        "default": "images/2021_SeoA_Upper_F2_160x600.jpg"
    },
    {
        "name": "carShimmerIMG",
        "default": "images/2021_SeoA_Upper_F3_160x600.jpg"
    },
    {

        "name": "richload_main",
        "default": "Audi_SeoA_National_2019_160x600_RL"
    },
    {
        "name": "richload_bkgdAnime",
        "default": "160x600_SeoA_Animation_BG"
        
    }
]

var length = instantAds.length,
    variables = {};
for (var i = 0; i < length; i++) {
    var key = instantAds[i].name;
    var value = instantAds[i].default;

    variables[key] = value;
}


var imageArray = new Array(),
    loadedImgs = 0,
    checkTimer,
    adWidth,
    adHeight,
    jsCheck,
    F1,
    F2,
    F3,
    f3_bg_image,
    cta_txt,
    fontsLoaded = false,
    F1_headline_txt,
    F2_headline_txt,
    F3_headline_txt,
    // car_img_cdn_path="https://cdn.flashtalking.com/135365/SeoA_Car_Images_2021_CrM/",
    // local cdn image path 
    //car_img_cdn_path="../../../images_for_cdn/",
    showStaticEndframe = false,
    showSplitTextFade = false;


var tl = gsap.timeline();
gsap.config({
    force3D: false,
});

// The following config objects will be overwritten by instantAd/dybnamic version data
// CONFIG_CAR_SIDE = variables.carMake_txt
// CONFIG_CAR_3Q = variables.carMakeTxt_size_hex_face_lineheight_spacing_xy

var CONFIG_CAR_SIDE = {
    carWidth: 221.5,
    pos1: [-500, 65],
    pos2: [40, 65],
    pos3: [310, 65],
    scale: 1,
    driveInTime: 2,
    driveOutTime: 1.2,
    stoppedTime: 0.5,
    tireRotIn: 1080,
    tireRotOut: 720,
    frontWheelPos: [163, 43],
    rearWheelPos: [23, 43],
    frontWheelScale: .23,
    rearWheelScale: .23
}

var CONFIG_CAR_3Q = {
    carWidth: 221.5,
    pos1: [330, 65],
    pos2: [40, 65],
    pos3: [-500, 65],
    scale1: .5,
    scale2: 1,
    scale3: 1.8,
    driveInTime: 1.2,
    driveOutTime: 1.2,
    stoppedTime: 0.5,
    tireRotIn: -720,
    tireRotOut: -720,
    frontWheelPos: [97, 54],
    rearWheelPos: [195, 50],
    frontWheelScale: [.22, .31],
    rearWheelScale: [.13, .25]
}

window.onload = function() {
    initializeAPI();

}

WebFont.load({
    custom: {
        families: ['audi-extendedbold', 'audi-normal'],
        urls: ['css/style.css']
    },
    active: function() {
        fontsLoaded = true;
    },
    inactive: function() {
        console.log('Error loading custom font: starting ad with fallback fonts')
        fontsLoaded = true;
    }
});

function initializeAPI() {
    checkTimer = setInterval(checkAPI, 100);
    /*myFT.on("richload", function() {
        myFT.on("instantads", function() {
            checkTimer = setInterval(checkAPI, 100);
        });
    });*/
}

var checkAPI = function() {
    clearInterval(checkTimer);
    setInstantAds();
    /*if (myFT.richloadsLoaded == true && myFT.instantAdsLoaded == true && fontsLoaded == true) {    
        
    }*/
}

function setInstantAds() {
    try {
        adWidth = 160;
        adHeight = 600;

        CONFIG_CAR_SIDE = JSON.parse(variables.carMake_txt);
        CONFIG_CAR_3Q = JSON.parse(variables.carMakeTxt_size_hex_face_lineheight_spacing_xy);


        ia_showStaticEndframe = variables.F4_legal_txt;
        ia_showStaticEndframe = ia_showStaticEndframe.replace(/\s+/g, '-').toLowerCase();
        if (ia_showStaticEndframe == 'true') {
            showStaticEndframe = true;
        } else {
            showStaticEndframe = false;
        }


        //FRAME 1 START
        F1 = document.createElement("div");
        F1.id = "F1_cont";
        F1.style.position = "absolute";
        F1.style.left = "0px";
        F1.style.top = "0px";
        F1.style.width = adWidth + "px";
        F1.style.height = adHeight + "px";
        F1.style.pointerEvents = "none";
        main.appendChild(F1);

        var f1_bg_image = document.createElement("img");
        f1_bg_image.id = "background_img";
        f1_bg_image.style.position = "absolute";
        f1_bg_image.style.left = "0px";
        f1_bg_image.style.top = "0px";
        f1_bg_image.style.width = adWidth + "px";
        f1_bg_image.style.height = adHeight + "px";
        F1.appendChild(f1_bg_image);
        imageArray.push([f1_bg_image, variables.background_img]);


        var F1_headline_txt_style = variables.F1_headlineTxt_size_hex_xy.split('|');
        F1_headline_txt = document.createElement("div");
        F1_headline_txt.id = "F1_headline_txt";
        F1_headline_txt.classList.add("headlines");
        F1_headline_txt.classList.add("headlines-centered");
        F1_headline_txt.style.width = adWidth + "px"
        F1_headline_txt.style.fontSize = F1_headline_txt_style[0] + "px";
        F1_headline_txt.style.color = F1_headline_txt_style[1];
        F1_headline_txt.style.left = F1_headline_txt_style[2].split(",")[0] + "px";

        F1_headline_txt.style.top = F1_headline_txt_style[2].split(",")[1] + "px";
        F1.appendChild(F1_headline_txt);
        F1_headline_txt.innerHTML = variables.F1_headline_txt;

        //FRAME 1 END

        //FRAME 2 START

        F2 = document.createElement("div");
        F2.id = "F2_cont";
        F2.style.position = "absolute";
        F2.style.left = "0px";
        F2.style.top = "0px";
        F2.style.width = adWidth + "px";
        F2.style.height = adHeight + "px";
        F2.style.pointerEvents = "none";
        main.appendChild(F2);

        var f2_bg_image = document.createElement("img");
        f2_bg_image.id = "background_img";
        f2_bg_image.style.position = "absolute";
        f2_bg_image.style.left = "0px";
        f2_bg_image.style.top = "0px";
        f2_bg_image.style.width = adWidth + "px";
        f2_bg_image.style.height = adHeight + "px";
        F2.appendChild(f2_bg_image);
        imageArray.push([f2_bg_image, variables.carIMG]);


        var F2_headline_txt_style = variables.F2_headlineTxt_size_hex_xy.split('|');
        F2_headline_txt = document.createElement("div");
        F2_headline_txt.id = "F2_headline_txt";
        F2_headline_txt.classList.add("headlines");
        F2_headline_txt.classList.add("headlines-centered");
        F2_headline_txt.style.width = adWidth + "px"
        F2_headline_txt.style.fontSize = F2_headline_txt_style[0] + "px";
        F2_headline_txt.style.color = F2_headline_txt_style[1];
        F2_headline_txt.style.left = F2_headline_txt_style[2].split(",")[0] + "px";
        F2_headline_txt.style.top = F2_headline_txt_style[2].split(",")[1] + "px";
        F2.appendChild(F2_headline_txt);
        F2_headline_txt.innerHTML = variables.F2_headline_txt;

        //FRAME 2 END

        //FRAME 3 START
        F3 = document.createElement("div");
        F3.id = "F3_cont";
        F3.style.position = "absolute";
        F3.style.left = "0px";
        F3.style.top = "0px";
        F3.style.width = adWidth + "px";
        F3.style.height = adHeight + "px";
        F3.style.pointerEvents = "none";
        main.appendChild(F3);


        f3_bg_image = document.createElement("img");
        f3_bg_image.id = "background_img";
        f3_bg_image.style.position = "absolute";
        f3_bg_image.style.left = "0px";
        f3_bg_image.style.top = "0px";
        f3_bg_image.style.width = adWidth + "px";
        f3_bg_image.style.height = adHeight + "px";
        F3.appendChild(f3_bg_image);
        imageArray.push([f3_bg_image, variables.carShimmerIMG]);




        var cta_txt_style = variables.ctaTxt_size_hex_face_lineheight_spacing_xy.split('|');
        cta_txt = document.createElement("div");
        cta_txt.id = "cta_txt";
        cta_txt.classList.add("cta");
        cta_txt.style.fontSize = cta_txt_style[0] + "px";
        cta_txt.style.textAlign = "center";
        cta_txt.style.color = cta_txt_style[1];
        cta_txt.style.fontFamily = cta_txt_style[2];
        cta_txt.style.lineHeight = cta_txt_style[3] + "px";
        cta_txt.style.width = adWidth + "px";
        cta_txt.style.letterSpacing = cta_txt_style[4] + "px";
        cta_txt.style.left = cta_txt_style[5].split(",")[0] + "px";
        cta_txt.style.top = cta_txt_style[5].split(",")[1] + "px";
        F3.appendChild(cta_txt);
        cta_txt.innerHTML = variables.cta_txt;



        var F3_headline_txt_style = variables.F3_headlineTxt_size_hex_xy.split('|');
        F3_headline_txt = document.createElement("div");
        F3_headline_txt.id = "F3_headline_txt";
        F3_headline_txt.classList.add("headlines");
        F3_headline_txt.classList.add("headlines-centered");
        F3_headline_txt.style.width = adWidth + "px"
        F3_headline_txt.style.fontSize = F3_headline_txt_style[0] + "px";
        F3_headline_txt.style.color = F3_headline_txt_style[1];
        F3_headline_txt.style.left = F3_headline_txt_style[2].split(",")[0] + "px";
        F3_headline_txt.style.top = F3_headline_txt_style[2].split(",")[1] + "px";
        F3.appendChild(F3_headline_txt);
        F3_headline_txt.innerHTML = variables.F3_headline_txt;


        var replay_style = variables.replayTxt_size_hex_xy.split('|');
        replay.style.position = "absolute";
        replay.style.visibility = "hidden";
        replay.style.pointerEvents = "auto";
        replay.style.cursor = "pointer";
        replay.style.fontFamily = "audi-normal";
        // replay.style.textDecoration = "underline";
        replay.style.fontSize = replay_style[0] + "px";
        replay.style.color = replay_style[1];
        replay.style.right = replay_style[2].split(",")[0] + "px";
        replay.style.top = replay_style[2].split(",")[1] + "px";
        replay.innerHTML = "Replay";
        //FRAME 3 END

        //ColorBlock Swipe
        var colorBlock = document.createElement("div");
        colorBlock.id = "colorBlock";
        colorBlock.style.position = "absolute";
        colorBlock.style.left = "0px";
        colorBlock.style.top = "0px";
        colorBlock.style.width = adWidth + "px";
        colorBlock.style.height = adHeight + "px";
        colorBlock.style.pointerEvents = "none";
        colorBlock.style.backgroundColor = variables.carModelTxt_size_hex_face_lineheight_spacing_xy;
        main.appendChild(colorBlock);

        var colorBlock_r = document.createElement("div");
        colorBlock_r.id = "colorBlock_r";
        colorBlock_r.style.position = "absolute";
        colorBlock_r.style.left = "0px";
        colorBlock_r.style.top = "0px";
        colorBlock_r.style.width = adWidth + "px";
        colorBlock_r.style.height = adHeight + "px";
        colorBlock_r.style.pointerEvents = "none";
        colorBlock_r.style.backgroundColor = variables.carModelTxt_size_hex_face_lineheight_spacing_xy;
        cars.appendChild(colorBlock_r);

        var logo_img = document.createElement("img");
        logo_img.id = "logo_img";
        logo_img.style.position = "absolute";
        logo_img.style.left = "0px";
        logo_img.style.top = "0px";
        logo_img.style.width = adWidth + "px";
        logo_img.style.height = adHeight + "px";
        logos.appendChild(logo_img);
        imageArray.push([logo_img, variables.logo_img]);

        var promoLogo_img = document.createElement("img");
        promoLogo_img.id = "promoLogo_img";
        promoLogo_img.style.position = "absolute";
        promoLogo_img.style.left = "0px";
        promoLogo_img.style.top = "0px";
        promoLogo_img.style.width = adWidth + "px";
        promoLogo_img.style.height = adHeight + "px";
        promoLogo_img.style.cursor = "pointer"
        logos.appendChild(promoLogo_img);
        imageArray.push([promoLogo_img, variables.promoLogo_img]);


        if (adWidth == "970" || adWidth == "728") {
            showSplitTextFade = true;
            split_f1_text = new SplitText("#F1_headline_txt", {
                type: "chars",
                position: "absolute"
            });
            split_f2_text = new SplitText("#F2_headline_txt", {
                type: "chars",
                position: "absolute"
            });

        }

        /* Load car images from CDN
        How to create image URL path
        
        
        
        car_img_cdn_path + variables.carModel_txt + "_wheel.png";
         test_wheel.png
         test_car_side.png
         test_car_3q.png
         
             Note: carModel_txt instantAd Variable  is being used to point to the car prefix/model name for images on cdn
             In this case "test" is the car prefix/model name
        */

        wheel_img_src       = 'images/' + variables.carModel_txt + "_wheel.png";
        car_side_img_src    = 'images/' + variables.carModel_txt + "_car_side.png";
        car_3q_img_src      = 'images/' + variables.carModel_txt + "_car_3q.png";

        imageArray.push([cs_front_wheel_img, wheel_img_src]);
        imageArray.push([cs_rear_wheel_img, wheel_img_src]);
        imageArray.push([c3q_front_wheel_img, wheel_img_src]);
        imageArray.push([c3q_rear_wheel_img, wheel_img_src]);
        imageArray.push([cs_car_img, car_side_img_src]);
        imageArray.push([c3q_car_img, car_3q_img_src]);

        replay.addEventListener("click", function() {
            // myFT.tracker("replay_click");
            replay.style.visibility = "hidden";
            startAnimation(true);


        });

        preloadImage(initializeUnit);

    } catch (error) {
        console.error("Error on setInstantAds(): " + error.message);
    }
}


function preloadImage(callback) {
    try {
        a = imageArray;

        if (a.length != 0) {
            for (var i = 0; i < a.length; i++) {
                if (a[i][0].tagName.toLowerCase() == "img") {
                    a[i][0].src = a[i][1];
                    a[i][0].addEventListener("load", function f(e) {
                        e.currentTarget.removeEventListener(e.type, f);
                        loadedImgs++;
                    }, false);
                } else {
                    a[i][0].style.backgroundImage = "url('" + a[i][1] + "')";

                    var o = new Image();
                    o.src = a[i][1];
                    o.addEventListener("load", function f(e) {
                        e.currentTarget.removeEventListener(e.type, f);
                        loadedImgs++;
                    }, false);
                }
            }

            var t = setInterval(function() {
                if (a.length === loadedImgs) {
                    clearInterval(t);
                    callback();
                }
            }, 100);
        } else {
            setTimeout(callback, 100);
        }
    } catch (error) {
        console.error("Error on preloadImage(): " + error.message);
    }
}

function initializeUnit() {

    setTimeout(function() {
        container.addEventListener('click', function() {
            window.open(clickTagURL, '_blank');
        });

        replay.style.visibility = "hidden";
        startAnimation();
    }, 0);
}

function startAnimation(replayAnimation) {

    tl = new TimelineMax();

    var config1 = CONFIG_CAR_SIDE;
    var config2 = CONFIG_CAR_3Q;
    if (replayAnimation != true) {
        //initial play fade in main, otherwise on replay do not fade it
        tl.set(container, {
            opacity: 0
        })
    } else {
        tl.to(colorBlock_r, 0.75, {
            left: "0px",
            ease: Expo.easeOut
        })

    }


    tl.set(colorBlock, {
            left: "0px"
        })
        .set(colorBlock_r, {
            left: adWidth + "px"
        })
        .set(cars, {
            opacity: 1
        })
        .set(F1, {
            opacity: 1
        })
        .set(F2, {
            opacity: 0
        })
        .set(F3, {
            opacity: 0
        })
        .set(cs_car_img, {
            width: config1.carWidth
        })
        .set(car_side, {
            left: config1.pos1[0] + "px",
            top: config1.pos1[1] + "px",
            scaleX: config1.scale,
            scaleY: config1.scale
        })
        .set(cs_front_wheel, {
            rotation: 0,
            left: config1.frontWheelPos[0],
            y: config1.frontWheelPos[1],
            scaleX: config1.frontWheelScale,
            scaleY: config1.frontWheelScale
        })
        .set(cs_rear_wheel, {
            rotation: 0,
            left: config1.rearWheelPos[0],
            y: config1.rearWheelPos[1],
            scaleX: config1.rearWheelScale,
            scaleY: config1.rearWheelScale
        })

    .set(c3q_car_img, {
            width: config2.carWidth
        })
        .set(car_3q, {
            transformOrigin: "bottom left",
            left: config2.pos1[0],
            top: config2.pos1[1],
            scaleX: config2.scale1,
            scaleY: config2.scale1
        })
        .set(c3q_car_img, {
            transformOrigin: "top left",
            rotation: 0
        })
        .set(c3q_front_wheel, {
            skewX: -3,
            rotation: 0,
            left: config2.frontWheelPos[0],
            y: config2.frontWheelPos[1],
            scaleX: config2.frontWheelScale[0],
            scaleY: config2.frontWheelScale[1]
        })
        .set(c3q_rear_wheel, {
            skewX: -3,
            rotation: 0,
            left: config2.rearWheelPos[0],
            y: config2.rearWheelPos[1],
            scaleX: config2.rearWheelScale[0],
            scaleY: config2.rearWheelScale[1]
        })


    .set(cs_front_wheel_img, {
            rotation: -config1.tireRotIn
        })
        .set(cs_rear_wheel_img, {
            rotation: -config1.tireRotIn
        })

    // START ANIMATION TWEENS
    .to(container, .25, {
        opacity: 1,
        delay: .25,
        onComplete: function() {
            car_side_drive_in_anim();
        }
    });
}



function car_side_drive_in_anim() {
    var config = CONFIG_CAR_SIDE;

    if (showSplitTextFade) {
        //now animate each character into place from 100px above, fading in:
        // use negative stagger number to fade from right to left (otherwise positive value will animate left to right)
        tl.from(split_f1_text.chars, {
                autoAlpha: 0,
                stagger: config.driveInTime * 0.05,
                ease: Quad.easeOut
            })
            .to(colorBlock, config.driveInTime, {
                left: -adWidth + "px",
                ease: Quad.easeOut
            }, "<")
    } else {
        tl.to(colorBlock, config.driveInTime, {
            left: -adWidth + "px",
            ease: Quad.easeOut
        })
    }

    tl.to(car_side, config.driveInTime, {
            left: config.pos2[0] + "px",
            top: config.pos2[1] + "px",
            opacity: 1,
            ease: Quad.easeOut
        }, "<")
        .to(cs_front_wheel_img, config.driveInTime, {
            rotation: config.tireRotIn,
            ease: Quad.easeOut
        }, "<")
        .to(cs_rear_wheel_img, config.driveInTime, {
            rotation: config.tireRotIn,
            ease: Quad.easeOut,
            onComplete: function() {
                setTimeout(function() {
                    car_side_drive_out_anim()
                }, config.stoppedTime * 1000)
            }
        }, "<")
}

function car_side_drive_out_anim() {

    var config = CONFIG_CAR_SIDE;
    tl.set(colorBlock, {
        left: adWidth + "px"
    })
    tl.to(colorBlock, config.driveInTime, {
            left: "0px",
            ease: Quad.easeInOut
        })
        .to(car_side, config.driveOutTime, {
            left: config.pos3[0],
            top: config.pos3[1],
            ease: Sine.easeIn
        }, "<")
        .to(cs_front_wheel_img, config.driveOutTime, {
            rotation: "+=" + config.tireRotOut,
            ease: Sine.easeIn
        }, "<")
        .to(cs_rear_wheel_img, config.driveOutTime, {
            rotation: "+=" + config.tireRotOut,
            ease: Sine.easeIn,
            onComplete: function() {
                car_3q_drive_in(car_3q, CONFIG_CAR_3Q)
            }
        }, "<");
    tl.set(F1, {
        opacity: 1
    }, "<" + (config.driveInTime / 2))
}

function car_3q_drive_in() {

    var config = CONFIG_CAR_3Q;

    tl.set(F2, {
            opacity: 1
        })
        .set(F2_headline_txt, {
            opacity: 1
        })
        .to(colorBlock, config.driveInTime, {
            left: adWidth + "px",
            ease: Quad.easeInOut
        })
        .to(car_3q, config.driveInTime, {
            rotationZ: "0.01",
            left: config.pos2[0] + "px",
            top: config.pos2[1] + "px",
            scaleX: config.scale2,
            scaleY: config.scale2,
            opacity: 1,
            ease: Sine.easeOut
        }, "<")
        .to(c3q_front_wheel_img, config.driveInTime, {
            rotation: "+=" + config.tireRotIn,
            ease: Sine.easeOut
        }, "<")
        .to(c3q_rear_wheel_img, config.driveInTime, {
            rotation: "+=" + config.tireRotIn,
            ease: Sine.easeOut,
            onComplete: function() {
                setTimeout(function() {
                    car_3q_drive_out();
                }, config.stoppedTime * 1000)

            }
        }, "<")

}

function car_3q_drive_out() {
    var config = CONFIG_CAR_3Q;
    if (showStaticEndframe == true) {

        tl.set(colorBlock, {
                left: -adWidth + "px"
            })
            .to(car_3q, config.driveOutTime, {
                left: config.pos3[0] + "px",
                top: config.pos3[1] + "px",
                scaleX: config.scale3,
                scaleY: config.scale3,
                opacity: 1,
                ease: Sine.easeIn
            })
        if (showSplitTextFade) {
            //now animate each character into place from 100px above, fading in:
            // use negative stagger number to fade from right to left (otherwise positive value will animate left to right)
            tl.to(split_f2_text.chars, {
                alpha: 0,
                stagger: -config.driveOutTime * 0.05,
                ease: Sine.easeIn
            }, "<")
        }
        tl.to(colorBlock, config.driveOutTime, {
                left: "0px",
                ease: Quad.easeInOut
            }, "<")
            .to(c3q_front_wheel_img, config.driveOutTime, {
                rotation: "+=" + config.tireRotOut,
                ease: Sine.easeIn
            }, "<")
            .to(c3q_rear_wheel_img, config.driveOutTime, {
                rotation: "+=" + config.tireRotOut,
                ease: Sine.easeIn
            }, "<")
            .set(F3, {
                opacity: 1
            })
            .to(colorBlock, config.driveOutTime, {
                left: -adWidth + "px",
                ease: Quad.easeInOut
            }, "<")
            .from(F3_headline_txt, 1, {
                opacity: "0"
            }, ">")
            .from(cta_txt, 1, {
                opacity: "0"
            }, ">.5")
            .set(replay, {
                visibility: "visible",
                opacity: "0"
            }, "<")
            .to(replay, 1, {
                opacity: "1"
            }, "<");
    } else {
        tl.set(f3_bg_image, {
                opacity: 0
            })
            .set(F3, {
                opacity: 1
            })
            .to(F2_headline_txt, 1, {
                opacity: "0"
            })
            .from(F3_headline_txt, 1, {
                opacity: "0"
            }, ">")
            .from(cta_txt, 1, {
                opacity: "0"
            }, ">.5")
            .set(replay, {
                visibility: "visible",
                opacity: "0"
            }, "<")
            .to(replay, 1, {
                opacity: "1"
            }, "<");

        //!!!!!
        //!!!!!
        //!!!!!
        //  FIND OUT HOW THEY WANT TO HANDLE REPLAY WHEN CAR ON SCREEN--DOES CAR DRIVE OFF THEN SWIPE REPLAY OR ADD SWIPE OVER CAR?
        //!!!!!
        //!!!!!
        //!!!!!


    }
}

function checkPlatform() {
    try {
        var a = new Array();

        if (navigator.platform.toLowerCase().indexOf("mac") > -1) {
            a[0] = "macOS";
        } else if (navigator.platform.toLowerCase().indexOf("win") > -1) {
            a[0] = "windows";
        } else {
            if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                a[0] = "iOS";
            } else if (navigator.userAgent.match(/Opera Mini/i)) {
                a[0] = "opera";
            } else if (navigator.userAgent.match(/Android/i)) {
                a[0] = "android";
            } else if (navigator.userAgent.match(/BlackBerry/i)) {
                a[0] = "BlackBerry";
            } else if (navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)) {
                a[0] = "WindowsPhone";
            }
        }

        var MSIE = window.navigator.userAgent.indexOf("MSIE ");
        var Edge = window.navigator.userAgent.indexOf("Edge/");
        var Trdt = window.navigator.userAgent.indexOf("Trident/");

        if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
            a[1] = "chrome";
        } else if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
            a[1] = "firefox";
        } else if (navigator.vendor && navigator.vendor.toLowerCase().indexOf("apple") > -1) {
            a[1] = "safari";
        } else if (MSIE > 0 || Edge > 0 || Trdt > 0) {
            a[1] = "IE";
        }

        return a;
    } catch (error) {
        console.error("Error on checkPlatform(): " + error.message);
    }
}