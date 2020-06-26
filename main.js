let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           this.state = Math.round(Math.random(1))
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if(this.state === 0){
               return 'Heads   '
           }else if(this.state === 1){
               return 'Tails   '
           }else return 'You broke it'
    },
    toHTML: function() {
        let image = document.createElement('img');
        if(this.state === 0){
            image.id = 'heads'
            image.src = 'https://i.imgur.com/nLdN2b.jpg'
        }else if(this.state === 1){
            image.id = 'tails'
            image.src = 'https://i.imgur.com/2tsEI27b.jpg'
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};



function display20Flips(){
    let stringCreate = document.createElement('p')
    let body = document.querySelector('body')
    let br = document.createElement('br')
    for(let counter = 0; counter <20; counter++){
        coin.flip()
        stringCreate.append(((counter +  1).toString() + ': '))
        stringCreate.append(coin.toString())
        body.append(stringCreate)

    }
}

function display20Images(){
    let body = document.querySelector('body')
    for(let counter = 0; counter < 20; counter++){
        coin.flip()
        let imgCreate = coin.toHTML()
        body.append(imgCreate)
    }
}


