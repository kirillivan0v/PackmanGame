function $(tag, className = null){
    if(tag.startsWith('<') && tag.endsWith('>'))
    {   
        if(className){
            let el = document.createElement(tag.substring(1, tag.length-1));
                el.classList.add(className);
            return el;
        }else{
            return document.createElement(tag.substring(1, tag.length-1));
        }
        
    }else{
        return document.querySelector(tag);
    }
}
