let Game = {
    isRunning : false,
};
Game.start = () => {
    Game.isRunning = true;
    Game.update();
};
Game.pause = () => {
    Game.isRunning = false;
};
Game.reset = () => {

};
Game.update = () => {
    if(Game.isRunning){
        window.requestAnimationFrame(Game.update);
    }
};
Game.draw = ( canvas ) => {

};
