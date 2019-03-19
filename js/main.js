let Game = {
    isRunning : false,
    screens : [],
    activeScreen : 0,
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
Game.render = ( ) => {
    renderScreen(Game.screens(Game.activeScreen));
};
