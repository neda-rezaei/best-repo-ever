import { LightningElement,track } from 'lwc'; 

export default class ParentComponent extends LightningElement {
    @track input;
    selected=false;
    items=[];    

    addInputToList(){

        this.input = this.template.querySelector('lightning-input').value;
        if(this.input){
            this.items.push(this.input);
            this.input='';
        }
    }

     handleSelect(evt){
         this.input=evt.detail;
         alert('from Parent');
          
     }
}

