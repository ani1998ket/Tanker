class ImageLoader {
    constructor(){
        this.totalImageCount = 0;
        this.loadedImageCount = 0;
        this.allImagesLoaded = false;
        this.allImages = [];

        this.onEveryImageLoaded = ()=>{return 0};
        this.onEachImageLoad = ()=>{return 0};
    }
    load( path ){
        this.totalImageCount++;

        let currentImage = new Image();
        currentImage.src = path;
        this.allImages.push(currentImage);

        let loader = this;
        currentImage.onload = function(){
            loader.loadedImageCount++;
            loader.onEachImageLoad();
            if(loader.loadedImageCount == loader.totalImageCount){
                loader.allImagesLoaded = true;
                loader.onEveryImageLoaded();
            }
        }
        return currentImage;        
    }

}
