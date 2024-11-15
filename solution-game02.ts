export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    private updateAgedBrie(item: Item) {
        if (item.quality < 50) {
            item.quality++;
        }
    }

    private updateBackstage(item: Item) {
        if (item.quality < 50) {
            item.quality++;
            if (item.sellIn < 11) {
                item.quality = item.quality + 1;
            }
            if (item.sellIn < 6) {
                item.quality = item.quality + 2;
            }
        }
    }

    private updateConjures(item: Item) {
        if (item.quality > 0) {
            item.quality -=2;
        }
    }

    private updateDefaultItem(item: Item) {
        if (item.quality > 0) {
            item.quality--;
        }
    }

    private handleExpiredItem(item: Item) {
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert' || item.name == 'Conjures') {
            item.quality = 0;
        }
    }

    updateItem(item: Item) {
        switch (item.name) {
            case 'Aged Brie':
                this.updateAgedBrie(item);
                break;
            case 'Backstage passes to a TAFKAL80ETC concert':
                this.updateBackstage(item);
                break;
            case 'Conjures':
                    this.updateConjures(item);
                    break;
            case 'Sulfuras, Hand of Ragnaros':
                break;
            default:
                this.updateDefaultItem(item);
                break;
        }

        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.sellIn--;
        }

        if (item.sellIn < 0) {
            this.handleExpiredItem(item);
        }
    }

    updateQuality() {
        for (const item of this.items) {
            this.updateItem(item);
        }
        return this.items;
    }
}
