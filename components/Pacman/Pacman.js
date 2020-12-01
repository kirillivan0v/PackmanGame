class Pacman{
    constructor(x, y, map){
        this.x = x;
        this.y = y;
        this.map = map;
        this.rotate = 'right';
        this.controls = {

            keyUp(){
                if(this.x == 0)
                    return;

                this.map.grid[this.x][this.y] = new Empty();
                this.map.grid[--this.x][this.y] = this;
                console.log("X / Y: ", this.x + " / " + this.y);
                this.rotate = 'top';
            },
            keyDown(){
                if(this.x == this.map.grid.length-1)
                    return;

                this.map.grid[this.x][this.y] = new Empty();
                this.map.grid[++this.x][this.y] = this;
                console.log("X / Y: ", this.x + " / " + this.y);
                this.rotate = 'bottom';
            },
            keyLeft(){
                if(this.y == 0)
                    return;

                this.map.grid[this.x][this.y] = new Empty();
                this.map.grid[this.x][--this.y] = this;
                console.log("X / Y: ", this.x + " / " + this.y);
                this.rotate = 'left';
            },
            keyRight(){

                if(this.y == this.map.grid[0].length-1)
                    return;

                this.map.grid[this.x][this.y] = new Empty();
                this.map.grid[this.x][++this.y] = this;
                console.log("X / Y: ", this.x + " / " + this.y);
                this.rotate = 'right';
            }
        }
    }

    render(root){
        this.root = root;
        let div = $('<div>', 'pacman');
        switch (this.rotate) {
            case 'right':
                div.classList.add('right')
                break;
            case 'bottom':
                div.classList.add('bottom')
                break;
            case 'left':
                div.classList.add('left')
                break;
            case 'top':
                div.classList.add('top')
                break;
            default:
                break;
        }
        root.appendChild(div);   
    }

    spawn(){
        this.map.grid[this.x][this.y] = this;
        console.log(this.map.grid[this.x])
    }


}