var starfield = null;

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

window.onload = function () {
    starfield = new jsStarfield;
    starfield.init("main_canvas");

    // var gui = new dat.GUI();
    // gui.add(starfield, 'amount', 0, 200000).onFinishChange(function (value) {
    //     starfield.set_amount(value);
    // });
    // gui.add(starfield, 'speed', 0, 1500);
    // gui.add(starfield, 'follow_mouse', 0, 2500).onFinishChange(function (value) {
    //     if (value === false)
    //         starfield.reset_origin();
    // })
    // gui.add(starfield, 'method', ['rects', 'buffer']);

    loop();


    var parallaxBox = document.getElementById('space-card-box-1');
    var c1left = document.getElementById('l1-1').offsetLeft,
        c1top = document.getElementById('l1-1').offsetTop,
        c2left = document.getElementById('l2-1').offsetLeft,
        c2top = document.getElementById('l2-1').offsetTop,
        c3left = document.getElementById('l3-1').offsetLeft,
        c3top = document.getElementById('l3-1').offsetTop,
        c4left = document.getElementById('l4-1').offsetLeft,
        c4top = document.getElementById('l4-1').offsetTop;

    parallaxBox.onmousemove = function (event) {
        event = event || window.event;
        var x = event.clientX - parallaxBox.offsetLeft,
            y = event.clientY - parallaxBox.offsetTop;

        mouseParallax('l1-1', c1left, c1top, x, y, 5);
        mouseParallax('l2-1', c2left, c2top, x, y, 15);
        mouseParallax('l3-1', c3left, c3top, x, y, 20);
        mouseParallax('l4-1', c4left, c4top, x, y, 25);
    }
    var parallaxBox = document.getElementById('space-card-box-2');
    var c1left = document.getElementById('l1-2').offsetLeft,
        c1top = document.getElementById('l1-2').offsetTop,
        c2left = document.getElementById('l2-2').offsetLeft,
        c2top = document.getElementById('l2-2').offsetTop,
        c3left = document.getElementById('l3-2').offsetLeft,
        c3top = document.getElementById('l3-2').offsetTop,
        c4left = document.getElementById('l4-2').offsetLeft,
        c4top = document.getElementById('l4-2').offsetTop;

    parallaxBox.onmousemove = function (event) {
        event = event || window.event;
        var x = event.clientX - parallaxBox.offsetLeft,
            y = event.clientY - parallaxBox.offsetTop;

        mouseParallax('l1-2', c1left, c1top, x, y, 5);
        mouseParallax('l2-2', c2left, c2top, x, y, 15);
        mouseParallax('l3-2', c3left, c3top, x, y, 20);
        mouseParallax('l4-2', c4left, c4top, x, y, 25);
    }
    var parallaxBox = document.getElementById('space-card-box-3');
    var c1left = document.getElementById('l1-3').offsetLeft,
        c1top = document.getElementById('l1-3').offsetTop,
        c2left = document.getElementById('l2-3').offsetLeft,
        c2top = document.getElementById('l2-3').offsetTop,
        c3left = document.getElementById('l3-3').offsetLeft,
        c3top = document.getElementById('l3-3').offsetTop,
        c4left = document.getElementById('l4-3').offsetLeft,
        c4top = document.getElementById('l4-3').offsetTop;

    parallaxBox.onmousemove = function (event) {
        event = event || window.event;
        var x = event.clientX - parallaxBox.offsetLeft,
            y = event.clientY - parallaxBox.offsetTop;

        mouseParallax('l1-3', c1left, c1top, x, y, 5);
        mouseParallax('l2-3', c2left, c2top, x, y, 15);
        mouseParallax('l3-3', c3left, c3top, x, y, 20);
        mouseParallax('l4-3', c4left, c4top, x, y, 25);
    }
    var parallaxBox = document.getElementById('space-card-box-4');
    var c1left = document.getElementById('l1-4').offsetLeft,
        c1top = document.getElementById('l1-4').offsetTop,
        c2left = document.getElementById('l2-4').offsetLeft,
        c2top = document.getElementById('l2-4').offsetTop,
        c3left = document.getElementById('l3-4').offsetLeft,
        c3top = document.getElementById('l3-4').offsetTop,
        c4left = document.getElementById('l4-4').offsetLeft,
        c4top = document.getElementById('l4-4').offsetTop;

    parallaxBox.onmousemove = function (event) {
        event = event || window.event;
        var x = event.clientX - parallaxBox.offsetLeft,
            y = event.clientY - parallaxBox.offsetTop;

        mouseParallax('l1-4', c1left, c1top, x, y, 5);
        mouseParallax('l2-4', c2left, c2top, x, y, 15);
        mouseParallax('l3-4', c3left, c3top, x, y, 20);
        mouseParallax('l4-4', c4left, c4top, x, y, 25);
    }
    var parallaxBox = document.getElementById('space-card-box-5');
    var c1left = document.getElementById('l1-5').offsetLeft,
        c1top = document.getElementById('l1-5').offsetTop,
        c2left = document.getElementById('l2-5').offsetLeft,
        c2top = document.getElementById('l2-5').offsetTop,
        c3left = document.getElementById('l3-5').offsetLeft,
        c3top = document.getElementById('l3-5').offsetTop,
        c4left = document.getElementById('l4-5').offsetLeft,
        c4top = document.getElementById('l4-5').offsetTop;

    parallaxBox.onmousemove = function (event) {
        event = event || window.event;
        var x = event.clientX - parallaxBox.offsetLeft,
            y = event.clientY - parallaxBox.offsetTop;

        mouseParallax('l1-5', c1left, c1top, x, y, 5);
        mouseParallax('l2-5', c2left, c2top, x, y, 15);
        mouseParallax('l3-5', c3left, c3top, x, y, 20);
        mouseParallax('l4-5', c4left, c4top, x, y, 25);
    }

};

window.addEventListener('resize', function () {
    starfield.resize(window.innerWidth, window.innerHeight);
});

function loop() {
    anim_id = window.requestAnimationFrame(update);
}

function update(time) {
    starfield.update(time);
    loop();
}

function Vector2(x, y) {
    this.x = x;
    this.y = y;
}

function Vector3(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function rand_range(min, max) { return min + Math.random() * (max - min); }

function jsStarfield() {
    this.stars = [];

    this.max_depth = 500;
    this.max_size = 4;
    this.speed = 50;
    this.amount = 500;

    this.follow_mouse = false;
    this.method = "rects";

    this.last_frame = 0;
    this.fps_time = 0;
    this.fps_count = 0;
    this.fps = 0;

    this.origin = new Vector2(0, 0);

    this.init = function (canvas) {
        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.resize(window.innerWidth, window.innerHeight);
        this.ctx.font = "18px Arial";

        // this.reset_origin();

        // this.canvas.addEventListener('mousemove', function (event) {
        //     if (starfield.follow_mouse == true)
        //         starfield.set_origin(event.x, event.y);
        // });

        // clear the array
        // this.stars.length = 0;
        this.init_stars();
    };

    this.set_amount = function (amount) {
        this.amount = Math.floor(amount);

        if (this.amount < this.stars.length) {
            this.stars.length = this.amount;
        }
        else {
            var amt = this.amount - this.stars.length;

            for (var i = 0; i < amt; i++)
                this.stars.push(new Vector3(rand_range(-this.canvas.width, this.canvas.width),
                    rand_range(-this.canvas.height, this.canvas.height),
                    rand_range(1, this.max_depth)));
        }
    };

    this.init_stars = function () {
        // init the stars
        for (var i = 0; i < this.amount; i++)
            this.stars.push(new Vector3(rand_range(-this.canvas.width, this.canvas.width),
                rand_range(-this.canvas.height, this.canvas.height),
                rand_range(1, this.max_depth)));
    };

    this.update = function (time) {
        var delta_time = (time - this.last_frame) * 0.001;
        this.update_stars(delta_time);

        if (this.method === "rects")
            this.draw_rects();
        else
            this.draw_buffer();

        this.draw_fps(delta_time);

        this.last_frame = time;
    };

    this.update_stars = function (delta_time) {
        var distance = this.speed * delta_time;

        for (var i = 0; i < this.stars.length; i++) {
            var star = this.stars[i];

            star.z -= distance;

            if (star.z <= 0) {
                star.x = rand_range(-this.canvas.width, this.canvas.width);
                star.y = rand_range(-this.canvas.height, this.canvas.height);
                star.z = this.max_depth;
            }
        }
    };

    this.resize = function (width, height) {
        this.canvas.width = width;
        this.canvas.height = height;

        this.canvas.style.width = width + "px";
        this.canvas.style.height = height + "px";

        // get the buffer
        this.img_data = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        this.reset_origin();
    };

    this.draw_rects = function () {
        this.ctx.fillStyle = 'rgb(255,255,255)';
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (var i = 0; i < this.stars.length; i++) {
            var star = this.stars[i];
            var k = 256 / star.z;
            var x = star.x * k + this.origin.x;
            var y = star.y * k + this.origin.y;

            var size = ((this.max_depth - star.z) / this.max_depth) * this.max_size;
            this.ctx.fillRect(x, y, size, size);
        }
    };

    this.draw_buffer = function () {
        var pos = 0, x, y;
        var length = this.img_data.data.length;
        var width = this.img_data.width * 4;

        for (pos = 0; pos < length; pos++)
            this.img_data.data[pos] = 0;

        for (var i = 0; i < this.stars.length; i++) {
            var star = this.stars[i];

            var k = 256 / star.z;
            var x = Math.floor(star.x * k + this.origin.x);
            var y = Math.floor(star.y * k + this.origin.y);

            if (x > 0 && x < this.canvas.width && y > 0 && y < this.canvas.height) {
                pos = y * width + (x * 4);

                this.img_data.data[pos] = 255;
                this.img_data.data[pos + 1] = 255;
                this.img_data.data[pos + 2] = 255;
                this.img_data.data[pos + 3] = ((this.max_depth - star.z) / this.max_depth) * 255;
            }
        }

        this.ctx.putImageData(this.img_data, 0, 0);
    };

    this.draw_fps = function (delta_time) {
        this.fps_time += delta_time;
        this.fps_count++;

        // update the fps count every second
        if (this.fps_time > 1) {
            this.fps = Math.floor(this.fps_count / this.fps_time);
            this.fps_time = 0;
            this.fps_count = 0;
        }

        // this.ctx.fillText("FPS: " + this.fps, 10, 25);
    };

    this.set_origin = function (x, y) {
        this.origin.x = x;
        this.origin.y = y;
    };

    this.reset_origin = function () {
        this.origin.x = this.canvas.width / 2;
        this.origin.y = this.canvas.height / 2;
    };
}






function mouseParallax(id, left, top, mouseX, mouseY, speed) {
    var obj = document.getElementById(id);
    var parentObj = obj.parentNode,
        containerWidth = parseInt(parentObj.offsetWidth),
        containerHeight = 470;
    console.log(containerWidth);
    obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
    obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
}