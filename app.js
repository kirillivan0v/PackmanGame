let map = new Gamemap();
let pacman = new Pacman(0,0, map);
    pacman.spawn();
    map.render();


document.body.addEventListener('keydown', function(e){
    let func;

    if(e.key == 'ArrowUp')
        func = pacman.controls.keyUp.bind(pacman);
    else if(e.key == 'ArrowDown')
        func = pacman.controls.keyDown.bind(pacman);
    else if(e.key == 'ArrowLeft')
        func = pacman.controls.keyLeft.bind(pacman);
    else if(e.key == 'ArrowRight')
        func = pacman.controls.keyRight.bind(pacman);
    else return;

    func();
    map.render();
})