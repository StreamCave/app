// ; (function ($) {
//  $.fn.colorvideo = function (options) {
//   var defaults = {
//    'videoUrl': '',
//    'videoWidth': 0,
//    'videoHeight': 0,
//    'loop': 1000,
//    'autoplay': true,
//    'muted': false,
//    'validate': true,
//    'onVideoClick': null,
//    'onVideoHover': null,
//   };

//   var opts = $.extend({}, defaults, options || {});
//   var canvasMousePos = {
//    x: 0,
//    y: 0
//   };
//   var canvasOffset = {
//    left: 0,
//    top: 0
//   };
//   var colorData = {};
//   var _this = this;
//   init();

//   // this.play = function () {
//   //  $(this).find("#myvideo")[0].play()
//   // }
//   // this.pause = function () {
//   //  $(this).find("#myvideo")[0].pause()
//   // }

//   function init() {
//    var colorvideoDom = "<div id='color-video' style='height:" + opts.videoHeight + "px;width:" + opts.videoWidth + "px'> \
//        <canvas id='mycanvas' width=" + opts.videoWidth + " height=" + opts.videoHeight +
//     "></canvas>\
//     <object id='myvideo' width='480' height='500' data='https://www.youtube.com/embed/il_t1WVLNxk'></object>\
//        </div > ";
//    $(_this).html(colorvideoDom);
//    canvasOffset = offset($(_this).find("#mycanvas")[0])
//    playCanvas();
//    $(_this).on("mousemove", function (e) {
//     var canvasX = Math.floor(e.pageX - canvasOffset.left)
//     var canvasY = Math.floor(e.pageY - canvasOffset.top)
//     canvasMousePos.x = canvasX
//     canvasMousePos.y = canvasY
//     if (opts.onVideoHover != null) {
//      var mycanvas = $(_this).find("#mycanvas")[0]
//      colorData = getPixelColor(mycanvas, canvasMousePos.x, canvasMousePos.y)
//      opts.onVideoHover(e, colorData)
//     }
//    })
//    $(_this).click(function (e) {
//     var mycanvas = $(_this).find("#mycanvas")[0]
//     colorData = getPixelColor(mycanvas, canvasMousePos.x, canvasMousePos.y)
//     opts.onVideoClick(e, colorData)
//    })
//    // setInterval(() => {
//    //  console.log('TESTETSTST')
//    //  var test = getPixelColor(mycanvas, 291, 191);
//    //  console.log(test)
//    // }, 1000);
//   }

//   function playCanvas() {
//    var mycanvas = $(_this).find("#mycanvas")[0]
//    var myvideo = $(_this).find(".video-stream")[0]
//    var context = mycanvas.getContext("2d")
//    context.drawImage(myvideo, 0, 0, opts.videoWidth, opts.videoHeight)
//    colorData = getPixelColor(mycanvas, canvasMousePos.x, canvasMousePos.y)
//    requestAnimationFrame(playCanvas)
//   }

//   function getPixelColor(canvas, x, y) {
//    var thisContext = canvas.getContext("2d")
//    var imageData = thisContext.getImageData(x, y, 1, 1)
//    var pixel = imageData.data
//    var r = pixel[0]
//    var g = pixel[1]
//    var b = pixel[2]
//    var a = pixel[3] / 255
//    a = Math.round(a * 100) / 100
//    var rHex = r.toString(16)
//    r < 16 && (rHex = "0" + rHex)
//    var gHex = g.toString(16)
//    g < 16 && (gHex = "0" + gHex)
//    var bHex = b.toString(16)
//    b < 16 && (bHex = "0" + bHex)
//    var rgbaColor = "rgba(" + r + "," + g + "," + b + "," + a + ")"
//    var rgbColor = "rgb(" + r + "," + g + "," + b + ")"
//    var hexColor = "#" + rHex + gHex + bHex
//    return {
//     rgba: rgbaColor,
//     rgb: rgbColor,
//     hex: hexColor,
//     r: r,
//     g: g,
//     b: b,
//     a: a
//    }
//   }

//   function offset(obj) {
//    var top = 0,
//     left = 0
//    if (obj) {
//     while (obj.offsetParent) {
//      top += obj.offsetTop
//      left += obj.offsetLeft
//      obj = obj.offsetParent
//     }
//    }
//    return {
//     top: top,
//     left: left
//    }
//   }
//   return this;
//  }
// })(jQuery)




// var videoobj = $("#videodom").colorvideo({
//  videoUrl: "https://www.youtube.com/embed/u9foWyMSATM?autoplay=true&controls=0&enablejsapi=1&origin=https%3A%2F%2Fv4.dev.symfony.artaic.fr&widgetid=1",
//  videoWidth: 480,
//  videoHeight: 204,
//  onVideoClick: function (e, colorData) {
//   $("#colorrgb").html(colorData.rgb.toString())
//   $("#colorhex").html(colorData.hex)
//   $("#colorbox").css("background", colorData.hex)
//  },
//  onVideoHover: function (e, colorData) {
//   // if you need to get color data when mouseover, enable this
//   // $("#colorrgb").html(colorData.rgb.toString())
//   // $("#colorhex").html(colorData.hex)
//   // $("#colorbox").css("background", colorData.hex)
//  }
// })

// // $("#playbtn").click(function () {
// //  videoobj.play()
// // })
// // $("#pausebtn").click(function () {
// //  videoobj.pause()
// // })