export default class Card {
    constructor({img, title, descripion}, render) {
        this.img = img,
        this.title = title,
        this.descripion = descripion,
        this.render = render
    }

    _createCardItem() {
        const item = document.createElement('li');
        const image = document.createElement('img');
        const title = document.createElement('h3');
        const itemDescription = document.createElement('p');

        
    }
}