window.onload = function() {
    
    var start_test = document.getElementById("start_test");
    var start_page = document.getElementById("start");

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    var p5 = document.getElementById("p5");
    var end = document.getElementById("end");
    
    var right = this.document.getElementById("right");
    var wrong = this.document.getElementById("wrong");

    function setWindows() {
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        var w = document.documentElement.clientWidth || document.body.clientWidth;
        var base = 736/414;
        console.log("iphone 6:" + base)
        console.log(h, w, h/w)
        if (h/w < base) {
            console.log("need to change body:")
            var width = 100/base;
            console.log(width)
            var container = document.querySelectorAll("div.container");

            for(var i=0; i<container.length; i++) {
                console.log(container[i].id, "reset view")
                container[i].style.height = "100vh";
                container[i].style.width = "56.25vh";
            }

            $("music_rotate").style.width = "11.25vh"
            $("music_rotate").style.height = "11.25vh"
        }
    }

    setWindows();


    function play_right_sound() {
        right.play()
    }

    function play_wrong_sound() {
        wrong.play()
    }

    setElementBackgroud(document.body , "bg1.jpg");
    var bg_music = this.document.getElementById("bg_music")


    $("music_rotate").onclick = playBgMusic;
    
    function playBgMusic() {
        if (bg_music.paused) {
            bg_music.play()
            $("music_rotate").className = "music_rotate music_play"
        } else {
            bg_music.pause()
            $("music_rotate").className = "music_rotate"
        }
    }

    $("start_words").style.width = "100%"
    $("start_words").style.left = "0%"
    $("start_pander").style.width = "100%"
    $("start_pander").style.left = "0%"

    var special_page_ani_out = "page out_ani";

    var page_ani_in = "page in_ani";
    var page_ani_out = "page out_ani";

    page_pre_set()
    function page_pre_set() {
        var objs = document.querySelectorAll("div.page");

        for(var i=2; i<objs.length; i++) {
            console.log(objs[i].id, "reset view")
            // objs[i].style.left = "100%"
        }
    }

    start_test.onclick = function() {
        p1.style.display = "block"

        if (bg_music.paused) {
            playBgMusic();
        }

        setTimeout(function() {
            start_page.setAttribute("class", special_page_ani_out);
            p1.setAttribute("class", page_ani_in);

            setElementBackgroud(document.body , "bg2.jpg");
        }, 500);
    }

    // p1 逻辑
    var rightAnswer = 0;
    var p1_bg = document.getElementById("p1_bg");
    var p1_ret = document.getElementById("p1_ret");

    $("p1_a1").onclick = function() {
        goAnswerPage(1)
    }

    $("p1_a2").onclick = function() {
        goAnswerPage(1)
    }
    
    $("p1_a4").onclick = function() {
        goAnswerPage(1)
    }

    $("p1_a3").onclick = function() {
        rightAnswer++;
        goAnswerPage(1, true);
        $("p1_a3").style.display = "none"
    }


    $("p1_next").addEventListener("click", function(event) {
        p2.style.display = "block"
        setTimeout(function() {
            p1.setAttribute("class", page_ani_out);
            p2.setAttribute("class", page_ani_in);
        }, 500);

    }, false)


    // p2逻辑
    var p2_bg = document.getElementById("p2_bg");
    var p2_ret = document.getElementById("p2_ret");

    $("p2_a1").onclick = function() {
        goAnswerPage(2)
    }

    $("p2_a2").onclick = function() {
        goAnswerPage(2)
    }
    
    $("p2_a3").onclick = function() {
        rightAnswer++;
        goAnswerPage(2, true)
        $("p2_a3").style.display = "none"
    }

    $("p2_next").addEventListener("click", function(event) {
        p3.style.display = "block"

        setTimeout(function() {
            p2.setAttribute("class", page_ani_out);
            p3.setAttribute("class", page_ani_in);
        }, 500);
        
    }, false)


    // p3 逻辑
    var p3_bg = document.getElementById("p3_bg");
    var p3_ret = document.getElementById("p3_ret");

    $("p3_a3").onclick = function() {
        goAnswerPage(3)
    }

    $("p3_a2").onclick = function() {
        goAnswerPage(3)
    }
    
    $("p3_a4").onclick = function() {
        goAnswerPage(3)
    }

    $("p3_a1").onclick = function() {
        rightAnswer++;
        goAnswerPage(3, true)
        $("p3_a1").style.display = "none"
    }


    $("p3_next").addEventListener("click", function(event) {
        p4.style.display = "block"
        setTimeout(function() {
            p3.setAttribute("class", page_ani_out);
            p4.setAttribute("class", page_ani_in);
        }, 500);
        
    }, false)


    // p4逻辑
    var p4_bg = document.getElementById("p4_bg");
    var p4_ret = document.getElementById("p4_ret");

    $("p4_a3").onclick = function() {
        goAnswerPage(4)
    }

    $("p4_a2").onclick = function() {
        goAnswerPage(4)
    }

    $("p4_a1").onclick = function() {
        rightAnswer++;
        goAnswerPage(4, true)
        $("p4_a1").style.display = "none"
    }

    $("p4_next").addEventListener("click", function(event) {
        p5.style.display = "block"

        setTimeout(function() {
            p4.setAttribute("class", page_ani_out);
            p5.setAttribute("class", page_ani_in);
        }, 500);
        
    }, false)

    // p5逻辑
    var p5_bg = document.getElementById("p5_bg");
    var p5_ret = document.getElementById("p5_ret");

    $("p5_a1").onclick = function() {
        goAnswerPage(5)
    }

    $("p5_a2").onclick = function() {
        goAnswerPage(5)
    }
    
    $("p5_a4").onclick = function() {
        goAnswerPage(5)
    }

    $("p5_a3").onclick = function() {
        rightAnswer++;
        goAnswerPage(5, true)
        $("p5_a3").style.display = "none"
    }


    $("p5_next").addEventListener("click", function(event) {
        end.style.display = "block"
        setAnswerResultPage();

        setTimeout(function() {
            p5.setAttribute("class", page_ani_out);
            end.setAttribute("class", page_ani_in);

            setElementBackgroud(document.body , "bg1.jpg");
        }, 500);
        
    }, false)

    // 测评结果页逻辑
    $("restart").addEventListener("click", function(event) {
        setTimeout(function() {
            // initState();
            location.reload()//刷新页面即可

        }, 500);
        
    }, false)

    function setAnswerResultPage() {
        if (rightAnswer <= 1) {
            changeBackground("end_bg", "right1.png")
        } else if (rightAnswer == 2) {
            changeBackground("end_bg", "right2.png")
        }  else if (rightAnswer == 3 || rightAnswer == 4) {
            changeBackground("end_bg", "right34.png")
        }  else if (rightAnswer == 5) {
            changeBackground("end_bg", "right5.png")
        }
        console.log("score:" + rightAnswer)
    }


    function initState() {
        rightAnswer = 0;
        p1.className = "page"
        $("p1_bg").className = "bg"
        $("p1_ret").className = "ret"
        $("p1_next").className = "next"

        p2.className = "page"
        $("p2_bg").className = "bg"
        $("p2_ret").className = "ret"
        $("p2_next").className = "next"

        p2.className = "page"
        $("p2_bg").className = "bg"
        $("p2_ret").className = "ret"
        $("p2_next").className = "next"

        p3.className = "page"
        $("p3_bg").className = "bg"
        $("p3_ret").className = "ret"
        $("p3_next").className = "next"

        p4.className = "page"
        $("p4_bg").className = "bg"
        $("p4_ret").className = "ret"
        $("p4_next").className = "next"

        p5.className = "page"
        $("p5_bg").className = "bg"
        $("p5_ret").className = "ret"
        $("p5_next").className = "next"

        // end.className = "page"

        changeBackground("p1_bg", "p1_bg.png");
        changeBackground("p2_bg", "p2_bg.png");
        changeBackground("p3_bg", "p3_bg.png");
        changeBackground("p4_bg", "p4_bg.png");
        changeBackground("p5_bg", "p5_bg.png");

        $("p1_next").style.zIndex = -2;
        $("p2_next").style.zIndex = -2;
        $("p3_next").style.zIndex = -2;
        $("p4_next").style.zIndex = -2;
        $("p5_next").style.zIndex = -2;

        $("p1_ret").style.zIndex = -2;
        $("p2_ret").style.zIndex = -2;
        $("p3_ret").style.zIndex = -2;
        $("p4_ret").style.zIndex = -2;
        $("p5_ret").style.zIndex = -2;

        setAnswerBackground()
    }

    setAnswerBackground()
    
    function setAnswerBackground() {
        // var ans1 = document.getElementsByClassName("ans1");
        for (var k=1; k<=4; k++) {
            var ans = document.querySelectorAll("div.ans" + k);
            for (var i=0; i<ans.length; i++) {
                // console.log(ans[i].id, ans[i].style.opacity)
                ans[i].style.opacity = 0
                ans[i].style.display = "block"
            }
        }
    }

    function goAnswerPage(n, isRight = false) {
        changeBackground("p" + n + "_bg", "p" + n + "_answer.png")
        setTimeout(function() {
            $("p" + n + "_bg").className = "bg out_ani";
            $("p" + n + "_ret").style.zIndex = 2;
            
            $("p" + n + "_ret").className = "ret in_ani";  

            $("p" + n + "_next").style.zIndex = 2;
            $("p" + n + "_next").className = "next in_ani";
        }, 1500);

        if (isRight) {
            right.play()
            console.log("right answer:", rightAnswer);
        } else {
            wrong.play()
            console.log("wrong answer:", rightAnswer);
        }
    }

            // changeBackground("p1_bg", "p1_answer.png")
            // setTimeout(function() {
            //     p1_bg.className = "bg out_ani";
            //     p1_ret.style.zIndex = 2;
                
            //     p1_ret.className = "ret in_ani";  
    
            //     $("p1_next").style.zIndex = 2;
            //     $("p1_next").className = "next in_ani";
            // }, 1500);
    
            // p1.removeEventListener("click", p1_select, false)


    // 改变背景
    function changeBackground(id, imageName) {
        var set = "url(./images/" + imageName + ") no-repeat center center";
        $(id).style.background = set;
        $(id).style.backgroundSize = "100%";
        console.log("set", $(id).style.background)
        
    }

    function setElementBackgroud(obj, imageName) {
        var set = "url(./images/" + imageName + ") repeat center center";
        obj.style.background = set;
        obj.style.backgroundSize = "100%";
        console.log("set", obj.style.background)
    }


    function preLoadImage(imgs) {
        for (var i=0; i<imgs.length; i++) {
            var image = new Image()
            image.src = imgs[i]
        }
    }


    // 判断鼠标点击的位置是否在某个div区域内，可用在右键菜单的显示与隐藏等
    function isInDiv(event,divId) {
        var div = document.getElementById(divId)
        var x=event.clientX
        var y=event.clientY
        var divx1 = div.offsetLeft
        var divy1 = div.offsetTop
        var divx2 = div.offsetLeft + div.offsetWidth
        var divy2 = div.offsetTop + div.offsetHeight
        // console.log(x + "," + y)
        var isIn = ( x > divx1 && x < divx2 && y > divy1 && y < divy2);
        console.log(divx1, divx2, divy1, divy2, isIn)
        return isIn;
    }

    function $(id){
        return document.getElementById(id);
    }

}
