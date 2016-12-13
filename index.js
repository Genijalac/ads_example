(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1481659799228", id:"index_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"index_atlas_", frames: [[322,336,320,480],[1728,0,320,480],[0,336,320,480],[762,0,320,480],[1406,0,320,480],[966,482,320,480],[0,0,760,334],[690,336,30,50],[722,336,30,50],[644,336,44,56],[1288,482,320,480],[644,482,320,480],[1084,0,320,480],[1610,482,320,480]]}
];


// symbols:



(lib.besedilo1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.besedilo2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.besedilo3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ikone = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.notranjost = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ozadje = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.puščica1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.puščica2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.roka = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.slika1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.slika2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.slika3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.testnavožnja_obrazec = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.unutarnjost_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.puščica1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,50);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slika3();
	this.instance.setTransform(160,-240);

	this.instance_1 = new lib.slika2();
	this.instance_1.setTransform(-160,-240);

	this.instance_2 = new lib.slika1();
	this.instance_2.setTransform(-480,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-240,960,480);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.besedilo1();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.besedilo2();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.besedilo3();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Swipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.roka();
	this.instance.setTransform(0,0,0.641,0.641);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,35.9);


(lib.Gallery_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.puščica1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,50);


(lib.Gall_init = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#151515").ss(1,1,1).p("AlClCIKFAAIAAKFIqFAAg");
	this.shape.setTransform(32.3,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlCFDIAAqFIKFAAIAAKFg");
	this.shape_1.setTransform(32.3,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.form_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.puščica2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,50);


(lib.Tween2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance_1 = new lib.testnavožnja_obrazec();
	this.instance_1.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Controls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ikone();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4/FEIAAqHMAx/AAAIAAKHg");
	this.shape.setTransform(160,447.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480.3);


(lib.Btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#151515").ss(1,1,1).p("Ai4ioIFxAAIAAFRIlxAAg");
	this.shape.setTransform(18.6,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai4CpIAAlRIFxAAIAAFRg");
	this.shape_1.setTransform(18.6,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.unutarnjost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btn = new lib.unutarnjost_back();
	this.btn.setTransform(15,427,1,1,0,0,0,15,25);

	this.instance = new lib.notranjost();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.form2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.form_close = new lib.form_close();
	this.form_close.setTransform(15,421,1,1,0,0,0,15,25);
	new cjs.ButtonHelper(this.form_close, 0, 1, 1);

	this.instance = new lib.Tween2_1("synched",0);
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.form_close}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.close3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Besedilo = new lib.Tween6();
	this.Besedilo.setTransform(160,240);
	new cjs.ButtonHelper(this.Besedilo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Besedilo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.close2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.Close1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Btn2
	this.button_3 = new lib.Btn1();
	this.button_3.setTransform(648.1,151.3,1,1,0,0,0,18.6,16.9);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.Btn1(), 3);

	this.button_2 = new lib.Btn1();
	this.button_2.setTransform(429.2,151.3,1,1,0,0,0,18.6,16.9);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.Btn1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_2},{t:this.button_3}]}).wait(1));

	// Btn1
	this.button_1 = new lib.Btn1();
	this.button_1.setTransform(185.1,157.5,1,1,0,0,0,18.6,16.9);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Btn1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	// Layer 1
	this.instance = new lib.ozadje();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,760,334);


(lib.Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.gallery_back = new lib.Gallery_back();
	this.gallery_back.setTransform(15,25,1,1,0,0,0,15,25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#151515").ss(1,1,1).p("AiVj5IErAAIAAHzIkrAAg");
	this.shape.setTransform(15,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiVD6IAAnzIEqAAIAAHzg");
	this.shape_1.setTransform(15,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gallery_back}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.gallery_back}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,50);


(lib.Gallery = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var mc = new Hammer(document.getElementById('canvas'));
		
		var self = this;
		
		mc.on('swipe', function (e) {
			var x = self.gallery.x;
			if (GALLERY_ON == true) {
				if (e.direction == 2) {
					if (x !== -160) {
						TweenLite.to(self.gallery, 1, {
							x: "-=320",
							ease: Power2.easeInOut
						})
					}
				} else if (e.direction == 4) {
					if (x !== 480) {
						TweenLite.to(self.gallery, 1, {
							x: "+=320",
							ease: Power2.easeInOut
						})
					}
				}
			}
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Back
	this.Back = new lib.Back();
	this.Back.setTransform(15,74,1,1,0,0,0,15,25);
	new cjs.ButtonHelper(this.Back, 0, 1, 2, false, new lib.Back(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Back).wait(1));

	// Swipe
	this.Swipe = new lib.Swipe();
	this.Swipe.setTransform(158.1,449.9,1,1,0,0,0,14.1,17.9);

	this.timeline.addTween(cjs.Tween.get(this.Swipe).wait(1));

	// Gallery
	this.gallery = new lib.Tween7();
	this.gallery.setTransform(480,240);

	this.timeline.addTween(cjs.Tween.get(this.gallery).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,480);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		this.background.button_1.addEventListener("click", fl_MouseClickHandler);
		
		function fl_MouseClickHandler() {
			self.gotoAndPlay(60);
		}
		
		
		this.background.button_2.addEventListener("click", fl_MouseClickHandler2);
		
		function fl_MouseClickHandler2() {
			self.gotoAndPlay(30);
		}
		
		this.background.button_3.addEventListener("click", fl_MouseClickHandler3.bind(this));
		
		function fl_MouseClickHandler3() {
			this.gotoAndPlay(1);
		}
		
		
		
		this.movieClip_6.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4() {
		
			this.gotoAndPlay(15);
		}
		
		this.movieClip_7.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5() {
		
		
			this.gotoAndPlay(45);
		}
		
		
		this.movieClip_8.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6() {
		
		
			this.gotoAndPlay(75);
		}
		
		this.button_7.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9() {
			GALLERY_ON = true;
			TweenLite.to(this.Gallery, 1, {
				x: 160,
				ease: Power2.easeOut
			});
		}
		this.Gallery.Back.addEventListener("click", Gall_back.bind(this));
		
		function Gall_back() {
			GALLERY_ON = false;
			TweenLite.to(this.Gallery, 1, {
				x: 480,
				ease: Power2.easeOut
			});
			TweenLite.to(this.Gallery.gallery, .5, {
				x: 480,
				ease: Power2.easeOut
			});
		}
		
		this.open_form.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		
		function fl_MouseClickHandler_11() {
		
			TweenLite.to(this.form, 1, {
				x: 160,
				ease: Power2.easeOut,
				onComplete: addC
			});
			function addC() {
				document.getElementById('obrazec').className = "open";
			}
		}
		
		this.form.form_close.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		
		function fl_MouseClickHandler_12() {
			document.getElementById('obrazec').className = "";
			TweenLite.to(this.form, 1, {
				x: 480,
				ease: Power2.easeIn
			});
		}
		
		
		var UOpen = false;
		
		this.unutarnjost_btn.addEventListener("click", fl_MouseClickHandler_13.bind(this));
		
		function fl_MouseClickHandler_13() {
			UOpen = true;
			TweenLite.to(this.unutarnjost, 1, {
				x: "+=320",
				ease: Power2.easeOut
			})
		}
		
		this.unutarnjost.btn.addEventListener("click", fl_MouseClickHandler_14.bind(this));
		
		function fl_MouseClickHandler_14() {
		
			TweenLite.to(this.unutarnjost, 1, {
				x: "-=320",
				ease: Power2.easeIn
			})
			UOpen = false;
		}
		
		//listen to shake event
		var shakeEvent = new Shake({
			threshold: 15
		});
		shakeEvent.start();
		window.addEventListener('shake', function () {
			if (!UOpen) {
				TweenLite.to(this.unutarnjost, 1, {
						x: "+=320",
						ease: Power2.easeOut
					})	}
		}, false);
		
		//stop listening
		function stopShake() {
			shakeEvent.stop();
		}
		var background = this.background;
		
		var starting = 0;
		var position = background.x;
		var boundH = 380;
		var boundL = -60;
		var element = document.getElementById('canvas');
		Hammer(element).on('swipe', function (e) {
			if (GALLERY_ON !== true) {
				movebg(e);
			}
		})
		
		function movebg(e) {
			var x = background.x;
			console.log(x, e)
			if (e.direction == 2 && x == 380) {
				TweenLite.to(background, 1, {
					x: 109,
					ease: Power2.easeInOut
				})
			} else if (e.direction == 2 && x == 109) {
				TweenLite.to(background, 1, {
					x: -60,
					ease: Power2.easeInOut
				})
			} else if (e.direction == 4 && x == -60) {
				TweenLite.to(background, 1, {
					x: 109,
					ease: Power2.easeInOut
				})
			} else if (e.direction == 4 && x == 109) {
				TweenLite.to(background, 1, {
					x: 380,
					ease: Power2.easeInOut
				})
			}
		
		
		
		}
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_74 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(15).call(this.frame_44).wait(15).call(this.frame_59).wait(15).call(this.frame_74).wait(15).call(this.frame_89).wait(1));

	// Unutrarnjost
	this.unutarnjost = new lib.unutarnjost();
	this.unutarnjost.setTransform(-160,240,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.unutarnjost).wait(90));

	// Obrazac
	this.form = new lib.form2();
	this.form.setTransform(480,240,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.form).wait(90));

	// Besedilo3
	this.movieClip_6 = new lib.Close1();
	this.movieClip_6.setTransform(0,480.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_6).to({regX:160,regY:240,x:160,y:240},14).to({regX:0,regY:0,x:0,y:480},15).to({_off:true},1).wait(60));

	// Besedilo2
	this.movieClip_7 = new lib.close2();
	this.movieClip_7.setTransform(0,480);
	this.movieClip_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_7).wait(30).to({_off:false},0).to({regX:160,regY:240,x:160,y:239},14).to({regX:0,regY:0,x:0,y:480},15).to({_off:true},1).wait(30));

	// Besedilo1
	this.movieClip_8 = new lib.close3();
	this.movieClip_8.setTransform(0,480);
	this.movieClip_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_8).wait(60).to({_off:false},0).to({regX:160,regY:240,x:160,y:239},14,cjs.Ease.get(1)).to({regX:0,regY:0,x:0,y:480.3},15,cjs.Ease.get(-1)).wait(1));

	// Gallery
	this.Gallery = new lib.Gallery();
	this.Gallery.setTransform(480,240.3,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.Gallery).wait(90));

	// CTRL
	this.unutarnjost_btn = new lib.Gall_init();
	this.unutarnjost_btn.setTransform(39.3,185.6,1.279,1.898,0,0,0,32.3,32.4);
	new cjs.ButtonHelper(this.unutarnjost_btn, 0, 1, 2, false, new lib.Gall_init(), 3);

	this.open_form = new lib.Gall_init();
	this.open_form.setTransform(256.1,450.3,1,1,0,0,0,32.3,32.3);
	new cjs.ButtonHelper(this.open_form, 0, 1, 2, false, new lib.Gall_init(), 3);

	this.button_7 = new lib.Gall_init();
	this.button_7.setTransform(63.5,450.3,1,1,0,0,0,32.3,32.3);
	new cjs.ButtonHelper(this.button_7, 0, 1, 2, false, new lib.Gall_init(), 3);

	this.button_7_1 = new lib.Gall_init();
	this.button_7_1.setTransform(63.5,450.3,1,1,0,0,0,32.3,32.3);
	new cjs.ButtonHelper(this.button_7_1, 0, 1, 2, false, new lib.Gall_init(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_7_1},{t:this.button_7},{t:this.open_form},{t:this.unutarnjost_btn}]}).wait(90));

	// Bg
	this.background = new lib.background();
	this.background.setTransform(380,251,1,1,0,0,0,380,167);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#151515").ss(1,1,1).p("AjbiLIG3AAIAAEXIm3AAg");
	this.shape.setTransform(187.2,240.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjbCMIAAkXIG3AAIAAEXg");
	this.shape_1.setTransform(187.2,240.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.background}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.background}]},89).wait(1));

	// Logo
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(90));

	// Controls
	this.button_7_2 = new lib.Gall_init();
	this.button_7_2.setTransform(513,350.9,1,1,0,0,0,32.3,32.3);
	new cjs.ButtonHelper(this.button_7_2, 0, 1, 2, false, new lib.Gall_init(), 3);

	this.instance = new lib.Controls();
	this.instance.setTransform(160,240,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.button_7_2}]}).to({state:[{t:this.instance}]},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,240,1600,960.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;