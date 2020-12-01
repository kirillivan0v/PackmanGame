class Gamemap{
    constructor(){
       
        let e = new Empty();
        this.grid = [
            [e, e, e, e, e, e, e, e, e, e],
            [e, e, e, e, e, e, e, e, e, e],
            [e, e, e, e, e, e, e, e, e, e],
            [e, e, e, e, e, e, e, e, e, e],
            [e, e, e, e, e, e, e, e, e, e],
            [e, e, e, e, e, e, e, e, e, e],
            [e, e, e, e, e, e, e, e, e, e],
            [e, e, e, e, e, e, e, e, e, e],
            [e, e, e, e, e, e, e, e, e, e],
            [e, e, e, e, e, e, e, e, e, e]
        ];
        this.className = 'gamemap'
    }

    render(){
        let map = $('<div>');
            map.classList.add(this.className);

        if($(`.${this.className}`))
            $(`.${this.className}`).remove()
        
        for(let rows = 0; rows < this.grid.length; rows++){
            for(let columns = 0; columns < this.grid[0].length; columns++){
                this.grid[rows][columns].render(map);
            }
        }

        $('.wrapper').appendChild(map);
    }
}