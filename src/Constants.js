class Item {
    constructor(item_number, sizes = [
        's',
        'm',
        'l',
        'xl',
        'xxl'
    ], description = '', color = '', price = 20, front_img = '', back_img = '', logo_img = '', logo_img_zoom = '', model_img = '', model_img_sec = '',) {
        this.id = new Symbol();
        this.item_number = item_number;
        this.sizes = sizes;
        this.description = description;
        this.color = color;
        this.price = price;
        this.front_img = front_img;
        this.back_img = back_img;
        this.logo_img = logo_img;
        this.logo_img_zoom = logo_img_zoom;
        this.model_img = model_img;
        this.model_img_sec = model_img_sec;
    }
}

const inventory = [new Item()]

export default {inventory};
