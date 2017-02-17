/*globals $:false, appVars:false */

(function () {
  var row = -1
  var col = 0
  var item = 0
  var sumPrice = 0
  var arrayPrice = []
  var sortedDataPoints = []
  var gameTileHighlight = 0;
  // get images that will be associated with each for easier understanding... etc...
  var attributeCombinations = {
    'shipping': ['red', 'Est. shipping costs'],
    'outdoor': ['\u26c5', 'Can be placed outdoors'], // patio or green lawn
    'electricity': ['\u26a1', 'Needs electricity'], // electric bolt
    'pump': ['\u26f2', 'Includes a water pump'], // water spray
    'lights': ['\ud83d\udca1', 'Includes a light'], // image of a grow lamp
    'automation': ['\u23f0', 'Includes a timer'], // timer
    'diy': ['\x94\xA8', 'This is a DIY set up'], // hammer and screwdriver
    'waterEfficient': ['&#127754', 'Is water efficient'], // water recycle logo
    'leafyPlants': ['\ud83c\udf3f', 'Can grow leafy plants'], // leafy plant, salad
    'fruitPlants': ['&#127813', 'Can grow fruit plants'], // tomato plant
    'vegetablePlants': ['\ud83c\udf3d', 'Can grow vegetable plants'], // cucumber
    'rootPlants': ['\ud83c\udf60', 'Can grow root plants'], // beet
    'treePlants': ['\ud83c\udf4b', 'Can grow trees'] // lemon tree
  }
  var colorMorphArray = [
    'rgb(255,69,0)',
    'rgb(255,140,0)',
    'rgb(255,99,71)',
    'rgb(255,0,0)',
    'rgb(220,20,60)',
    'rgb(250,128,114)',
    'rgb(240,128,128)',
    'rgb(219,112,147)',
    'rgb(0,0,0)',
    'rgb(255,255,255)'
  ]

  var constructorGame = [
    {'id': 0,
     'name': 'base',
     'width': '125px',
     'height': '250px',
     'row': 0,
     'col': 0,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/jpegImages/base.jpg'
    },
    {'id': 1,
     'name': 'supports',
     'width': '125px',
     'height': '250px',
     'row': 0,
     'col': 1,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/jpegImages/supportLegs.jpg'
    },
    {'id': 2,
     'name': 'top',
     'width': '125px',
     'height': '250px',
     'row': 0,
     'col': 2,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/jpegImages/top.jpg'
    },
    {'id': 3,
     'name': 'shell',
     'width': '125px',
     'height': '250px',
     'row': 0,
     'col': 3,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/jpegImages/shell.jpg'
    },
    {'id': 4,
     'name': 'insert',
     'width': '125px',
     'height': '250px',
     'row': 0,
     'col': 4,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/jpegImages/insert.jpg'
    },
    {'id': 5,
     'name': 'soil',
     'width': '125px',
     'height': '250px',
     'row': 1.4,
     'col': 1,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/jpegImages/bagOfEarth.jpg'
    },
    {'id': 6,
     'name': 'seed',
     'width': '125px',
     'height': '250px',
     'row': 1.4,
     'col': 2,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/jpegImages/transPlant.jpg'
    },
    {'id': 7,
     'name': 'water',
     'width': '125px',
     'height': '250px',
     'row': 1.4,
     'col': 3,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/jpegImages/waterBottle.jpg'
    }
  ]

  $(window).load(function () {
      $('html').fadeIn('slow')
  })

  window.mobilecheck = function () {
    var check = false;
    (function (a) {if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check
  }

  $('#myTurntable ul').on('touchend', function () {
    $('.turntable .icon').css('display', 'none')
  })

  var liString = ''

  if (window.mobilecheck() == true) {
    for (var i = 79; i > 1; i--) {
      liString += '<li data-img-src="data/images/FNVTurnTable/frtsAndVgtblsTurntable-' + (i) + '.jpg"></li>'
    }
    // append to the turntable div
    $('#myTurntable ul').append(liString)
    // initiate Turntable.js
    $('#myTurntable').turntable({
      axis: 'x',
      reverse: false
    })
    $('#turnTableClickMe').css('visibility', 'hidden')
  } else {
    // create turntable images (78 total images, fixed amount)
    $('#myTurntable').on('click', function() {
      for (var i = 1; i < 79; i++) {
        liString += '<li data-img-src="data/images/FNVTurnTable/frtsAndVgtblsTurntable-' + (i) + '.jpg"></li>'
      }
      // append to the turntable div
      $('#myTurntable ul').append(liString)
      // initiate Turntable.js
      $('#myTurntable').turntable({
        axis: 'x',
        reverse: false
      })
      $('#turnTableClickMe').css('visibility', 'hidden')
    })
  }


  // help with buy link touch
  $('#buyLink').on('click', function () {
    location.href = "https://www.etsy.com/listing/494952182/frts-and-vgtbls-self-watering"
  })

 // get all the prices so we know the "playing field" size
  appVars.dataPoints.forEach(function (dataPoint, i) {
    sumPrice += dataPoint.price
    arrayPrice.push(dataPoint.price)
    sortedDataPoints.push(dataPoint)
  })

  arrayPrice.sort(function (a, b) { return a - b })

  appVars.dataPoints.forEach(function (dataPoint) {
    sortedDataPoints.splice(arrayPrice.indexOf(dataPoint.price), 1, dataPoint)
// to indicate that previously value has been found, thus helping with entries with the same price
    arrayPrice.splice(arrayPrice.indexOf(dataPoint.price), 1, 'sorted')
  })

  // get the element
  var elem = document.getElementById('constructionArea')
  // get the distance scrolled on body (by default can be changed)
  var distanceScrolled = document.body.scrollTop
  // create viewport offset object
  var elemRect = elem.getBoundingClientRect()
  //  get the offset from the element to the viewport
  var elemViewportOffset = elemRect.top
  // add them together
  var totalOffset = distanceScrolled + elemViewportOffset
  // log it, (look at the top of this example snippet)
  var rect = document.getElementById('constructionArea').getBoundingClientRect()
  // preload images for constructionArea (total of 8 images, fixed)
  var imgString = ''
  for (var i = 1; i < 9; i++) {
    imgString += '<img id = ' + 'image' + i + ' src="data/images/instructionGameComponents/jpegImages/stage' + i + '.jpg">'
  }
  $('#constructionArea').append(imgString)
  // Loop to create the game elements
  constructorGame.forEach(function (item, i) {

  // 5 denotes amount of tiles that go into first box
    if (i < 5) {
      $('#inTheBoxTileContainer').append(function () {
        return $('<div>').html(item.name)
          .attr('id', item.id)
          .addClass('draggable')
          .addClass('gameTile')
          .addClass('lazy')
          .css({
            'display': 'inline-block',
            'background-image': 'url(' + item.constuctionAreaImagePath + ')',
            'background-size': 'contain'
          })
          .on('dragEnd', gameTileControl)
      })
    } else {
      $('#extraMaterialsTileContainer').append(function () {
        return $('<div>').html(item.name)
          .attr('id', item.id)
          .addClass('draggable')
          .addClass('gameTile')
          .addClass('lazy')
          .css({
            'display': 'inline-block',
            'background-image': 'url(' + item.constuctionAreaImagePath + ')',
            'background-size': 'contain'
          })
          .on('dragEnd', gameTileControl)
      })
    }
  })

  // Initiate highlighting of blocks to start the game
  $('#' + gameTileHighlight).css({
    '-moz-animation-duration': '1.5s',
    '-webkit-animation-duration': '1.5s',
    '-moz-animation-name': 'changeShadow',
    '-webkit-animation-name': 'changeShadow',
    '-moz-animation-iteration-count': 'infinite',
    '-webkit-animation-iteration-count': 'infinite'
  })

  // lazy load images
  $('img.lazy').lazyload()

  $(document).ready(function () {
    var $draggable = $('.draggable').draggabilly({
      grid: [ 20, 20 ]
    })

    $('.handle').on('click touchstart touch', function (e) {
        if ($(e.target).parent().parent().css('width') !== '350px') {
        // Match clicked id to the dataPoint object
          var targetID = $(e.target).parent().parent().attr('id')
          var result = $.grep(appVars.dataPoints, function (e) {
            return e.id === targetID
          })
          var dataPoint = result[0]
          row = 0

          // height of the div dependent on the amount of attribute tiles that will be shown
          var h = (row + 1) * 80 + 50 + 'px'
          $(e.target).parent().parent().animate({
            'background-color': 'white',
            'width': '350px',
            'height': h,
            'z-index': '1000'
          }, 500, 'linear', console.log('animate'))

          $(e.target).parent().parent().css({
            'border': '2px #01a206 solid'
          })

          $(e.target).parent().css({
            'background-color': 'white'
          })
          $(e.target).parent().parent().find('li').css({
            'display': 'block',
            'font-size': '25px'
          })

          if ($(e.target).parent().parent().attr('id') == 'FrtsVgtbls') {
            $(e.target).parent().parent().find('.mainImage').css({
              'width': '55%'
            })
            $(e.target).parent().parent().find('.inside').append(
              $('<img class="secondImage" style="position: absolute; left: 5%; top: 40%; width: 65%;" src="data/images/frts&vgtbls2.jpg" />')
            )
          } else {
            $(e.target).parent().parent().find('.mainImage').css({
              'width': '65%'
            })
          }
        } else {
          $(e.target).parent().parent().animate({
            'width': '250px',
            'height': '250px',
            'z-index': '0'
          }, 500, 'linear', console.log('animate'))
          $(e.target).parent().parent().css({
            'border': 'none'
          })
          $(e.target).parent().css({
            'background-color': 'rgba(255,69,0,0.8)'
          })
          $(e.target).parent().parent().find('li').css({
            'color': 'white'
          })
          $(e.target).parent().parent().find('.secondImage').remove()
          $(e.target).parent().parent().find('.stats').remove()
          $(e.target).parent().parent().find('li:nth-of-type(1n+3)').css('display', 'none')
        }
    }
    )
  })
  // open links in a new tab
  $('a').on('click touchstart touch', function (e) {
    e.preventDefault()
    var win = window.open($(e.target).attr('href'), '_blank')
    win.focus()
  })

  // $('html').on('click', function (e) {
  //   console.log($(e.target).offset())
  // })

  // Functions
  function gameTileControl () {
    var tilePosition = [$(this).offset().left, $(this).offset().top]
    // check if within x range of contruction area
    var withinXrange = (tilePosition[0] > 0 && tilePosition[0] < ($('#constructionArea').offset().left + $('#constructionArea').width()))
    // check if within y range of constuction area
    var withinYrange = (tilePosition[1] > 0) && (tilePosition[1] < ($('#constructionArea').offset().top) + $('#constructionArea').height())
    // checks if within construction area and the right block in sequence.
    if (withinYrange && withinXrange && ($(this).attr('id') == gameTileHighlight)) {
      $(this).remove()
      // control the flow of the game, highlighting the next piece that needs to be dropped into the construction area
      gameTileHighlight += 1
      $('#' + gameTileHighlight).css({
        '-moz-animation-duration': '1.5s',
        '-webkit-animation-duration': '1.5s',
        '-moz-animation-name': 'changeShadow',
        '-webkit-animation-name': 'changeShadow',
        '-moz-animation-iteration-count': 'infinite',
        '-webkit-animation-iteration-count': 'infinite'
      })
// frost all tiles that are not in sequence until selected
      $('#constructionArea').css('border', 'none')
      $('#constructionArea').html($('#constructionArea').html().replace('Drag and Drop Here', ''))
      $('#constructionArea i').remove()
      $('#constructionArea img').css('display', 'none')
      $('#image' + gameTileHighlight + '').css('display', 'block')
      // $('#constructionArea').css('background-image','url(../data/images/instructionGameComponents/stage' + gameTileHighlight + '.png)')
      // now need a way to change the construction area tile to reflect next step of the game
      if (constructorGame[gameTileHighlight]) {
        $('#constructionArea').css('background', constructorGame[gameTileHighlight].constuctionAreaImagePath)
      }
      // check to see if row need to be moved up during incremental construction
      if (gameTileHighlight == 5) {
        $('#inTheBox').remove()
        $('#extraMaterials').css({
          'margin': 'auto',
          'padding-left': '0'
        })

      } else if (gameTileHighlight === 8) {
        $('#extraMaterials').remove()
        $('#constructionArea').css({
          'margin': '50px auto',
          'display': 'block',
        })
        $('section').css('margin-top','10px')
      }
    }
  }



}
)()
