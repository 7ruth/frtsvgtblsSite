(function () {
  var hash
  var check
  var row = -1
  var sumPrice = 0
  var arrayPrice = []
  var gameTileHighlight = 0
  var constructorGame = [
    {'id': 0,
     'name': 'base',
     'width': '125px',
     'height': '250px',
     'row': 0,
     'col': 0,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/optimizedImages/base.jpg'
    },
    {'id': 1,
     'name': 'supports',
     'width': '125px',
     'height': '250px',
     'row': 0,
     'col': 1,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/optimizedImages/supportLegs.jpg'
    },
    {'id': 2,
     'name': 'top',
     'width': '125px',
     'height': '250px',
     'row': 0,
     'col': 2,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/optimizedImages/top.jpg'
    },
    {'id': 3,
     'name': 'shell',
     'width': '125px',
     'height': '250px',
     'row': 0,
     'col': 3,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/optimizedImages/shell.jpg'
    },
    {'id': 4,
     'name': 'insert',
     'width': '125px',
     'height': '250px',
     'row': 0,
     'col': 4,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/optimizedImages/insert.jpg'
    },
    {'id': 5,
     'name': 'soil',
     'width': '125px',
     'height': '250px',
     'row': 1.4,
     'col': 1,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/optimizedImages/bagOfEarth.jpg'
    },
    {'id': 6,
     'name': 'seed',
     'width': '125px',
     'height': '250px',
     'row': 1.4,
     'col': 2,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/optimizedImages/transPlant.jpg'
    },
    {'id': 7,
     'name': 'water',
     'width': '125px',
     'height': '250px',
     'row': 1.4,
     'col': 3,
     'constuctionAreaImagePath': 'data/images/instructionGameComponents/optimizedImages/waterBottle.jpg'
    }
  ]

  // on initial scroll implement lazy load
  $(window).scroll(function () {
    // lazy load images
    $('.lazy').unveil(1000)
  })

  // execute turntable to make main turntable load
  var s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.innerHTML = "$('#myTurntable').turntable({axis: 'x',reverse: true})"
  var x = document.getElementsByTagName('script')[0]
  x.parentNode.insertBefore(s, x)

  window.mobilecheck = function () {
    check = false;
    (function (a) {if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check
  }

  window.mobilecheck();

  $('#myTurntable ul').on('touchend', function () {
    $('.turntable .icon').css('display', 'none')
  })

  var liString = []

  function loadTurnTableImage () {
    $('.turntable ul').css('display', 'none')
    $('#placeHolderImage').css('display', 'block')
    $('#placeHolderImage').css('visibility', 'visible')
    $('#loadingIcon').css('visibility', 'visible')

    liString = []
    for (var i = 79; i > 1; i--) {
      // liString += '<li data-img-src="data/images/FNVTurnTable/frtsAndVgtblsTurntable-' + (i) + '.jpg"></li>'
      var li = $('<li>').attr('data-img-src', 'data/images/FNVTurnTable/frtsAndVgtblsTurntable-' + (i) + '.jpg')
      liString.push(li)
    }
    // append to the turntable div
    $('#myTurntable ul').append(liString)
    // initiate Turntable.js
    $('#myTurntable').turntable({
      axis: 'x',
      reverse: true
    })

    // when all images finish loading, display everything again
    $('#myTurntable').imagesLoaded(function () {
      $('#placeHolderImage').css('display', 'none')
      $('.turntable ul').css('display', 'block')
      $('#loadingIcon').css('visibility', 'hidden')
      $('#myTurntable.turntable ul li img').css('animation', 'none')
      if (check) {
        console.log("aaaagggg")
        $('.turntable .icon').css('display', 'block')
        $('#myTurntable ul').on('touchend', function () {
          $('.turntable .icon').css('display', 'none')
        })
      }
    })

  }

  $('#myTurntable').on('click touchend', function () {
    if ($('#myTurntable ul li').length < 3) {
      loadTurnTableImage()
    }
  })

  // help with logo click
  $('.logo').on('click', function () {
    location.href = "http://www.frtsvgtbls.com"
  })

  $('#buyLink').on('click', function(){
    location.href = "https://www.etsy.com/shop/FrtsNVgtbls"
  })

  // on click of Free Seeds banner which will scroll you to the sign up page
  $('.rainbow-wordmark__image').on('click', function(){
    hash = '#mailChimp'
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 0
    }, 500, function () {
    })
  })

  $('.bannerCloseButton').on('click', function(){
    $('#subscribeBanner').css('display', 'none')
  })

  // fade in marketing banner
  setTimeout(function(){
    $('#subscribeBanner').fadeIn(3333)
  }, 3333)


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
    imgString += '<img class="lazy" id = ' + 'image' + i + ' src="data/images/instructionGameComponents/optimizedImages/stage' + i + '.jpg">'
  }
  $('#constructionArea').append(imgString)
  // Loop to create the game elements
  constructorGame.forEach(function (item, i) {

  // 5 denotes amount of tiles that go into first box, all other tiles go into extra materials block
    if (i < 5) {
      $('#inTheBoxTileContainer').append(
        makeGameTile(item)
      )
    } else {
      $('#extraMaterialsTileContainer').append(
        makeGameTile(item)
      )
    }
  })

  // Initiate highlighting of blocks to start the game
  $('#' + gameTileHighlight).css({
    '-moz-animation-duration': '3.0s',
    '-webkit-animation-duration': '3.0s',
    '-moz-animation-name': 'changeShadow',
    '-webkit-animation-name': 'changeShadow',
    '-moz-animation-iteration-count': 'infinite',
    '-webkit-animation-iteration-count': 'infinite'
  })

  $(document).ready(function () {
    var $draggable = $('.draggable').draggabilly({
      grid: [ 20, 20 ]
    })

    $('.handle').on('click touchstart touch', function (e) {
        if ($(e.target).parent().parent().css('width') !== '350px') {
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
    })

    mediaGallery.forEach(function (mediaItem, index) {
      switch (mediaItem.media) {
        case 'instructions':
          var instructionsContent = [];
          var textObj = {};
          var partsLIs = '';
          // Search the console.log(textForMedia.textForInstructions01BottlePlanter.title);
          // to see if there is an associated text
          if (textForMedia[mediaItem.textKey]) {
            textObj = textForMedia[mediaItem.textKey];
          }

          for (var i = 1; i < mediaItem.numberOfImages + 1; i++) {
            instructionsContent.push(
              $('<div>')
                .attr('id', index + "instructions" + "Unit" + i)
                .addClass('instructionsUnit')
                .append(
                  $('<img>')
                    .attr('src', mediaItem.pathToImages + mediaItem.nameConvention + i + ".jpg")
                )
                .append(
                  $('<p>')
                    .html(textObj['ImageCaption' + i])
                )
            )
          }

          for (var i = 0; i < Object.keys(textObj.partsList).length; i++) {

            partsLIs += '<li>' + Object.keys(textObj.partsList)[i] + ' : ' + textObj.partsList[Object.keys(textObj.partsList)[i]] +'</li>'
          }

          //if mobile change things up.
          var distMultiplier;
          var buttonDist;
          var dist1;
          var dist2;
          if (check) {
            distMultiplier = 1500
            buttonDist = -450
            dist1 = 1
            dist2 = 3.6
            dist3 = 1.80
          } else {
            distMultiplier = 555
            buttonDist = -450
            dist1 = 2.15
            dist2 = 2.2
            dist3 = -0.5
          }

          $('#mediaGalleryContainer').append(
            $('<div>')
              .attr('id', index + "instructions")
              .addClass('mediaTile')
              .addClass('mediaTileText')
              .append(
                $('<H2>')
                .attr({
                  'class': 'mediaTileTextHeading'
                })
                .html(textObj.title)
              )
              .append(
                $('<img>').attr({
                  'src': mediaItem.titleImage,
                  'data-src': '',
                  'class': 'mediaTileTextTitleImage'
                })
              )
              .append(
                $('<p>')
                .attr({
                  'class': 'mediaTileTextDescription'
                })
                .html(textObj.description)
              )
              .append(
                $('<ul>')
                .attr({
                  'class': 'mediaTileTextPartsList'
                })
                .html(partsLIs)
              )
              .append(
                $('<div>')
                .attr({
                  'class': 'mediaTileTextContainer'
                })
                .html(instructionsContent)
              )
              .append(
                $('<img>').attr({
                  'src': mediaItem.endImage,
                  'class': 'mediaTileTextEndImage'
                })
              )
              .append(
                $('<p>').html(
                  mediaItem.endImageCaption
                )
              )
              .append(
                $('<div>')
                  .addClass('readMore')
                  .addClass('readMore'+ index + 'instructions')

                  .css({
                    top: (dist1 * distMultiplier + buttonDist) + 'px'
                  })
                  .append($('<div>')
                    .html('Read More')
                  )
                  .append($('<div>')
                    .addClass('bottomBlur')
                    .css({
                      height: '400px'
                  }))
              )
              .append(
              )

              // instructions will be an array of pics vs an array of text descriptions... ally 2 lists by index... unless you got better? Pictures are just in a folder and link a folder instuctions...
          )
          // set up listener for Read More button to expand the div
          $('.readMore' + index + 'instructions').on('click touchend', function(){
            $('#' + index + 'instructions').css({
              'height': ((mediaItem.numberOfImages - dist3) * distMultiplier) + 'px',
            })
            $('.readMore' + index + 'instructions').css('display','none')
            $('.bottomBlur').remove();
          })

        break
        case 'img':
          $('#mediaGalleryContainer').append(
            $('<div>')
              .attr('id', index + "img")
              .addClass('mediaTile')
              .append(
                $('<img>').attr({
                  'src': '',
                  'data-src': mediaItem.path,
                  'class': 'lazy'
                })
              )
              .append(
                $('<p>').html(mediaItem.description)
              )
          )
          break
        case 'turntable':
        $('#mediaGalleryContainer').append(
          $('<div>')
            .attr('id', mediaItem.id)
            .addClass('mediaTile')
            .addClass('turntable')
            .addClass('turntable' + index)
            .append(
              $('<img>')
                .attr({
                  'src': mediaItem.path + '/' + mediaItem.firstImage,
                  'class': 'lazy placeHolderImage'
                })
                .css({
                  'display': 'none'
                })
            )
            .append($('<img>')
              .attr({
              'class': 'loadingIcon',
              'src': 'data/images/icons/loadingGear.gif'
              })
            )
            .append($('<img>')
              .attr({
              'class': 'icon',
              'src': 'data/images/icons/whiteSwipeIcon.png',
              'alt': 'swipe image side to side to see frts and vgtbls set-up rotate 180 degrees in the image'
              })
            )
            .append(
              $('<ul>')
                .append(
                  $('<li>')
                    .attr(
                      'data-img-src', mediaItem.path + '/' + mediaItem.nameConvention + 1 + '.jpg'
                    )
                )
            )
            .append(
              $('<p>').html(mediaItem.description)
            )
        )

        $('#mediaGalleryContainer .mediaTile.turntable ul li').on('click', function(ev){
          var target
          if ($(ev.target)[0].tagName !== 'IMG') {
            target = $(ev.target).find('img')
          } else {
            target = $(ev.target)
          }
          // hide the UL to avoid loading akwardness
          target.parent().parent().css('display', 'none')
          target.parent().parent().parent().find('img').css('visibility', 'visible')
          target.parent().parent().parent().find('img').css('display', 'inherit')
          target.parent().parent().parent().find('.loadingIcon').css('visibility', 'visible')
          target.parent().parent().parent().find('.placeHolderImage').css({
            'visibility': 'visible'
          })

          liString = []
            for (var i = 2; i < mediaItem.numberOfImages; i++) {
              // liString += '<li data-img-src="data/images/FNVTurnTable/frtsAndVgtblsTurntable-' + (i) + '.jpg"></li>'
              var li = $('<li>').attr('data-img-src', mediaItem.path + '/' + mediaItem.nameConvention + i + '.jpg')
              liString.push(li)
            }
            // append to the turntable div
            target.parent().parent().parent().find('ul').append(liString)

            var selectedEl = target.parent().parent().parent()
            // initiate Turntable.js
            $('.turntable' + index).turntable({
              axis: 'x',
              reverse: false
            })

            selectedEl.imagesLoaded(function () {
              selectedEl.find('.placeHolderImage').css('display', 'none')
              selectedEl.parent().find('.loadingIcon').css('visibility', 'hidden')
              selectedEl.parent().find('.turntable .icon').css('display', 'block')
              selectedEl.parent().find('.mediaTile.turntable img.icon').css('display', 'none')
              selectedEl.parent().find('.turntable ul li img').css('animation', 'none')
              selectedEl.parent().find('ul').css('display', 'block')
              selectedEl.parent().find('ul').on('touchend', function () {
                selectedEl.parent().find('.turntable .icon').css('display', 'none')
              })
            })


        }).bind(mediaItem, index)

        //to activate the first loaded image
        $('.turntable' + index).turntable({
          axis: 'x',
          reverse: false
        })
        default:
          // console.log('+_+')
      }
    })

    window.addEventListener ?
    window.addEventListener("load", onLoadHashHandler() ,false) :
    window.attachEvent && window.attachEvent("onload", onLoadHashHandler());

    function onLoadHashHandler () {
      // Check if location hash is set (only want to see specific part of the page)
      if (!handleWindowLocationHash()) {
        // smooth out loading and reveal (if want to see specific part of the page then wait until that part is loaded for reveal)
        $('html').fadeIn('slow')
      } else {
          if ($(hash).length) {
            $('html').fadeIn('fast')
            if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
              // $('body').scrollTop($(hash).offset().top - 70)
              setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 400
                }, 500, function() {
                });
              }, 500)
            } else {
              $('html, body').scrollTop($(hash).offset().top - 70)
            }
          }
      }
    }

  // end of document.ready() function
  })

  // open links in a new tab
  $('a').on('click touchstart touch', function (e) {
    e.preventDefault()
    var win = window.open($(e.target).attr('href'), '_blank')
    win.focus()
  })

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
        '-moz-animation-duration': '3.0s',
        '-webkit-animation-duration': '3.0s',
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
        $('#' + gameTileHighlight).remove()
        $('section').css('margin-top','10px')
      }
    }
  }

  function makeGameTile (item) {
    return $('<div>').html('<p>' + item.name + '</p>')
      .attr('id', item.id)
      .addClass('draggable')
      .addClass('gameTile')
      .css({
        'display': 'inline-block',
        // 'background-image': 'url(' + item.constuctionAreaImagePath + ')',
        'background-size': 'contain'
      })
      .on('dragEnd', gameTileControl)
      .append(function () {
        return $('<img>')
          .addClass('lazy')
          .attr('src', '')
          .attr('data-src', item.constuctionAreaImagePath)
      })
  }

  function handleWindowLocationHash () {
    if (window.location.hash) {
      // see if there is a hash location specified
      hash = window.location.hash
      return true
    }
    return false
  }

  // code for wordmark function
  var wordmark = document.querySelector('.rainbow-wordmark');
  var wordmarkImg = wordmark.querySelector('.rainbow-wordmark__image');
  var canvas = wordmark.querySelector('.rainbow-wordmark__canvas');
  var ctx = canvas.getContext('2d');
  var trailCount = 100;
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;

  // ----- load image ----- //

  var whiteImg = new Image();
  whiteImg.onload = onWhiteImgLoad;
  whiteImg.src = 'data/images/subscribeFreeSeedscopy.png';

  function onWhiteImgLoad() {
    setColorCanvas( '1', 'rgb(255,122,90)' );
    setColorCanvas( '2', 'rgb(255,185,95)' );
    setColorCanvas( '3', 'rgb(255,122,90)' );
    setColorCanvas( '4', 'rgb(255,185,95)' );

    animate();
  }

  var colorCanvases = {};

  // get a canvas with the logotype rendered in a color
  function setColorCanvas( name, color ) {
    var colorCanvas = document.createElement('canvas');
    colorCanvas.width = whiteImg.width;
    colorCanvas.height = whiteImg.height;
    var colorCtx = colorCanvas.getContext('2d');
    colorCtx.drawImage( whiteImg, 0, 0 );
    colorCtx.globalCompositeOperation = 'source-in';
    colorCtx.fillStyle = color;
    colorCtx.fillRect( 0, 0, whiteImg.width, whiteImg.height );
    colorCanvases[ name ] = colorCanvas;
  }

  // ----- animate rainbow ----- //

  var isHovering = true;
  var t = 0;

  var rainbow = [];
  (function() {
    for ( var i=0; i < trailCount; i++ ) {
      rainbow.push(null);
    }
  })();

  wordmarkImg.onmouseenter = function() {
    isHovering = true;
  };

  wordmarkImg.onmouseleave = function() {
    isHovering = false;
  };

  var colorCycle = [ '1', '2', '3', '4'];

  function animate() {
    update();
    render();
    requestAnimationFrame( animate );
  }

  function update() {
    t++;

    var colorCycleIndex = Math.floor( t / 8 ) % 4;
    var nextColor = isHovering ? colorCycle[ colorCycleIndex ] : null;

    rainbow.pop();
    rainbow.pop();
    rainbow.pop();
    rainbow.unshift( nextColor );
    rainbow.unshift( nextColor );
    rainbow.unshift( nextColor );
  }

  function render() {
    ctx.clearRect( 0, 0, canvasWidth, canvasHeight );

    // iterate backwards through rainbow
    for (var i = rainbow.length - 1; i >= 0; i--) {
      var color = rainbow[i]
      if (color) {
        ctx.drawImage(colorCanvases[ color ], i + 1, i + 1)
      }
    }
  }

})()
