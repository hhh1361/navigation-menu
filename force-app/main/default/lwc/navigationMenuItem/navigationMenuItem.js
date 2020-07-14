import { LightningElement, api } from 'lwc';

export default class NavigationMenuItem extends LightningElement {
    @api menuItem
    @api label
    @api href
    @api nestLevel

    get listClassname() {
        return `navmenu__list navmenu__hide nest-level-${this.nestLevel}`
    }

    get next(){
        return +this.nestLevel + 1
    }

    click(e) {
        const selectedEvent = new CustomEvent("closemenus", {
            detail: this.nestLevel,
            bubbles: true,
          });
      
        this.dispatchEvent(selectedEvent);



        e.target.nextSibling.classList.toggle('navmenu__hide')
        e.target.firstChild.classList.toggle('pointer-bottom')
        
    }
}