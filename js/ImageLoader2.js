class ImageLoader {
  constructor(){
  this.images = [];
  this.imagestoload = 0;
  this.loadedimages = 0;
  this.appendedimages = 0;
  this.percent = 0;
  }

  appender(){
    return 0;
  }

  allImagesloaded(){
    return 0;
  }

  loadImages(path){
    let loader = this;
    loader.images[loader.imagestoload] = new Image();
    loader.images[loader.imagestoload].src = path ;
    loader.imagestoload = loader.imagestoload + 1 ;
    loader.images[loader.imagestoload - 1].onload = function(){
       loader.loadedimages++;
       loader.appender(loader.images[loader.appendedimages]);
       loader.appendedimages++;
       loader.percent = (loader.loadedimages / loader.imagestoload) * 100 ;
       //console.log('imagesloaded = ' + loader.percent.toFixed(2) + '%');
       if(loader.imagestoload == loader.loadedimages){
         loader.allImagesloaded();
       }
    }
  return (loader.images[loader.appendedimages] ) ;
  }
}
