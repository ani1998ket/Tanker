class SoundLoader {
    constructor(){
        this.totalCount = 0;
        this.loadedCount = 0;
        this.allLoaded = false;
        this.all = [];

        this.onAllLoaded = ()=>{return 0};
        this.onEachLoaded = ()=>{return 0};
    }
    load( path ){
        this.totalCount++;

        let current = new Audio(path);
        this.all.push(currentImage);

        let loader = this;
        current.onload = function(){
            loader.loadedCount++;
            loader.onEachLoaded();
            if(loader.loadedCount == loader.totalCount){
                loader.allLoaded = true;
                loader.onAllLoaded();
            }
        }
        return current;        
    }

}
