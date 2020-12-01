class Empty{
    constructor(){
        this.class = '.empty';
    }

    render(root){
        let div = $('<div>');
            div.classList.add(this.class);
        root.appendChild(div);
    }
}