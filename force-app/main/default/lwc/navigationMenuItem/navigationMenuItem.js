import { LightningElement, api } from 'lwc';

export default class NavigationMenuItem extends LightningElement {
    @api menuItem
    @api label
    @api href

    connectedCallback() {
        // console.log('menu item: ', JSON.parse(JSON.stringify(this.menuItem)).length)
        // console.log('isArray1: ', this.menuItem.length)
    }
}