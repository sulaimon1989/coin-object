let coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random())
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        coin.flip()
        if (this.state === 0) {
            document.body.append(" heads ")
        }
        else {
            document.body.append("tails ")
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
        let image = document.createElement('img');
        coin.flip()
        if (this.state === 0) {
            image.src = "https://upload.wikimedia.org/wikipedia/commons/2/2e/US_One_Cent_Obv.png" 
            document.body.append(image)
        }
        else {
            image.src = "https://www.marshu.com/articles/images-website/articles/presidents-on-coins/penny-cent-coin-tail.jpg"
            document.body.append(image)
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

function twentyflips() {
    for (let index = 0; index < 20; index++) {
        coin.toString()
    }
}

twentyflips()

function twentyImages() {
    for (let index = 0; index < 20; index++) {
        coin.toHTML()

    }
}

twentyImages()
