import { LightningElement, api } from 'lwc';

export default class NavigationMenuItem extends LightningElement {
    @api menuItem
    @api label
    @api href
    @api nestLevel
    @api isFirstLevel
    @api isSubmenuClosed 


    get listClassname() {
        return `navmenu__list nest-level-${this.nestLevel} ${this.isSubmenuClosed ? 'navmenu__hide' : ''}`
    }
    get pointerClassname() {
        return `navmenu__submenu_pointer ${this.isSubmenuClosed ? '' : 'pointer-bottom'}`
    }
    get next(){
        return +this.nestLevel + 1
    }

    submenuClick(e) {
        // close other menus on the same level of current branch
        if(this.isSubmenuClosed) {
            const selectedEvent = new CustomEvent("closemenus", {
                detail: {nestLevel: this.nestLevel,
                    label: this.label},
                bubbles: true,
            });            
            this.dispatchEvent(selectedEvent); 
            this.isSubmenuClosed = false;
        } else {
            this.isSubmenuClosed = true
        }
    }
    handleCloseMenus(e) {
        console.log(`Send component --- Label: ${e.detail.label} from nest level: ${e.detail.nestLevel}`)
        console.log(`Catch component --- Label: ${this.label} from nest level: ${this.nestLevel}`)
        const smth = this.template.querySelectorAll('c-navigation-menu-item')
        Array.from(smth).forEach(i => {
            i.isSubmenuClosed = true;
            console.log(i.isSubmenuClosed);
        })
        Array.from(smth).forEach(i => {
            console.log(i.isSubmenuClosed);
        })

    }
    
    @api dosmth() {
        // const submenu = this.template.querySelector('.navmenu__submenu');
        // submenu.classList.add('navmenu__hide')
    }
}