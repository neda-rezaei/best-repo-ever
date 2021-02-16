import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api inputItem;
    
    inputitemselect(event){
        const selectEvent = new CustomEvent('select', {
            detail:this.inputItem
        });
        alert('from child');
        // 3. Fire the custom event
        this.dispatchEvent(selectEvent);
    }


    fireSelectEvent(event){
        alert('fireselectEvent from child');
        this.dispatchEvent(new CustomEvent('inputitemselect'));
    }

    
}