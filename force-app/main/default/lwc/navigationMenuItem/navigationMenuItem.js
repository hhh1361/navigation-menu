import { LightningElement, api } from 'lwc';

export default class NavigationMenuItem extends LightningElement {
    @api menuItem
    @api label
    @api href
    // nest level is needed to have different backgrounds on different lays
    @api nestLevel
    @api isFirstLevel
    @api isSubmenuClosed


    get listClassname() {
        return `navmenu__list nest-level-${this.nestLevel} ${this.isSubmenuClosed ? 'navmenu__hide' : ''}`
    }
    get pointerClassname() {
        return `navmenu__submenu_pointer ${this.isSubmenuClosed ? '' : 'pointer-bottom'}`
    }
    get next() {
        return +this.nestLevel + 1
    }

    handleSubmenuClick(e) {
        // close other menus except current branch
        const selectedEvent = new CustomEvent("closemenus", {
            detail: {},
            bubbles: true,
        });            
        if(this.isSubmenuClosed) {
            this.dispatchEvent(selectedEvent);
            this.isSubmenuClosed = false;
        } else {
            this.dispatchEvent(selectedEvent);
            this.isSubmenuClosed = true
        }
    }
    @api handleCloseMenus() {
        const siblings = this.template.querySelectorAll('c-navigation-menu-item')
        siblings.forEach(element => {
            element.isSubmenuClosed = true;
            element.handleCloseMenus()
        })
    }
}